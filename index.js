const express =require("express")
const {connection} =require("./db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")
require("dotenv").config()

const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
res.send("This is Homepage ")
})
app.use("/users",userRouter)
app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connect to the DB");
        console.log(`server is running at port ${process.env.port}`);
    }catch(err){
        console.log(err);
        console.log("Something Went Wrong!!!");
    }
})