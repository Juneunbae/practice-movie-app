import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");

    // useEffect function은 우리 코드가 딱 한번만 실행될 수 있도록 보호
    useEffect(() => {
        console.log("CALL THE API...");
    }, []);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;