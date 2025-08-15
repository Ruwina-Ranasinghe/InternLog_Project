import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import BarChartComponent from "./components/barGraph.tsx";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAnalysisGraph from "./components/adminAnalysisGraph.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element= <Login/>/>
                <Route path="/register" element= <Register/>/>
                <Route path="/" element= <Home/>/>
                <Route path="/t" element=<BarChartComponent/>/>
                <Route path="/admin-dashboard" element= <AdminDashboard/>/>
                <Route path="/ad" element=<AdminAnalysisGraph/>/>
            </Routes>
        </Router>
    );
}

export default App;