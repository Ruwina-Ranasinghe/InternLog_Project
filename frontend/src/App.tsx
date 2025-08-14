import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLog from './pages/admin/adminLog';
import AdminDashboard from './pages/admin/adminDashboard';
import ViewAllTasks from './pages/user/viewAllTasks';
import UserDashboard from './pages/user/userDashboard';
import CreateTask from './pages/user/createTask';
import EditTask from './pages/user/editTask';
import { NotFound } from './pages/404/errorPage';

function App() {
    return (
        <Router>
            <Routes>
               
                <Route path="/" element={<ViewAllTasks />} /> 

                <Route path="/user-dashboard" element={<UserDashboard />} /> 
                <Route path="/create-task" element={<CreateTask />} /> 
                <Route path="/view-all-tasks" element={<ViewAllTasks />} /> 
                <Route path="/edit-task" element={<EditTask />} /> 
                

                <Route path="/admin-log" element={<AdminLog />} /> 
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </Router>
    );
}

export default App;
