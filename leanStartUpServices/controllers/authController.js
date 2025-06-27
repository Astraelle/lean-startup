const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Assure-toi d’avoir la connexion MySQL ici

exports.createUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Vérifie si l'utilisateur existe déjà
        db.query(`SELECT * FROM users WHERE email = "${email}"`, async (err, results) => {
            if (err) return res.status(500).json({ message: "Erreur serveur lors de la vérification de l'email", err});

            if (results.length > 0) {
                return res.status(400).json({ message: "Cet email a déjà été utilisé pour un compte" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            if (role === null) {
                role = "user"
            }

            db.query(
                `INSERT INTO users (username, email, password, role) VALUES ("${username}", "${email}", "${hashedPassword}", "${role}")`,
                (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: "Erreur lors de la création du compte" });
                    }

                    res.status(201).json({ message: "Le compte a bien été créé" });
                }
            );
        });
    } catch (err) {
        res.status(500).json({ message: "Une erreur est survenue côté serveur" });
    }
};

exports.getUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        db.query(`SELECT * FROM users WHERE email = "${email}"`, async (err, results) => {
            if (err) return res.status(500).json({ message: "Erreur serveur" });

            if (results.length === 0) {
                return res.status(400).json({ message: "Identifiants incorrects" });
            }

            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(400).json({ message: "Identifiants incorrects" });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    role: user.role
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            });
        });
    } catch (err) {
        res.status(500).json({ message: "Une erreur est survenue côté serveur" });
    }
};
