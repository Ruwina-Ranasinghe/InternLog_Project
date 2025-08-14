App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import adminLog from '';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<adminLog />} />
            </Routes>
        </Router>
    );
}

export default App;