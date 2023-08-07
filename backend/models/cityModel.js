import mongoose from "mongoose"; 

const citySchema = mongoose.Schema({
   name:{
      type: String,
      required:true
   },
   status:{
      type: Boolean,
      required:true,
      default: true
   }
}, {timestamps:true});

const City = mongoose.model('City', citySchema);

export default City;