import EventModel from "../model/EventModel.js"
import puppeteer from 'puppeteer'
import nodemailer from 'nodemailer'
import path from 'path'
import ejs from 'ejs'
import { error } from "console"
const __dirname = path.resolve()


export const registerToEvent = async (req, res) => {
    try {
        console.log(req.url)
        console.log(req.body)
        const { Email, CollegeName, ITManagerName, WebDesign, ITQuiz, Coding, Gaming, ThemaDance, PaperPresentation, ProductLaunch, SurpriseEvent, PhotoGraphyAndVideoGraphy, ITManager } = req.body

        if (!Email) return res.status(400).json({ isValid: false, errorType: 'EMAILNOTFOUND' })
        const oldRegisteredDate = await EventModel.findOne({ Email })
        if (oldRegisteredDate) return res.status(400).json({ isValid: false, errorType: 'ALREADLOGEDINSAMEEMAIL' })
        console.log('sssssssssss')

        const newRegister = new EventModel({
            Email, CollegeName, ITManagerName, WebDesign, ITQuiz,
            Coding, Gaming, ThemaDance, PaperPresentation, ProductLaunch, SurpriseEvent, PhotoGraphyAndVideoGraphy, ITManager
        })
        const data = await newRegister.save()

        console.log(data)
        downloadPdf(data).then(({ err, isValid, pdfUrl }) => {
            if (err || isValid == false) return console.log('downlaod pdf is not valid')

            const { subject, htmlStructure } = getEmailStructure()
            console.log(data.Email)
            sendMail(data.Email, subject, '', htmlStructure).then((res) => {
                console.log('sended message', res)
            }).catch((err) => console.log('email error ', error))

        }).catch((err) => console.log('err', err))
    } catch (error) {
        console.log("mongoose e", error)
    }
}


export const sendMail = (email, subject, text, html) => {
    return new Promise(async (resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAIL_EMAIL,
                pass: process.env.NODEMAIL_SECRET
            }
        })
        const mailContainer = {
            from: process.env.NODEMAIL_EMAIL,
            to: email, subject, text, html
        }

        transporter.sendMail(mailContainer, async (err, info) => {
            console.log(err)
            if (err) return reject(err)
            resolve(null, true)
        })
    })

}


export const downloadPdf = (data) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(path.join(__dirname, './', 'public', 'file.ejs'), async (err, data) => {
            if (err) return reject({ err })
            const browser = await puppeteer.launch({ headless: 'new' })
            const page = await browser.newPage()
            await page.setContent(data, {
                waitUntil: 'domcontentloaded'
            })
            await page.setViewport({ width: 1680, height: 1050 });

            const pdfUrl = `${Date.now()}${data.id}.pdf`
            console.log(pdfUrl)
            await page.pdf({
                path: path.join(__dirname, './', 'public', pdfUrl),
                format: "A4"
            })
            await browser.close()
            console.log('finished')
            resolve({ err, isValid: true, pdfUrl })
        })
    })
}


const getEmailStructure = (managerName, fileUrl) => {
    const subject = 'PINNACLE 2023 REGISTRATION'

    const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
<style>
    body {
        text-align: center;
    }

    .imagebox {
        width: 50%;
        margin: 0 auto 30px auto;
    }

    img {
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 55px;
    }

    p {
        font-size: 25px;
    }


    span {
        font-size: 22px;
        font-weight: 600;
    }

    .button {
        width: 5rem;
        background-color: rgb(49, 70, 188);
        padding: 15px 30px;
        border-radius: 10px;
        margin: 10px auto;
    }

    .button a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
    }
</style>
</head>
<body>
    <h1>St Philomea Pinnacle 2023</h1>
    <p>Dear ${managerName} your registration in pinncle is succussfull </p>
    <div class="imagebox">
        <img src="public/images/bgImage/bgimage1.jpg" alt="">
    </div>

    <span class="span">You can download your applicants detais pdf here </span>
    <div class="button"><a href="http://localhost:3000/${fileUrl}">Download</a></div>
</body>

</html>`

    return { subject, htmlStructure }
}