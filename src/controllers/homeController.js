import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async(req, res) => {
    try {
        
        let data= await db.User.findAll();
        return res.render('homepage.ejs',
        {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
}
let getCRUD = async(req, res) => {
    try {  
        return res.render('CRUD.ejs')
    } catch (error) {
        console.log(error);
    }
}
let postCRUD = async(req, res) => {
    try {  
      await CRUDservice.createNewUser(req.body);
       return res.send('postCRUD');
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}