import { useState } from 'react';
import './App.css';
import Mcq from './components/mcq';
import Checkbox from './components/Checkbox';
import ShortAns from './components/ShortAns';
import Paragraph from './components/Paragraph';
import DropDown from './components/DropDown';
import File from './components/file';
import Scale from './components/Scale';
import MultichoiceGrid from './components/MultichoiceGrid';
import TickBoxGrid from './components/TickBoxGrid';
import Footer from './components/Footer';

function App () {
  

  
  return (
    <div className="App">
      
      <div className="cards">

        
        <div className="headercard">
          <h2>Assignment Task</h2>
          <hr></hr>
          <span className='email'>ks916527@gmail.com</span> <span className='switchspan'>Switch account</span>
          <p>
            The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.
          </p>
          <hr></hr>
          <p className='required'>* Indicates required question</p>
        </div>


        <Mcq />
        <Checkbox />
        <ShortAns />
        <Paragraph />
        <DropDown />
        <File />
        <Scale />
        <MultichoiceGrid />
        <TickBoxGrid/>
        
      </div>

       <Footer/>

     

      
    </div>
  );
}

export default App;
