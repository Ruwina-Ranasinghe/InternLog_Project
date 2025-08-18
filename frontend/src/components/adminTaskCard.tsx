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

const UserTasks = () => {
  return (
    <div className="lg:space-y-6  space-y-6 ">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between border rounded-lg bg-gray-100 p-4 shadow-sm"
          style={{  border: '1px solid #830999'  }}
        >
          <div>
            <h2 className="font-semibold text-lg text-gray-800">{task.title}</h2>
            <p className="text-sm text-gray-800 mr-2">{task.description}</p>
          </div>

          <span
            className={`lg:px-3 lg:py-1 lg:w-24 px-3 py-1 w-15 lg:p-5 rounded-lg text-white text-sm font-semibold ${
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
        </div>
      ))}
    </div>
  );
};

export default UserTasks;
