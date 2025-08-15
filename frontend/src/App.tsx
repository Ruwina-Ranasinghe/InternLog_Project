import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
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
=======

>>>>>>> Stashed changes

const App = () => {
    return (
        <Router>
            <Routes>
<<<<<<< Updated upstream
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/view-all-tasks" element={<ViewAllTasks />} />
                <Route path="/edit-task" element={<EditTask />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-log" element={<AdminLog />} />
                <Route path="*" element={<NotFound />} />
=======
                <Route path="/" element={< />} />
                <Route path="/payment" element={<Payment />} />
>>>>>>> Stashed changes
            </Routes>
        </Router>
    );
};
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export default App;
