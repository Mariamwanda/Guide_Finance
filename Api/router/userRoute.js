import express  from "express";

import userController from "../controller/userController.js";

const router = express.Router()

router.post("/usersModels",userController.createUser)
router.post("/usersLogin",userController.loginUser)

export default router;



// MAL15ho4qcKwc2Ls
// mongodb+srv://mariamwandaogo:MAL15ho4qcKwc2Ls@g-finance.pstiody.mongodb.net/