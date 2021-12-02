import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar'
import News from "./components/News";

const App = () => {
  const [progress, setProgress] = useState(0)
  const apikey = process.env.REACT_APP_API_KEY
  
  // setProgress = (progress) => {
  //   setProgress(progress)
  // }

    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path="/" element={<News apikey={apikey} setProgress={setProgress} key="general" pageSize={12} country="in" category="general" />} />
            <Route exact path="/business" element={<News apikey={apikey} setProgress={setProgress} key="business" pageSize={12} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress} key="health" pageSize={12} country="in" category="health" />} />
            <Route exact path="/science" element={<News apikey={apikey} setProgress={setProgress} key="science" pageSize={12} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProgress} key="sports" pageSize={12} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProgress} key="technology" pageSize={12} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App