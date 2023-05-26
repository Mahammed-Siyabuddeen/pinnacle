import AdminModel from "../model/AdminModel.js"
import jwt from 'jsonwebtoken'

export const loginAdmin = async (req, res) => {
    try {
        console.log(req.url)
        const { Email, Password } = req.body

        const user = await AdminModel.findOne({ Email })
        if (!user) return res.status(400).json({ isValid: false, errorType: 'INVALIDADMINEMAIL' })
        console.log('password match ', user.matchPassword(Password))
        if (!user.matchPassword(Password)) return res.status(400).json({ isValid: false, errorType: 'PASSWORDNOTMATCH' })

        const token = await jwt.sign({ Email: user.Email, _id: user._id }, 'someletterincluded', { expiresIn: "1h" })
        res.cookie("acessToken", token, { httpOnly: true, somesite: "strict" })
        res.status(200).json({ isValid: true, isLogedIn: true })
    } catch (error) {
        console.log(error)
    }
}