import db from "../models";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  console.log(email, password);
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExit = await checkUserEmail(email);
      if (isExit) {
        let user = await db.User.findOne({
          where: { email: email },
        });
        if (user) {
          let checkPass = await bcrypt.compareSync(password, user.password);
          if (checkPass) {
            userData.errCode = 0;
            userData.message = "Logged in successfully";
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.message = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.message = "Account not found";
        }
      } else {
        userData.errCode = 1;
        userData.message = "Account does not exist";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};

//check in DB
