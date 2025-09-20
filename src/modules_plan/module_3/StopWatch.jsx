import { useRef, useState } from "react"

 

const StopWatch = () => {
    const timeRef = useRef(null)
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        if(!isRunning){
            setIsRunning(true);
            timeRef.current = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        }
    } 
    const stopTimer = () => {
        clearInterval(timeRef.current);
        setIsRunning(false);
    } 
    const resetTimer = () => {
        clearInterval(timeRef.current);
        setTime(0)
        setIsRunning(false)
    } 

  return (
    <div>
         {/* Stopwatch */}
         <div className="p-5 bg-white rounded-2xl shadow border flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">⏱️ Stopwatch</h2>
          <p className="text-2xl font-mono mb-4">{time}s</p>
          <div className="flex gap-2">
            <button
              onClick={startTimer}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Stop
            </button>
            <button
              onClick={resetTimer}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </div>
    </div>
  )
}

export default StopWatch