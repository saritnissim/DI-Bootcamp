
import { useState } from "react"

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [lastAction, setLastAction] = useState<string>("")

    const increment = () => {
        setCount(count + 1)
        setLastAction("Incremented")
    }

    const decrement = () => {
        setCount(count - 1)
        setLastAction("Decremented")
    }

    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Last Action: {lastAction}</p>
        </>
    )
}
export default Counter;
