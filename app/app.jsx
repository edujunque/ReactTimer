var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

var Main = require('Main');
var Timer = require('Timer');
var Clock = require('Clock');
var CountDown = require('CountDown');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

//app css
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Router history={history}>
    <Main>
      <Switch>
        <Route exact path="/" component={Timer}/>
        <Route path="/countdown" component={CountDown}/>
      </Switch>
    </Main>
  </Router>,
  document.getElementById('app')
);
