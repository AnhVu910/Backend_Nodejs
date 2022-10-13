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
        let message = await CRUDservice.createNewUser(req.body);
        console.log(message);
       return res.send('postCRUD');
    } catch (error) {
        console.log(error);
    }
}

let dispalyCRUD = async(req, res) => {
    try {  
        let userData = await CRUDservice.getAllUsers();
        console.log(userData);
        return res.render('displayuser.ejs',{
            dataTable: userData
        })
    } catch (error) {
        console.log(error);
    }
}

let editCRUD= async(req, res) => {
    let userID = req.query.id;
    if(userID) {
        let dataUser= await CRUDservice.getInfoUserById(userID);
        console.log(dataUser);

        return res.render('editUser.ejs',{
            user: dataUser
        });


    }else{
        return res.send('Không tồn tại khách hàng này');
    }
    console.log(req.query.id);
}
let putCRUD= async(req, res) => {
    let data =  req.body;
    let allUser= await CRUDservice.updateUser(data);
    return res.render('displayuser.ejs',{
        dataTable: allUser
    })
}
let deleteCRUD = async(req, res) => {
    let id = req.query.id;
    await CRUDservice.deleteUser(id);
    return res.send('successfully')
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    dispalyCRUD: dispalyCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}