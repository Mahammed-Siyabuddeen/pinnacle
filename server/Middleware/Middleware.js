import jwt from 'jsonwebtoken'
import EventModel from '../model/EventModel.js'

export const checkAuthentication = async (req, res, next) => {
    try {
        const token = req.cookies.acessToken
        if (!token) return res.status(400).json({ isError: true, errorType: 'TOKENNOTFOUND' })
        if (token) {
            const decode = await jwt.verify(token, 'strongsecret')
            req.Email = decode.Email
            req._id = decode._id
            next()
        }
    } catch (error) {
        res.status(400).json({ isError: true, errorType: 'TOKENEXPIRED' })
    }
}

export const getEventDetails = async (req, res) => {
    try {
        const data = await EventModel.find({})
        if (!data) return res.status(400).json({ isValid: false })
        res.status(200).json(data)
    } catch (error) {

    }
}