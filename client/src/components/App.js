import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
