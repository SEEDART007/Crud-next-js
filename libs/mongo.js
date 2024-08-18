import mongoose from 'mongoose'

const connectMongoDB=async()=>{
    try {
      await  mongoose.connect("mongodb+srv://dashranger60:D4fDVlnC7NlB4KaA@cluster0.plngu.mongodb.net/CRUD_DB")
      console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;