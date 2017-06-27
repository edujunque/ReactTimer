var React = require('react');
var {NavLink, withRouter} = require('react-router-dom');

var Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <NavLink activeClassName="active-link" activeStyle={{fontWeight: 'bold'}} exact to="/">Timer</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" activeStyle={{fontWeight: 'bold'}} to="/countdown">CountDown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="https://github.com/edujunque" target="_blank">Eduardo Junque</a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
});

module.exports = withRouter(Nav);
