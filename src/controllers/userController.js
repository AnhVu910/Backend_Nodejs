import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Empty input",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.message,
    user: userData.user ? userData.user : {},
  });
};

let GetListUsers = async (req, res) => {
  let id = req.body.id; // all or id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errorMessage: "Empty id",
      listUsers: [],
    });
  }
  let listUsers = await userService.getListUser(id);
  return res.status(200).json({
    errCode: 0,
    errorMessage: "OK",
    listUsers,
  });
};

module.exports = {
  handleLogin: handleLogin,
  GetListUsers: GetListUsers,
};

// check in client
