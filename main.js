'use strict';

var React = require('react'),
  Router = require('react-router'),
  Quote = require('./client/quote.jsx'),
  Results = require('./client/results.jsx'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  Redirect = Router.Redirect,
  App = require('./client/app.jsx');

var routes = (
  <Route handler={App}>
    <Redirect from="/" to="quote" />
    <Route name="quote" handler={Quote} />
    <Route name="results" handler={Results} />
  </Route>
);

Router.run(routes, function (Root) {
  React.render(<Root/>, document.getElementById('app'));
});