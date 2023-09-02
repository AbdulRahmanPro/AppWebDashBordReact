import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClosedCaptioning , faGauge,faUser,faFile , faPhotoFilm,faSitemap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className=" h-screen w-64 pl-8  pr-14 pt-10 bg-white ">
            <nav className="flex flex-col "  >
                <ul className=" h-screen p-5 space-y-8 text-neutral-700 flex flex-col">
                <h1 className="  w-fit text-neutral-700 text-4xl text-center ">Developer</h1>
                    <li className=" transition-colors hover:text-blueTextEfeect  w-screen-mix space-x-5"><FontAwesomeIcon icon={faGauge} /><Link className="  w-screen " to="/dashbord/users">DashBord</Link></li>
                    <li className=" transition-colors hover:text-blueTextEfeect w-screen-mix space-x-5"><FontAwesomeIcon icon={faUser} /><Link to="/dashbord/users">Users</Link></li>
                    <li className=" transition-colors hover:text-blueTextEfeect w-screen-mix space-x-5"><FontAwesomeIcon icon={faFile} /><Link to="/dashbord/users">Documents</Link></li>
                    <li className=" transition-colors hover:text-blueTextEfeect w-screen-mix space-x-5"><FontAwesomeIcon icon={faPhotoFilm} /><Link to="/dashbord/users">Photos</Link></li>
                    <li className=" transition-colors hover:text-blueTextEfeect w-screen-mix space-x-5"><FontAwesomeIcon icon={faSitemap} /><Link to="/dashbord/users">Hierarchy</Link></li>
                </ul>
            </nav>
        </div>
    )

}