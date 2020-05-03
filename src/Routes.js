import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MainPage from "./pages/MainPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const Routes = () => {
  let location = useLocation();
  return (
    <Route path="*">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={MainPage} />
            <Route path="/portrait" component={GalleryPage} />
            <Route path="/conceptual" component={GalleryPage} />
            <Route path="/still_life" component={GalleryPage} />
            <Route path="/candid" component={GalleryPage} />
            <Route path="/urban" component={GalleryPage} />
            <Route path="/video" component={GalleryPage} />
            <Route exact path="/about" component={AboutPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Route>
  );
};

export default Routes;
