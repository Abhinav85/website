import React, {Component} from 'react';
import LandingPage from './containers/homepage/landingPage';
import './app.scss'


class App extends Component {
   render() {
      return (
         <div className = "mainBody">
             <LandingPage />
         </div>
      );
   }
}

export default App;