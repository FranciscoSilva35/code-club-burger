// const {Router} = require("express")
import { Router } from "express"



const routes = new Router()



routes.get('/', (request, response) => {





    return response.json({ menssage: 'Hello world' })

})

export default routes

// module.exports = routes