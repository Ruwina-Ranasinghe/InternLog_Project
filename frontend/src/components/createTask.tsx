import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTaskForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    task_name: '',
    description: '',
    status: 'todo',
  });

  const handleClose = () => {
    navigate('/user-dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Please login first');

    try {
      const res = await fetch('http://localhost:5000/api/tasks/create-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Failed to create task');
      } else {
        console.log('Task created:', data);
        alert('Task created successfully!');
        navigate('/user-dashboard');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
      <div className="flex items-center justify-center pl-4 pr-4">
        <div className="w-full max-w-md lg:max-w-4xl bg-purple-200 rounded-3xl p-6 shadow-lg border-2 border-purple-300 relative">
          {/* Close Button */}
          <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition-colors group"
              aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h1 className="text-2xl font-bold text-gray-800 mb-6 pr-10">Create a Task</h1>

          <div className="space-y-4">
            {/* Task Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Task Name</label>
              <input
                  type="text"
                  name="task_name"
                  value={formData.task_name}
                  onChange={handleInputChange}
                  placeholder="Enter task name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter task description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="todo">To do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                  onClick={handleSubmit}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-transform"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CreateTaskForm;
