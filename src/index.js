import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Error, Aside } from './components';
import { Home, Choice } from './pages';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Aside />
            <Routes>
                <Route exact path="/" element={<Choice />} />
                <Route path="/home/:id" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
