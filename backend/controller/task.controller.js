import Task from "../model/Task.js";

export const createTask = async(req,res)=>{
  try {
    const {title,description} = req.body;
    if(!title || !description){
      return res.status(400).json({success:false, message:"All fields are required"});
    }
    const task = await Task.create({title,description});
    return res.status(200).json({success:true, task});

  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:"Internal Server Error"});
  }
}

export const getTasks = async(req,res)=>{
  try {
    const tasks = await Task.find({}).sort({createdAt:-1});
    if(!tasks){
      return res.status(200).json({success:false,message:"Tasks not found"});
    }
    return res.status(200).json({success:true,tasks});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:"Internal Server Error"});
  }
}

export const deleteTask = async (req,res)=>{
  try {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);
    if(!task){
      return res.status(404).json({success:false, message:"Task not found"});
    }
    return res.status(200).json({success:true, message:"Task deleted successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:"Internal Server Error"});
  }
}