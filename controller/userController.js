const db = require('../models')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const { checkPassword } = require('../helper/bycryptHelper');
const { salt } = require('../helper/bycryptHelper')

class UserController {
    static async register(req, res, next) {
        try {
            const { username, password } = req.body;
            const hashPassword = await salt(password).catch(err => {
                return res.status(500).send('password encryption failed')
            })
            const admin = await db.admins.create({
                username,
                password: hashPassword,
            })

            res.send(admin)
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            let getAdmin = await db.admins.findAll({
                where: {
                    username: req.body.username
                }
            })

            if (getAdmin.length === 0) {
                res.status(404).send("User is not available")
            }
            else {
                const admin = getAdmin[0]
                const isPassMatch = await checkPassword(req.body.password, admin.dataValues.password)
                if (!isPassMatch) {
                    res.status(400).send("Wrong Password")
                } else {
                    const token = jwt.sign(admin.dataValues, secret, {
                        expiresIn: '365d'
                    })
                    admin.dataValues.token = token
                    res.send(admin.dataValues)
                }
            }
        } catch (err) {
            next(err);
        }
    }
}
module.exports = UserController;
