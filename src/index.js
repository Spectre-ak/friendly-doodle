import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './sidebar/Sidebar';

console.log(window.location.href);
const ar={
  "home":"nav-link",
  "projects":"nav-link",
  "recommendations":"nav-link",
  "profile":"nav-link"
}
if(window.location.href.includes("home"))
  ar.home="nav-link active";
else if(window.location.href.includes("projects"))
  ar.projects="nav-link active";
else if(window.location.href.includes("recommendations"))
  ar.recommendations="nav-link active";
else if(window.location.href.includes("profile"))
  ar.profile="nav-link active";
else
  ar.home="nav-link active";
  ReactDOM.render(
    <Sidebar classnames={ar}/>,document.getElementById("sidebar")
  );


/*
//ReactDOM.render(
//    <Recommendations/>,document.getElementById('root')
//);

//ReactDOM.render(<Rr/>, document.getElementById("router"));
function Rr() {
  return (
    <Router>
      <div>
        
        <div className="container">
            this is the navbar which is to be placed sideways forming like a side bar
            <hr></hr>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <Link to="/home" class="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/projects" class="nav-link" id="pills-project-tab" data-toggle="pill"  role="tab" aria-controls="pills-project" aria-selected="false">Projects</Link>
            </li>
            <li class="nav-item">
                <Link to="/recommendations" class="nav-link" id="pills-recommendations-tab" data-toggle="pill" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</Link>
            </li>
            <li class="nav-item">
               <Link to="/profile" class="nav-link" id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
            </li>
            </ul>
            
        </div>


        
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

*/