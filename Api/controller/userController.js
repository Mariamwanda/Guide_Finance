import usersModels from "../models/usersModels.js";
import connectDB from "../config/db.js";
import bcrypt from "bcrypt"
 // pour établir la connexion à la base de données.

class UserController {
    static async createUser(req,res){
        try{
            const {email,motPasse,...body} = req.body
            const utilisateur = await usersModels.findOne({email:email})
            if(utilisateur){
                return res.status(404).json({
                    status : false,
                    message : "Ce utilisateur existe déjà"

                })
            }
            const userCreate = await usersModels.create({email,motPasse:await bcrypt.hash(motPasse,10),...body})
            if(!userCreate){
                return res.status(404).json({
                    status : false,
                    message : "aucun enregistrement"
                })
            }
            return res.status(200).json({
                status : true ,
                message : "enregistrement effectué"
            })
        }catch(error){
            res.status(500).json({
                message : error.message,
            })
        }
    }

    static async loginUser(req, res) {
        try {
            const { email, motPasse } = req.body;

            // Recherchez un utilisateur avec l'email donné
            const user = await usersModels.findOne({ email });

            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "Cet utilisateur n'existe pas",
                });
            }

            // Vérifiez si le mot de passe correspond en utilisant bcrypt.compare()
            const passwordMatch = await bcrypt.compare(motPasse, user.motPasse);

            if (!passwordMatch) {
                return res.status(401).json({
                    status: false,
                    message: "Mot de passe incorrect",
                });
            }

            return res.status(200).json({
                status: true,
                message: "Connexion réussie",
                user: user,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default UserController;
