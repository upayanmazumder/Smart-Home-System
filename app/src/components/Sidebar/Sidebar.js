import sidebarStyles from "./Sidebar.module.css";

import {BsDropbox, BsGithub, BsHouse, BsHouseFill, BsStar, BsStarFill } from "react-icons/bs";
import { BiSolidLogIn } from "react-icons/bi";

const Sidebar = () => {
    return (
        <aside className={sidebarStyles.sidebar}>
            <button className={sidebarStyles.hamburger} aria-label="Toggle Sidebar">
                <i class="fas fa-bars"></i>
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <BsHouseFill     />
                            <span>
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#products">
                            <BsDropbox />
                            <span>
                                Products
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#reviews">
                            <BsStarFill />
                            <span>
                                Reviews
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/upayanmazumder/Smart-Home-System" target="_blank" rel="noreferrer">
                            <BsGithub />
                            <span>
                                Repository
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/auth/login">
                            <BiSolidLogIn />
                            <span>
                                Login
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;