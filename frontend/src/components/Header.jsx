import React from 'react';

const Header = ({setShowCreateTask}) => {
  return (
    <div className='flex justify-between items-center py-4 px-6 bg-white shadow-sm border-b border-gray-200'>
      <h1 className='text-3xl font-bold text-gray-900'>Todo App</h1>
      <button className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors' onClick={setShowCreateTask}>
        Create Task
      </button>
    </div>
  );
};

export default Header;