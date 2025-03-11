import React, { useState } from "react";
import { useToast } from "../context/ToastContext.jsx";

const CreateTask = ({ onCreateTask,onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {addToast} = useToast()
  const maxLength = 100;

  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input length is within the limit
    if (inputValue.length <= maxLength) {
      setDescription(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return addToast("Please fill in all fields","error");
    onCreateTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Task
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter task description"
              value={description}
              onChange={handleDescriptionChange}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <p className="text-sm text-gray-500">
              {description.length}/{maxLength} characters
            </p>
            {description.length >= maxLength && (
              <p className="text-sm text-red-500">
                Maximum character limit reached!
              </p>
            )}
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="w-full text-blue-600 py-2 px-4
            border border-blue-600 font-medium rounded-lg hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Create Task
            </button>
            <button className="w-full text-red-600 py-2 px-4 rounded-lg  border border-red-600 font-medium hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
