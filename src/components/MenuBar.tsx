import '../styles/menubar.scss'


export function MenuBar(){

    return(
        <nav className="menubar">
            <ul>
                <li><a href="#">
                    <div><i className="fa fa-2x fa-info-circle"></i></div>
                    About Us
                    </a>
                </li>
                <li><a href="#">
                    <div><i className="fa fa-2x fa-cutlery"></i></div>
                    Restaurants
                    </a>
                 </li>
                <li><a href="#">
                    <div><i className="fa fa-2x fa-calendar"></i></div>
                    Events
                    </a>
                </li>
                <li><a href="#">
                    <div><i className="fa fa-2x fa-pie-chart"></i></div>
                    Charts</a>
                </li>
                <li>
                    <a href="#">
                    <div><i className="fa fa-2x fa-check-square-o"></i></div>
                    Contact Us
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div><i className="fa fa-2x fa-list-alt"></i></div>
                    Registration
                    </a>
                </li>

            </ul>
        </nav>
    )
}