import { useRef } from "react"

 

const UseRef = () => {
    const inputRefValue = useRef(null);

    const handleFocus =() => {
        inputRefValue.current?.focus()
    }

  return (
    <div>
        <h2>UseRef</h2>
        <div>
            <input ref={inputRefValue} type="text" placeholder="Type here..." />
            <button onClick={handleFocus}> Click Focus</button>
        </div>
    </div>
  )
}

export default UseRef