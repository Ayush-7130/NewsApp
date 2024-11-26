import './App.css';
import { API_KEY } from './config'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setprogress] = useState(0)
  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setprogress={setprogress} key="general" pageSize={8} country="us" category="general" API_KEY={API_KEY}/>} />
          <Route path="/general" element={<News setprogress={setprogress} key="general" pageSize={8} country="us" category="general" API_KEY={API_KEY}/>} />
          <Route path="/business" element={<News setprogress={setprogress} key="business" pageSize={8} country="us" category="business" API_KEY={API_KEY}/>} />
          <Route path="/entertainment" element={<News setprogress={setprogress} key="entertainment" pageSize={8} country="us" category="entertainment" API_KEY={API_KEY}/>} />
          <Route path="/health" element={<News setprogress={setprogress} key="health" pageSize={8} country="us" category="health" API_KEY={API_KEY}/>} />
          <Route path="/science" element={<News setprogress={setprogress} key="science" pageSize={8} country="us" category="science" API_KEY={API_KEY}/>} />
          <Route path="/sports" element={<News setprogress={setprogress} key="sports" pageSize={8} country="us" category="sports" API_KEY={API_KEY}/>} />
          <Route path="/technology" element={<News setprogress={setprogress} key="technology" pageSize={8} country="us" category="technology" API_KEY={API_KEY}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App