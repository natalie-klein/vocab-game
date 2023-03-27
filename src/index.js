import React from "react";
import { createRoot } from 'react-dom/client';
import axios from 'axios'

const App = () => {

  axios.get('http://localhost:3000/fromdb').then((res) => console.log('res is:', res)).catch((err) => console.log(err))

  axios.get('http://localhost:3000/languages').then((res) => console.log('res is:', res)).catch((err) => console.log(err))

  return (
    <div>
      <h1>hojkjnla!!</h1>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);