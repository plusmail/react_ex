import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyComponent from "./MyComponent";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <MyComponent name={'홍길동'} favoriteNumber={10}>대한 민국</MyComponent>
      <ClassComponent favoriteNumber={1} name={"감감찬"} >삼천리 강산</ClassComponent>
      <Counter></Counter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
