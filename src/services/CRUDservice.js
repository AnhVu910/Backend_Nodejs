import bcrypt from "bcryptjs";
import db from "../models";

const salt = bcrypt.genSaltSync(10); 

let createNewUser =async(data)=>{
    return new Promise(async(resolve, reject) =>{
        try {
            let hashPass =await hashpassword(data.password);
            await db.User.create({
                email: data.email, 
                password: hashPass,
                name: data.name,  
                address: data.address,
                roleid: data.roleid,
                phone: data.phone,
            })
            resolve('Create new user successfully');
        } catch (error) {
            reject(error);
        }
    })
    

}
let hashpassword = (password)=>{
    return new Promise(async(resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }


    })
}
let getAllUsers = () => { 
    return new Promise(async(resolve, reject) => {
        try {
            let users = await db.User.findAll();
            resolve(users);
            
        } catch (error) {
            reject(error);
        }
    });
}
module.exports ={
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
}