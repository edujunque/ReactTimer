var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

//app css
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Router history={history}>
    <Main>
      <Switch>
        {/* <Route exact path="/" component={Weather}/> */}
        {/* <Route path="/about" component={About}/> */}
      </Switch>
    </Main>
  </Router>,
  document.getElementById('app')
);
