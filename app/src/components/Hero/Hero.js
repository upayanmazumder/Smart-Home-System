import heroStyles from "./Hero.module.css";
import logo from "../../media/icon.png";

const Hero = () => {
    return (
        <ul className={heroStyles.hero}>
            <div className={heroStyles.brand}>
                <img src={logo} alt="Aether Link Icon"></img>
            </div>
            <div className={heroStyles.info}>
            <div>
                <h2>Features</h2>
                <ul>
                    <li>Remote control of lights and appliances</li>
                    <li>Real-time security monitoring</li>
                    <li>Energy usage tracking</li>
                    <li>Voice command integration</li>
                </ul>
            </div>
            <div>
                <h2>How It Works</h2>
                <p>
                    Connect to your home network and control devices via our app. Manage your home from
                    anywhere.
                </p>
            </div>

            <button onClick={() => window.location.href='/auth/signup'}>
                Get started
                <div className={heroStyles.star1}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className={heroStyles.star2}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "geometricPrecision" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className={heroStyles.star3}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className={heroStyles.star4}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className={heroStyles.star5}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className={heroStyles.star6}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                        viewBox="0 0 784.11 815.53">
                        <defs></defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path className={heroStyles.fil0}
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                            </path>
                        </g>
                    </svg>
                </div>
            </button>
            </div>
        </ul>
    )
}

export default Hero;