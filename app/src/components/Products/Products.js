import productStyles from "./Products.module.css";

import SmartSpeaker from "../../media/devices/smart-speaker.webp";
import SmartLighting from "../../media/devices/smart-lighting.webp";
import SmartThermostat from "../../media/devices/smart-thermostat.webp";

import { BsCart } from "react-icons/bs";

import productsData from "../../data/products.json";

const productImages = {
    "Smart Speakers": SmartSpeaker,
    "Smart Lighting Systems": SmartLighting,
    "Smart Thermostats": SmartThermostat
};

const Products = () => {
    return (
        <div className={productStyles.container}>  
            <div className={productStyles.productContainer}>
                {productsData.map((product, index) => (
                    <ul key={index} className={productStyles.product}>
                            <img src={productImages[product.name]} alt={product.name} className={productStyles.productImage}></img>
                            <div className={productStyles.productContent}>
                                <h3 className={productStyles.productName}>{product.name}</h3>
                                <p className={productStyles.productDescription}>
                                    {product.description}
                                </p>
                                <a href={`/shop/${product.name.toLowerCase().replace(/ /g, '-')}`} className={productStyles.shopLink}>Shop Now</a>
                            </div>
                    </ul>
                ))}
            </div>
            <br />
            <button onClick={() => window.location.href='https://buymeacoffee.com/upayan'} className={productStyles.shop}>
                <BsCart /> Check out the rest of the store!
            </button>
            <br />
        </div>
    )
}

export default Products;