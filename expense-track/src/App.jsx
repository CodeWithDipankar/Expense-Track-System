import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard'; // New Dashboard component
// import Settings from './components/Settings';   // New Settings component

function App() {
    return (
        // <Router>
            <div>
                <NavbarComponent />
                {/* <Routes> */}
                    {/* <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} /> */}
                    {/* Add more routes as needed */}
                {/* </Routes> */}
            </div>
        // </Router>
    );
}

export default App;
