const userService = require("../services/user-service");

class UserController {
  async createUser(req, res, next) {
    try {
      const { name, avatarUrl } = req.body;
      const userData = await userService.createUser(name, avatarUrl);
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getUsers();
      return res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
