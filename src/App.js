
import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=10;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <div>
       <Router>
            <LoadingBar
            // height={2}
            color='#25ef00'
            progress={this.state.progress}
            />
            <NavBar/>
           <Switch>
             <Route exact path="/" key="Home"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/></Route>
             <Route exact path="/business" key="business"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business"/></Route>
             <Route exact path="/entertainment" key="entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment"/></Route>
             <Route exact path="/health" key="health"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health"/></Route>
             <Route exact path="/science" key="science"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science"/></Route>
             <Route exact path="/sports" key="sports"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports"/></Route>
             <Route exact path="/technology" key="technology"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology"/></Route>
             <Route exact path="/general" key="general"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/></Route>
           </Switch>
       </Router>
     </div>
      </div>
    )
  }
}

























// import './App.css';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Router>
//         <NavBar/>
//           <Switch>
//             <Route exact path="/" key="Home"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/></Route>
//             <Route exact path="/business" key="business"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business"/></Route>
//             <Route exact path="/entertainment" key="entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment"/></Route>
//             <Route exact path="/health" key="health"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health"/></Route>
//             <Route exact path="/science" key="science"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science"/></Route>
//             <Route exact path="/sports" key="sports"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports"/></Route>
//             <Route exact path="/technology" key="technology"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology"/></Route>
//             <Route exact path="/general" key="general"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/></Route>
//           </Switch>
//       </Router>
//     </div>
//   );
// }



// export default App;