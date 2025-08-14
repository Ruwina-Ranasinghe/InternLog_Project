import { useNavigate } from 'react-router-dom';

interface Task {
  id: number;
  title: string;
  description: string;
  status: "In Progress" | "To do" | "Completed";
}

const tasks: Task[] = [
  {
    id: 1,
    title: "User 1 - Task 1",
    description:
      "Description Description Description Description Description Description Description Description Description",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Task 2",
    description:
      "Description Description Description Description Description Description Description Description Description",
    status: "Completed",
  },
];

const TaskCard = () => {
  const navigate = useNavigate();

//   const handleEditClick = (taskId: number) => {
//     navigate(`/edit-task/${taskId}`);
//   };
    
    const handleEditClick = () => {
    navigate('/edit-task');
  };

  // Edit icon SVG component
  const EditIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 14.2373L17.411 7.58902C18.192 6.80797 18.583 6.41745 18.5179 6.35234C18.4528 6.28723 18.0623 6.67825 17.2812 7.45930L10.6330 14.1076C10.4851 14.2554 10.4112 14.3293 10.3529 14.4138C10.2946 14.4984 10.2546 14.5915 10.1747 14.7777L9.86264 15.4142C9.77644 15.6181 9.73334 15.7200 9.79256 15.7793C9.85177 15.8385 9.95365 15.7954 10.1574 15.7092L10.7939 15.3970C10.9801 15.3171 11.0732 15.2772 11.1078 15.2188C11.1924 15.1605 11.2663 15.0866 11.4141 14.9388Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border rounded-lg bg-gray-100 p-3 sm:p-4 shadow-sm"
          style={{ border: '1px solid #830999' }}
        >
          {/* Mobile Layout: Stacked */}
          <div className="block sm:hidden">
            {/* Task Content */}
            <div className="mb-3">
              <h2 className="font-semibold text-base text-gray-800 mb-1">
                {task.title}
              </h2>
              <p className="text-xs text-gray-800 leading-relaxed">
                {task.description}
              </p>
            </div>
            
            {/* Status and Edit on new line */}
            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-lg text-white text-xs font-semibold ${
                  task.status === "To do"
                    ? "bg-[#B695DF]"
                    : task.status === "In Progress"
                    ? "bg-[#BA0C06]"
                    : task.status === "Completed"
                    ? "bg-[#2ABA06]"
                    : ""
                }`}
              >
                {task.status}
              </span>
              
              <button
                // onClick={() => handleEditClick(task.id)}
                onClick={() => handleEditClick()}
                className="p-2 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                aria-label={`Edit ${task.title}`}
              >
                <EditIcon className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout: Side by side */}
          <div className="hidden sm:flex items-center justify-between">
            {/* Task Content */}
            <div className="flex-1 min-w-0 pr-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {task.title}
              </h2>
              <p className="text-sm text-gray-800 mt-1">
                {task.description}
              </p>
            </div>

            {/* Status and Edit Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Status Badge */}
              <span
                className={`px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap ${
                  task.status === "To do"
                    ? "bg-[#B695DF]"
                    : task.status === "In Progress"
                    ? "bg-[#BA0C06]"
                    : task.status === "Completed"
                    ? "bg-[#2ABA06]"
                    : ""
                }`}
              >
                {task.status}
              </span>

              {/* Edit Icon Button */}
              <button
                onClick={() => handleEditClick()}
                className="p-2 lg:p-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                aria-label={`Edit ${task.title}`}
              >
                <EditIcon className="w-5 h-5 lg:w-8 lg:h-8 text-black group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;