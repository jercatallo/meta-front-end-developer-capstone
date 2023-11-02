import React from 'react'
import './index.css';

import SmoothScroll from 'smooth-scroll';

import {AppRoutes} from './routes/Route.jsx';
import background from './assets/background.jpeg';

function App() {
  // eslint-disable-next-line no-unused-vars
  var scroll = new SmoothScroll('a[href*="#"]'); // Initialize SmoothScroll to be used by the Application.

  return (
    <div style={{background: `linear-gradient(0deg, rgba(255, 255,255, 0.95), rgba(255, 255, 255, 0.95)), url(${background})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundRepeat:'no-repeat'}}>
        <AppRoutes />
    </div>
  );
}

export default App;
