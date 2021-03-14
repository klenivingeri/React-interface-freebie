import '../styles/menubar.scss'


export function MenuBar(){

    return(
        <nav className="menubar">
            <ul>
                <li><a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    About Us
                    </a>
                </li>
                <li><a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    Restaurants
                    </a>
                 </li>
                <li><a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    Events
                    </a>
                </li>
                <li><a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    Charts</a>
                </li>
                <li>
                    <a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    Contact Us
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div><img src="img/AboutUs.svg" height="30" width="30" /></div>
                    Registration
                    </a>
                </li>

            </ul>
        </nav>
    )
}