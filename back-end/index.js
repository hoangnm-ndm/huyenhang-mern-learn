import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";
import connectDB from "./src/config/database.js";
import { errorHandler } from "./src/shared/middlewares/errorHandler.js";

const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PATCH", "DELETE", "POST"],
  }),
);

app.use("/api", routes);
// frontend: codefarm.edu.vn

app.use(errorHandler);

app.listen(3000, "localhost", () => {
  console.log("server is running port,...");
});

//* String, Number, Boolean, Undefined, Null, Array, Object.

//* function constructor = hàm khởi tạo

// function Person (name, age, address, email) {
//   name = this.name;
//   age = this.age;
//   address = this.address;
//   email = this.email;
// }

// Person.prototype.login = function () {
//   console.log("dang nhap thanh cong!");
// }

// const hoang = new Person("Hoang", 33, "BN", "hoang@gmail.com")

// hoang.login()
