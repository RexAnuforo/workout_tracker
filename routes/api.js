const router=require("express").Router();
const workout=require("/public/workout.js");

router.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});


router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/stats.html"));
});

module.exports=router;