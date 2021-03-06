import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';


var routes = (
  <Router history={browserHistory} onUpdate={() => {window.scrollTo(0, 0)}}>
    <Route name="home" path="/" component={require(`./pages/home.jsx`)} />
    <Redirect from="/proposals" to="/" />
    <Route name="proposals" path="/late-proposals" component={require(`./pages/proposals.jsx`)} />
    <Route name="location" path="/location" component={require(`./pages/location.jsx`)} />
    <Route name="about" path="/about" component={require(`./pages/about.jsx`)} />
    <Route name="contact" path="/contact" component={require(`./pages/contact.jsx`)} />
    <Route name="expect" path="/expect" component={require(`./pages/expect.jsx`)} />
    <Route name="guidelines" path="/guidelines" component={require(`./pages/guidelines.jsx`)} />
    <Route name="volunteer" path="/volunteer" component={require(`./pages/volunteer.jsx`)} />
    <Route name="projects" path="/projects" component={require(`./pages/projects.jsx`)} />
    <Route name="team" path="/team" component={require(`./pages/team.jsx`)} >
      <Route path=":tab" component={require(`./pages/team.jsx`)} />
    </Route>
    <Route name="submission-process" path="/submission-process" component={require(`./pages/submission-process.jsx`)} />
    <Route name="sessions" path="/spaces-and-sessions" component={require(`./pages/sessions.jsx`)} />
    <Route name="fringe-events" path="/fringe" component={require(`./pages/fringe-events.jsx`)} />
    <Route name="fringe-event-add-success" path="/fringe-event-add-success" component={require(`./pages/fringe-event-add-success.jsx`)} />
    <Route name="tickets" path="/tickets" component={require(`./pages/tickets.jsx`)} />
    <Route name="session-add-success" path="/session-add-success" component={require(`./pages/session-add-success.jsx`)} />
  </Router>
);

/* ********************
* temporarily hiding these routes
* leaving code here so we can quickly turn these pages back on in June and September
******************** */

// <Route name="remote" path="/remote" handler={require('./pages/remote.jsx')} />
// <Route name="pathways" path="/pathways" handler={require('./pages/pathways.jsx')} />

ReactDOM.render(routes, document.querySelector(`#my-app`));
