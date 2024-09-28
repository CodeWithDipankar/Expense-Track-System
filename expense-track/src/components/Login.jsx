import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; // Ensure correct path

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation logic
        if (!email) {
            setError('Email is required.');
            return;
        }

        if (!password) {
            setError('Password is required.');
            return;
        }

        // Clear error if validation passes
        setError('');

        // Handle login logic here (e.g., API call)
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect to the dashboard after successful login
        navigate('/dashboard');
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <h2>Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!error && !email} // Show invalid style if there's an error
                    />
                    <Form.Control.Feedback type="invalid">
                        {error && !email ? 'Please fill in your email.' : ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!error && !password} // Show invalid style if there's an error
                    />
                    <Form.Control.Feedback type="invalid">
                        {error && !password ? 'Please fill in your password.' : ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
