// import React from 'react';
// import {BrowserRouter} from "react-router-dom";
// import Routes from "./Routes";
// function App() {

//   return (
//     <BrowserRouter>
//         <div className="App">
//           <Routes/>    
//         </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
// import Home from './components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Modal from './Components/Modal';

import './styles/main.css';
import Home from './Components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
      );
      console.log(this.previousLocation, location, 'ismodal')

    return (
      <div className="app">
        <div className="menu">
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/about'>About</Link>
          <Link className="link" to='/contact'>Contact</Link>
        </div>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/modal/:id"><Modal isModal={isModal}/></Route>
          <Route>{'no match'}</Route>
        </Switch>
        {isModal
          ? <Route exact path="/modal/:id"><Modal isModal={isModal}/></Route>
          : null
        }
      </div>
    );
  }
}

export default withRouter(App);

