import User from "../user/user.model.js";

export const authService = {
  findByMail : async (email) => await User.findOne({email}),
  createUser : async (email, password) => {
    const user = await User.create({email, password})
    user.password = undefined
    return user
  }
}