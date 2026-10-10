import { hashPassword } from "../../shared/utils/password.js"
import User from "../user/user.model.js"
import bcrypt from "bcryptjs"
import { authService } from "./auth.service.js"

export const authController = {
  register: async (req, res) => {
    /**
     * * Bước 1: Email ton tai chua?
     * * Bước 2: Mã hoá mật khẩu.
     * * Bước 3: Lưu lại vào DB.
     * * Bước 4: Thông báo thành công, gửi về kết quả (lược bỏ infor secret)
     */

    const { email, password} = req.body
    const userExist = await authService.findByMail(email)
    if(userExist) {
      return res.status(400).json({
        message: "Nguoi dung da ton tai!"
      })
    }
    const hashPass = hashPassword(password)
    const user = await authService.createUser(email, hashPass)
    return res.status(201).json({
      message: "Dang ky thanh cong!",
      data: user
    })
  }
}

/**
 * ? BTVN: Hoàn thiện
 * 1. Đăng ký
 * 2. Đăng nhập.
 * 3. Middleware validation body dùng cho auth với zod.
 * 4. Forgot password.
 * 5. Verify email.
 * 6. Refresh token.
 * 
 * ! Permission:
 * 
 * RBAC: Role Base Access Control (rank - level cao sẽ sở hữu toàn bộ quyền level thấp hơn).
 * 
 * ABAC
 * claude
 */