import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';

const registerUser = asyncHandler( async (req,res) => {
   const {name,email,password} = req.body;
   
   /* Check all values are present */
   if(!name || !email || !password){
      res.status(400);
      throw new Error('Please add all Fields')
   }

   /* check for duplicate email */
   const existUser = await User.findOne({email});
   if(existUser){
      res.status(400);
      throw new Error('Email already Exists')
   }

   /* Save user */
   const user = await User.create({name,email,password});
   if(user){
      res.status(201);
      res.json(user)
   }else{
      res.status(400)
      throw new Error('Invalid Data')

   }
})

const authUser = asyncHandler( async (req,res) => {

})

const logout = asyncHandler( async (req,res) => {

})

const getUserProfile = asyncHandler( async (req,res) => {

})

const updateUserProfile = asyncHandler( async (req,res) => {

})


export {
   registerUser,
   authUser,
   logout,
   getUserProfile,
   updateUserProfile
}