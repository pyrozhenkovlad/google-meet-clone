const UserModel = require("../models/user-model")

class UserService {
    async createUser(name,avatarUrl) {
        const user = await UserModel.create({name,avatarUrl})
        return user
    }

    async getUsers() {
        const users = await UserModel.find()
        return users
    }
}

module.exports = new UserService();