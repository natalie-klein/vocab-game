import React from "react";
import { createRoot } from 'react-dom/client';
// require('./index.css'); 
import axios from 'axios'

const url = 'http://localhost:3000/hi'

const App = () => {

  axios.get(url).then((res) => console.log('res is:', res)).catch((err) => console.log(err))

  return (
    <div>
      <h1>hola!!</h1>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);