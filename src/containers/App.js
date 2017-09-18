import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';



import MetrcisReport from '../components/MetrcisReport';



import '../assets/stylesheets/App.scss';

export class App extends Component {

render(){
  return(<div className="App">Hi</div>);
}
  

}



function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default withRouter(connect(mapStateToProps)(App));
