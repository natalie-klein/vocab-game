import React from "react";
import { createRoot } from 'react-dom/client';
require ('./styles.css')

import Background from './components/background'
import Header from "./components/header";
import Options from "./components/options";

const App = () => {
  return (
    <div>
      <Background/>
      <Header/>
      <Options/>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);