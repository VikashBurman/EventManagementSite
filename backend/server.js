import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at Port ${process.env.PORT}`)
})