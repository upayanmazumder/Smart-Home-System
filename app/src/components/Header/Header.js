import headerStyles from "./Header.module.css";
import logo from "../../media/logo.png";
import userpfp from "../../media/auth/the-rock.webp";

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.branding}>
                <a href="/">
                    <img src={logo} alt="Upayan" height="80px" width="80px"></img>
                </a>
            </div>
            <div className={headerStyles.auth}>
                <img src={userpfp} alt="User icon"></img>
                <div className={headerStyles.details}>
                    <h3>The Rock</h3>
                    <a href="/auth/logout">Logout</a>
                </div>
            </div>
        </header>
    );
}

export default Header;