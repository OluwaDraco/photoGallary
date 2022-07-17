import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Nav from './components/Nav';
import PhotoList from './components/PhotoList';



class App extends Component{
  render(){
  return (
    <div className='container'>
    <SearchForm />
    <Nav />
    <PhotoList data={}/>


    </div>
  );}
}

export default App;
