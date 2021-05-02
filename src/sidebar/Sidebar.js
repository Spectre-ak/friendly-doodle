import Home from '../home/Home';
import Project from '../Projects/Projects';
import Recommendations from '../recommendations/Recommendations';
import Profile from '../profile/Profile'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  

function Sidebar(props) {
    console.log(props.classnames.home);
    return (
        <Router>
          <div>
            
            <div className="container">
                this is the navbar which is to be placed sideways more like a collapsable side bar
                <hr></hr>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <Link to="/home" class={props.classnames.home} id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/projects" class={props.classnames.projects}  id="pills-project-tab" data-toggle="pill"  role="tab" aria-controls="pills-project" aria-selected="false">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link to="/recommendations" class={props.classnames.recommendations}  id="pills-recommendations-tab" data-toggle="pill" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</Link>
                </li>
                <li class="nav-item">
                   <Link to="/profile" class={props.classnames.profile}  id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                </li>
                </ul>
                
            </div>
    
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/recommendations">
              <Recommendations />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
      );
}

export default Sidebar;
