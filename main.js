'use strict';

var React = require('react'),
  Router = require('react-router'),
  Quote = require('./client/quote.jsx'),
  QuoteMain = require('./client/quoteMain.jsx'),
  QuoteStd = require('./client/quoteStd.jsx'),
  QuoteAdv = require('./client/quoteAdv.jsx'),
  Results = require('./client/results.jsx'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  Redirect = Router.Redirect,
  App = require('./client/app.jsx');

var routes = (
  <Route handler={App}>
    <Redirect from="/" to="quote-step1" />
    <Route name="quote" handler={Quote}>
      <Redirect from="quote" to="quote-step1" />
      <Route name="quote-step1" path="step1" handler={QuoteMain} />
      <Route name="quote-step2" path="step2" handler={QuoteStd} />
      <Route name="quote-adv" path="advanced" handler={QuoteAdv} />
    </Route>
    <Route name="results" handler={Results} />
  </Route>
);

Router.run(routes, function (Root) {
  React.render(<Root/>, document.getElementById('app'));
});