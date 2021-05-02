import Home from '../home/Home';
import Project from '../Projects/Projects';
import Recommendations from '../recommendations/Recommendations';
import Profile from '../profile/Profile'
function Sidebar() {
    return (
        <div className="container">
            this is the navbar which is to be placed sideways forming like a side bar
            <hr></hr>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-project-tab" data-toggle="pill" href="#pills-project" role="tab" aria-controls="pills-project" aria-selected="false">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-recommendations-tab" data-toggle="pill" href="#pills-recommendations" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Home/></div>
            <div class="tab-pane fade" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab"><Project/></div>
            <div class="tab-pane fade" id="pills-recommendations" role="tabpanel" aria-labelledby="pills-recommendations-tab"><Recommendations/></div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Profile/></div>
            </div>
        </div>
    )
}

export default Sidebar;
