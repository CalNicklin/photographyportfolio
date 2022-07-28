import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../features/Header/Header';
import Projects from '../features/Projects/Projects';
import Project from '../features/Project/Project';
import Prints from '../features/Prints/Prints';
import About from '../features/About/About';
import Blog from '../features/Blog/Blog';
import ContactForm from '../features/ContactForm/ContactForm';
import HomeBanner from '../features/HomeBanner/HomeBanner';
// import Footer from '../features/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeBanner className='banner' />} />
          <Route path='/projects/:title' element={<Project />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/prints' element={<Prints />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/blog' element={<Blog />} /> */}
          {/* <Route path='/contact' element={<ContactForm />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  )
}

export default App;
