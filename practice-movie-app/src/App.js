import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    // useEffect function은 우리 코드가 딱 한번만 실행될 수 있도록 보호
    useEffect(() => {
        console.log("I run only once.");
    }, []);

    useEffect(() => {
        console.log("I run when 'keyword' changes.")

        // deps는 작성된 부분이 수정이 있을 때마다 실행하는 것을 설정
    }, [keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);

    return (
        <div>
            <input value={keyword} onChange={onChange} type={"text"} placeholder={"Search here..."} />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;