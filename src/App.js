
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=10;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  //Dark mode
  const [mode, setmode] = useState('white')

  const handelDark =()=>{
    if(mode==='white'){

      document.body.style.backgroundColor='black'
      setmode('black');
    }else {
      document.body.style.backgroundColor='white';
      setmode('white');
    }
  }
    
  
    return (
     
      <div>
        <div>
       <Router>
            <LoadingBar
            // height={2}
            color='#25ef00'
            progress={progress}
            />
            {/* <NavBar/> */}
            <NavBar handelDark={handelDark} mode={mode}/>
           <Switch>
             <Route exact path="/" key="Home"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" mode={mode}/></Route>
             <Route exact path="/business" key="business"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" mode={mode}/></Route>
             <Route exact path="/entertainment" key="entertainment"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" mode={mode}/></Route>
             <Route exact path="/health" key="health"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" mode={mode}/></Route>
             <Route exact path="/science" key="science"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" mode={mode}/></Route>
             <Route exact path="/sports" key="sports"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" mode={mode}/></Route>
             <Route exact path="/technology" key="technology"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" mode={mode}/></Route>
             <Route exact path="/general" key="general"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" mode={mode}/></Route>
           </Switch>
       </Router>
     </div>
      </div>
    
    );
  
}

export default App;























