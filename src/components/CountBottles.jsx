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
        <button onClick={decrementCount}>-</button>
        <span>{bottles}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}
export default CountBottles;