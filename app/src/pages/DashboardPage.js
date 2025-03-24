/* eslint-disable jsx-a11y/anchor-is-valid */
import Dashboard from "../components/Dashboard/Dashboard";
import Greet from "../components/Greet/Greet";
import Energy from "../components/Energy/Energy"

const DashboardPage = () => {
    return (
        <main>
            <a class="sectionHeading">
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard</p>
                <Greet />
                <Dashboard />
                <Energy />
            </a>
        </main>
    );
};

export default DashboardPage;