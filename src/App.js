import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Students from './components/student/students/students';
import Student from './components/student/student';
import Button from './components/UI/button/button';
import Newstudent from './components/student/newstudent/newstudent';
import Toolbar from './container/header/toolbar/toolbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Render from './components/render/render';
import Pogo from '../src/assets/images/Logo.svg';
import Homepages from './pages/HomePages';
import Addstudent from './pages/AddStudent';
import Editstudent from './pages/Editstudent';
import { useLocation, useParams } from 'react-router';
import { Navigate, useNavigate } from 'react-router-dom';
import Error from './pages/404page';
import AuthcontextProvider from './context/Auth/autuContext';
import { useContext } from 'react';
import { Authcontext } from './context/Auth/autuContext';
import Darkmode from './components/UI/darkmode/darkmode';
import { Themecontext } from './context/theme/theme';
import StudentcontextProvider from '../src/context/student/studentcontex';
function App(props) {
  const themecontext = useContext(Themecontext);
  const { Lightteme, Dark, Light } = themecontext;
  const theme = Lightteme ? Light : Dark;
  return (
    <BrowserRouter>
      <AuthcontextProvider>
        <StudentcontextProvider>
          <div className="App" style={{ background: theme.bg, color: theme.syntax }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Homepages />} />
              <Route path="/add-student" element={<Addstudent />} />
              <Route path="/student/:studentid" element={<Editstudent />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Darkmode />
          </div>
        </StudentcontextProvider>
      </AuthcontextProvider>
    </BrowserRouter>
  );
}

export default App;