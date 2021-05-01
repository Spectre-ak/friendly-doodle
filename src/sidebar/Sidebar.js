function Sidebar() {
    return (
        <div className="container">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </div>
    )
}

export default Sidebar;

/*
<nav class="bd-links collapse" id="bd-docs-nav" style={{}}>
            
            <div class="bd-toc-item">


            <ul class="nav bd-sidenav"><li>
                <a href="/docs/4.0/getting-started/introduction/">
                    Introduction
            </a></li><li>
                    <a href="/docs/4.0/getting-started/download/">
                        Download
            </a></li><li>

                    <a href="/docs/4.0/getting-started/accessibility/">
                        Accessibility
            </a></li></ul>
            </div>
          </nav>  
*/