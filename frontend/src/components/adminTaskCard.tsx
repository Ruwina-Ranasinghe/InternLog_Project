import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Task {
  _id: string;
  task_name: string;
  description: string;
  status: "To do" | "In Progress" | "Completed";
}

const UserTasks: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "to do":
      case "todo":
        return "bg-yellow-500 text-white";
      case "in progress":
      case "in-progress":
        return "bg-red-600 text-white";
      case "completed":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
            `http://localhost:5000/api/tasks/user/${id}`,
            {
              headers: token ? { Authorization: `Bearer ${token}` } : {},
            }
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-6">Loading tasks...</p>;
  }

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-6">This user currently has no tasks.</p>;
  }

  return (
      <div className="space-y-4 max-w-4xl mx-auto p-4">
        {tasks.map((task) => (
            <div
                key={task._id}
                className="bg-white p-4 rounded-xl border border-purple-300 flex justify-between items-center shadow-md hover:shadow-lg transition"
            >
              {/* Task Info */}
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{task.task_name}</h2>
                <p className="text-gray-600 text-sm mt-1">{task.description}</p>
              </div>

              {/* Status */}
              <span
                  className={`px-3 py-1 rounded-full font-semibold text-sm ${getStatusClass(
                      task.status
                  )}`}
              >
            {task.status}
          </span>
            </div>
        ))}
      </div>
  );
};

export default UserTasks;
