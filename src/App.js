
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0)
  // state={
  //   progress:0
  // }
  
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  
    return (
      <BrowserRouter>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      
      />
     
        <Routes>
        <Route exact path='/' element= { <News setProgress={setProgress } apiKey={apiKey}  key="general" pageSize={pageSize}  country="ca"category="general"/> }/>
          <Route exact path='/general' element= { <News setProgress={setProgress } apiKey={apiKey}  key="general" pageSize={pageSize}  country="ca"category="general"/> }/>
          <Route exact path='/entertainment' element= {<News setProgress={setProgress } apiKey={apiKey}  key="entertainment" pageSize={pageSize}  country="ca"category="entertainment"/>}/>
          <Route exact path='/business' element= { <News setProgress={setProgress } apiKey={apiKey}  key="business" pageSize={pageSize}  country="ca"category="business"/> }/>
          <Route exact path='/health' element= { <News setProgress={setProgress } apiKey={apiKey}  key="health" pageSize={pageSize}  country="ca"category="health"/> }/>
          <Route exact path='/science' element= { <News setProgress={setProgress } apiKey={apiKey}  key="science" pageSize={pageSize}  country="ca"category="science"/> }/>
          <Route exact path='/sports' element= { <News setProgress={setProgress } apiKey={apiKey}  key="sports" pageSize={pageSize}  country="ca"category="sports"/> }/>
          <Route exact path='/technology' element= { <News setProgress={setProgress } apiKey={apiKey}  key="technology" pageSize={pageSize}  country="ca"category="technology"/> }/>
        </Routes>
        
      </BrowserRouter>
    )
  
}

export default App
