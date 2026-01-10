import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(res => res.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            })
    }, []);
    const [seed, setSeed] = useState("");
    const [selectedCoin, setSelectedCoin] = useState("");
    const [price, setPrice] = useState();

    const onChangeSeed = (event) => setSeed(event.target.value);

    const onSelectedCoin = (event) => {
        const id = event.target.value;
        setSelectedCoin(id);

        const coin = coins.find((coin) => coin.id === id);
        setPrice(coin ? coin.quotes.USD.price : null)
    }

    const amount = price != null && seed != null ? Number(seed) / Number(price) : "";

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select
                    style={{ width: "500px", height: "30px"}}
                    value={selectedCoin}
                    onChange={onSelectedCoin}
                >
                    <option value={""} disabled>코인을 선택하세요.</option>
                    {coins.map((coin) => (
                        <option
                            key={coin.id}
                            value={coin.id}
                        >
                            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
            <br/>
            <div>
                <input
                    value={seed}
                    onChange={onChangeSeed}
                    style={{ marginTop : "10px", width : "250px", height : "30px"}}
                    type={"number"}
                    placeholder={"Write your seed : $"}
                />
                {amount ? <span> : <strong>{amount}</strong> 개 </span> : null}
            </div>
        </div>
    )
}

export default App;