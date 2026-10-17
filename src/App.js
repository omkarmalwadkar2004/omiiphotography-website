import React from 'react';
// import component-0is
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'
import WhatsAppButton from './components/WhatsAppButton';
//import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion }from 'framer-motion';
const App = () => {
  return <>
    <Router>
      <Header/>
      {/* clip page-transition slides so they don't flash a scrollbar */}
      <div className="overflow-hidden">
        <AnimRoutes/>
      </div>
      <WhatsAppButton/>
    </Router>
  </>;
};

export default App;
