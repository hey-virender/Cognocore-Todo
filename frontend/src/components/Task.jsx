import React from "react";
import { formatDate } from "../utils/formatDate";

const Task = ({ task, onDelete }) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg hover:shadow-xl shadow-slate-500 transition-shadow border border-gray-100">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">{task.title}</h3>
        <p className="text-gray-600 font-semibold">{formatDate(task.createdAt)}</p>
        </div>
        <p className="text-gray-700 italic">{task.description}</p>
        
      </div>
      <div className="mt-4">
        <button
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;