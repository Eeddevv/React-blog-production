import {useState} from "react";
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(1)
    return (
        <div>
            <button className={classes.button} onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button className={classes.button} onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Counter;