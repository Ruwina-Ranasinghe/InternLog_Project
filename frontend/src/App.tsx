import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLog from './pages/admin/adminLog';
import AdminDashboard from './pages/admin/adminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLog />} /> 
            </Routes>
        </Router>
    );
}

export default App;
