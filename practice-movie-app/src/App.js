import {BrowserRouter as Router} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Home from "./routes/Home";
import Route from "react-router-dom/es/Route";
import Detail from "./routes/Detail";

function App() {
    // router를 render하는 역할
    return <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={Detail}/>
        </Switch>
    </Router>;
}

export default App;