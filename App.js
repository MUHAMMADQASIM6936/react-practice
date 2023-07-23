// import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// eslint-disable-next-line
import About from './components/About';
  import {
   BrowserRouter as Router,
  Routes,
   Route

 } from "react-router-dom";


function App() {

  return (
    // <>
       
     
    
        <Navbar title="TextUtils" aboutText="About us" />
      
        <div className='container my-3' >
        <TextForm heading="Enter the text to analyze " />
       
        
        
       
   

  )
};


export default App;



