import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create-user', homeController.getCRUD);


    router.get('/get-user', homeController.dispalyCRUD);
    router.post('/post-crud', homeController.postCRUD);

    router.get('/edit-user', homeController.editCRUD);
    router.post('/put-user', homeController.putCRUD);
    router.get('/delete-user', homeController.deleteCRUD);




    router.post('/api/login', userController.handleLogin);
    router.get('/api/list-users', userController.GetListUsers)




    //rest api 
    return app.use("/", router);
}

module.exports = initWebRoutes;