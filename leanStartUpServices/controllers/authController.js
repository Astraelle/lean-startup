const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.createUser = async (req, res) =>{
    const {username, email, password, role} = req.body();

    try {
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                message: "Cet email à déjà été utilisé pour un compte"
            });
        }

        const user = new User({
            username,
            email,
            password,
            role: role || 'user'
        });

        await user.save();
        res.status(201).json({
            message: "Le compte à bien été créé"
        })
    } catch (err) {
        res.status(500).json({
            message: "Une erreur est survenue coté serveur"
        })
    }
};

exports.getUser = async (req, res) =>{
    const {email, password} = req.body();

    try{
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                message: "Identifiants incorrects"
            });
        }

        const pwdVerify = await bcrypt.compare(password, user.password);

        if (!pwdVerify) {
            return res.status(400).json({
                message: "Identifiants incorrects"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: '1h'
            }
        )

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch(err){
        res.status(500).status({
            message: "Une erreur est survenue coté serveur"
        })
    }
}