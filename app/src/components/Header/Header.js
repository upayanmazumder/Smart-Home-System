import { useEffect, useState } from "react";
import md5 from "blueimp-md5";
import headerStyles from "./Header.module.css";
import logo from "../../media/logo.png";
import fallbackPfp from "../../media/auth/the-rock.webp";
import API_URL from "../../data/api";

const getGravatarUrl = (email) => {
    if (!email) return fallbackPfp;
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=404`;
};

const Header = () => {
    const [user, setUser] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        return storedUser && storedUser.name ? storedUser : null;
    });
    const [uptime, setUptime] = useState("Fetching...");
    const [showUptime, setShowUptime] = useState(false);
    const [profilePic, setProfilePic] = useState(fallbackPfp);

    useEffect(() => {
        const handleUserUpdate = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser?.name ? storedUser : null);
        };

        window.addEventListener("userUpdated", handleUserUpdate);

        return () => window.removeEventListener("userUpdated", handleUserUpdate);
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

    useEffect(() => {
        if (user?.email) {
            setProfilePic(getGravatarUrl(user.email));
        } else {
            setProfilePic(fallbackPfp);
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        window.dispatchEvent(new Event("userUpdated"));

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
                    <img 
                        src={profilePic} 
                        alt="User icon"
                        onError={() => setProfilePic(fallbackPfp)}
                    />
                    <div className={headerStyles.details}>
                        <h3>{user.name || "Unknown User"}</h3>
                        <p>{user.email || "No Email"}</p>
                        <button onClick={handleLogout} className={headerStyles.logoutButton}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
