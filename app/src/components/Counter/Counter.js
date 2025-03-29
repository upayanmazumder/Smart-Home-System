import counterStyles from "./Counter.module.css";

const Carousel = () => {
    return (            
    <div className={counterStyles.counterContainer}>
        <div className={counterStyles.counter}>
            <span>2174</span>
            <div className={counterStyles.label}>Users</div>
        </div>
        <div className={counterStyles.counter}>
            <span>4881</span>
            <div className={counterStyles.label}>Devices</div>
        </div>
        <div className={counterStyles.counter}>
            <span>1023</span>
            <div className={counterStyles.label}>Rooms</div>
        </div>
    </div>
    );
}

export default Carousel;