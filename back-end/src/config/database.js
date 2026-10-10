import mongoose from "mongoose";

function connectDB () {
  mongoose.connect('mongodb+srv://hr_db_user:x1LdjAZ4kvlsAToq@cluster0.ir1kgk1.mongodb.net/learn-nodejs?appName=Cluster0').then(()=> {
  console.log("Connect database successfully!");
  }).catch(() => {
    console.log("Connect database failed!");
  })
}

export const optionSchema = {
  versionKey: false, timestamps: true
}

export default connectDB