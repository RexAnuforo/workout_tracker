const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default:() => new Date()
        }, 
        exercises: 
        [
            {
                type: {
                    type: String, 
                    trim: true, 
                    require: "enter exercise type"
                },
                name: {
                    type: String, 
                    trim: true, 
                    require: "enter exercise name"
                },
                duration: {
                    type: String, 
                    trim: true, 
                    require: "enter exercise duration"
                },
                weight: {
                    type: Number 

                },
                reps: {
                    type: Number

                },
                set: {
                    type: Number 

                },
                distance: {
                    type: Number 

                }
            }
        ]
    },
    {
        toJSON:{
            virtuals:true
        }
    }
);
const workout=mongoose.model("workout",workoutSchema)
module.exports=workout;