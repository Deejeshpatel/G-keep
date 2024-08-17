import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderSidebar from './components/HeaderSidebar';
import NoteInput from './components/NoteInput';
import NoteContainer from './components/NoteContainer';
// import Login from './components/Login';
// import Signup from './components/Signup';
import { fetchNotes } from './redux/actions/noteActions';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      {<HeaderSidebar />}
      <main>
        <Routes>
          <Route path="/" element={<> <NoteInput /><NoteContainer /></>} />
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
