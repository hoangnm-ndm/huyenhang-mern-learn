
import { mongoose } from 'mongoose';
import { optionSchema } from '../../config/database.js';
const userSchema = new mongoose.Schema({
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  role: {
    type: String, 
    enum: ["superAdmin", "admin", "member"],
    default: "member"
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  verifyEmail: {},
  isActive: {},
  
  // * Có thể thêm trường lưu trữ sesson: phiên đăng nhập lần cuối
}, optionSchema)

const User =  mongoose.model("User", userSchema)
export default User