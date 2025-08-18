import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import UserDashboard from "./pages/user/userDashboard";
import CreateTask from "./pages/user/createTask";
import ViewAllTasks from "./pages/user/viewAllTasks";
import EditTask from "./pages/user/editTask";
import AdminDashboard from "./pages/admin/adminDashboard";
import AdminLog from "./pages/admin/adminLog";
import NotFound from "./pages/404/errorPage";
import UserLog from "./pages/admin/userLog";


const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/view-all-tasks" element={<ViewAllTasks />} />
                <Route path="/edit-task/:id" element={<EditTask />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/tasks/user/:id" element={<AdminLog />} />
                <Route path="/user-log" element={<UserLog />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
};

export default App;

