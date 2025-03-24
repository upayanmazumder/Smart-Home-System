import { useEffect, useState } from "react";
import headerStyles from "./Header.module.css";
import logo from "../../media/logo.png";
import userpfp from "../../media/auth/the-rock.webp";
import API_URL from "../../data/api";

const Header = () => {
    const [user, setUser] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        return storedUser && storedUser.name ? storedUser : null;
    });
    const [uptime, setUptime] = useState("Fetching...");
    const [showUptime, setShowUptime] = useState(false);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser?.name ? storedUser : null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    useEffect(() => {
        const fetchUptime = async () => {
            try {
                const response = await fetch(`${API_URL}/uptime`);
                const data = await response.json();
                setUptime(data.uptime);
            } catch (error) {
                console.error("Error fetching uptime:", error);
                setUptime("Error fetching uptime");
            }
        };

        fetchUptime();
        const interval = setInterval(fetchUptime, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/auth/login";
    };

    return (
        <header className={headerStyles.header}>
            <div 
                className={headerStyles.branding} 
                onMouseEnter={() => setShowUptime(true)} 
                onMouseLeave={() => setShowUptime(false)}
            >
                <a href="/">
                    <img src={logo} alt="Upayan" height="80px" width="80px" />
                </a>
                {showUptime && (
                    <div className={headerStyles.uptimeTooltip}>
                        Uptime: {uptime}
                    </div>
                )}
            </div>
            {user ? (
                <div className={headerStyles.auth}>
                    <img src={userpfp} alt="User icon" />
                    <div className={headerStyles.details}>
                        <h3>{user.name || "Unknown User"}</h3>
                        <p>{user.email || "No Email"}</p>
                        <button onClick={handleLogout} className={headerStyles.logoutButton}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className={headerStyles.auth}>
                    <a href="/auth/login">Login</a>
                </div>
            )}
        </header>
    );
};

export default Header;
