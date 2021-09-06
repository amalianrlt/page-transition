import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Modal from './Components/Modal';

import './styles/main.css';

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
    console.log(location.state)

    //to prevent browser load new route
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div className="app">
        <div className="menu">
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/about'>About</Link>
          <Link className="link" to='/contact'>Contact</Link>
        </div>
        <Switch location={isModal ? this.previousLocation : location}>
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
