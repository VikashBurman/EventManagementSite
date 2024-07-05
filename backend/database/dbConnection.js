import mongoose from "mongoose";


export const dbConnection = () =>{ 
    mongoose.connect(
        process.env.MONGO_URI,
        {dbName:"EVENT_PROJECT_MESSAGES"}
    )
  .then(() => console.log('DataBase connected👍👍'))
  .catch(err => console.log('MongoDB connection error!!: ', err))
}