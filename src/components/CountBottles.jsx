function CountBottles({whiskeyId, bottles, setBottles}) {

    const incrementCount = () => {
        setBottles(bottles + 1);
    }

    const decrementCount = () => {
        if (bottles > 1){
        setBottles(bottles - 1);    
        }
        
    }

    return (
        <>
        <button className="countButton" onClick={decrementCount}>-</button>
        <span className="bottles">{bottles}</span>
        <button className="countButton" onClick={incrementCount}>+</button>
        </>
    )
}
export default CountBottles;