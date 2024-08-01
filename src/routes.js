// const {Router} = require("express")
import { Router } from "express"
// import { v4 } from "uuid"

// import User from "./app/models/User"

const routes = new Router()


import UserController from "./app/controllers/UserController"
routes.post('/users', UserController.store)

export default routes

// module.exports = routes