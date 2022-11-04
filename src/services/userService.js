import db from "../models";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExit = await checkUserEmail(email);
      if (isExit) {
        resolve();
      } else {
        //return error
        userData.errCode = 1;
        userData.message = "Account does not exist";
        resolve(userData);
      }
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

let handleCheckPass = (UserPass) => {
  return new Promise(async (resolve, reject) => {
    try {
        
    } catch (e) {
        reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};

//check in DB
