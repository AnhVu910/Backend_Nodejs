import bcrypt from "bcryptjs";
import { raw } from "body-parser";
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
            let users = await db.User.findAll(
                {
                    raw: true
                }
            );
            resolve(users);
            
        } catch (error) {
            reject(error);
        }
    });
}

let getInfoUserById = (userID)=> {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userID }, raw:true
            });
            if(user) {
                resolve(user);
            }else{
                resolve({});
            }
        } catch (error) {
            resolve(error);
        }
    });
}

let updateUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id}
            })
            user.name = data.name;
            user.address = data.address;
            user.phone = data.phone;
        
            await user.save();
            let allUser = await db.User.findAll();
            resolve(allUser);

        } catch (error) {
            resolve(error); 
        }
    })
}
let deleteUser = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id}
            })
            await user.destroy();
            resolve();

        } catch (error) {
            reject(error);
        }
    })
}
module.exports ={
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
    getInfoUserById: getInfoUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
}