import express from "express";
import homeController from "../controller/homeController"
import apiController from "../controller/apiController"
const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", homeController.handleSayHello)
    router.get("/user", homeController.handleUserPage)
    router.post("/users/create-user", homeController.handleCreateNewUser)
    router.post("/user-delete/:id", homeController.handleDelete)
    router.get("/user-update/:id", homeController.getUserUpdate)
    router.post("/user/user-update", homeController.handleUpdateUser)

    router.get('/api/test-api', apiController.testApi)
    return app.use("/", router)
}

export default initWebRoutes