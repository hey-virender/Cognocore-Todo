import React from "react";
import Header from "./components/Header";
import axiosClient from "./api/axiosClient";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import { useToast } from "./context/ToastContext.jsx";
const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [showCreateTask, setShowCreateTask] = React.useState(false);
  const {addToast} = useToast()

  const fetchTasks = async () => {
    try {
      const response = await axiosClient.get("/tasks");
     
      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
      addToast("Something went wrong","error")
    }
  };

  

  React.useEffect(() => {
    fetchTasks();
  },[]);

  const handleCreateTask = async({title,description})=>{
    if(!title || !description) return;
    try {
      const response = await axiosClient.post("/tasks", { title, description });
      if(response.data.success){
        addToast("Task created successfully","info")
        setShowCreateTask(false);
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
      addToast("Something went wrong","error")
    }
  }
  const handleDeleteTask = async(id)=>{
    if(!id) return;
    try {
      const response = await axiosClient.delete(`/tasks/${id}`);
if(response.data.success){
  addToast("Task deleted successfully","info")
  fetchTasks();
}
    } catch (error) {
      console.log(error);
      addToast("Something went wrong","error")
    }
  }
  return (
    <div>
      <Header 
      
      setShowCreateTask={() => setShowCreateTask(true)} />
     
      { showCreateTask ? <CreateTask onCreateTask={handleCreateTask} onCancel={() => setShowCreateTask(false)}/>: <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 px-3">
       {tasks.length > 0 ? tasks.map((task) => (
         <Task key={task._id} task={task} onDelete={handleDeleteTask} />
       )):<div className="text-center text-3xl font-medium py-7 col-span-3">No tasks yet</div>}
      </div>}
    </div>
  );
};

export default App;
