import React, { useState } from 'react'
import Main from './components/Main';
import Top from './components/Top';
import Footer from './components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginIcon from '@mui/icons-material/Login';
import "./App.css"

function App() {
  const [wideOnOff, setWideOnOff] = useState(false);
  const onOff = ()=>{setWideOnOff(!wideOnOff)}
  return (
    <>
      <div className={wideOnOff ? "wide myHistory color2" : "narrow myHistory color2"}>
        <button onClick={onOff}>
          {wideOnOff ? <ArrowBackIcon/> : <ArrowForwardIcon/>}
        </button>
        <div>
          <div>
            <span><LoginIcon/></span>
            <span>2</span>
            <span>3</span>
          </div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <Top />
      <div id='body'>
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
