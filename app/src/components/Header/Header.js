import { useEffect, useState } from "react";
import headerStyles from "./Header.module.css";
import logo from "../../media/logo.png";
import userpfp from "../../media/auth/the-rock.webp";

const Header = () => {
    const [user, setUser] = useState(null);
    const [uptime, setUptime] = useState("Fetching...");
    const [showUptime, setShowUptime] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser?.name && storedUser?.email) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        const fetchUptime = async () => {
            try {
                const response = await fetch("http://localhost:5000/uptime");
                const data = await response.json();
                setUptime(data.uptime);
            } catch (error) {
                console.error("Error fetching uptime:", error);
                setUptime("Error fetching uptime");
            }
        };

        fetchUptime();
        const interval = setInterval(fetchUptime, 5000); // Refresh uptime every 5s

        return () => clearInterval(interval);
    }, []);

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
            {user && (
                <div className={headerStyles.auth}>
                    <img src={userpfp} alt="User icon" />
                    <div className={headerStyles.details}>
                        <h3>{user.name}</h3>
                        <a href="/auth/logout">Logout</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
