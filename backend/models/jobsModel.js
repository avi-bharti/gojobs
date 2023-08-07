import mongoose from "mongoose"; 

const jobsSchema = mongoose.Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
   },
   title:{
      type: String,
      required:true
   },
   description:{
      type: String,
      required:true
   },
   hasHired:{
      type: Boolean,
      required: true,
      default:false
   },
   isActive:{
      type: Boolean,
      required: true,
      default:true
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      required:false,
      ref: 'Category'
   },
   subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required:false,
      ref: 'Category'
   },
   closesAt: {
      type: String,
      requried: true
   },
   ctc: {
      type: Number,
      required: false,
      default: null
   },
   location: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: 'City'
   }
}, {timestamps:true});

const Jobs = mongoose.model('Jobs', jobsSchema);

export default Jobs;