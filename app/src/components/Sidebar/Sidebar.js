import sidebarStyles from "./Sidebar.module.css";

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
                            <i class="fas fa-home"></i>
                            <span>
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#products">
                            <i class="fas fa-box-open"></i>
                            <span>
                                Products
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#reviews">
                            <i class="fas fa-star"></i>
                            <span>
                                Reviews
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/upayanmazumder/Smart-Home-System" target="_blank">
                            <i class="fas fa-code-branch"></i>
                            <span>
                                Repository
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <i class="fas fa-sign-in-alt"></i>
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