// src/App.js
import React from 'react';
import Homepage from './pages/home';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div>
      <Homepage />
      <Analytics/>
    </div>
  );
};

export default App;
