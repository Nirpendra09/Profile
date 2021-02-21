import { Switch, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav'
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/projects" exact>
                    <Projects />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
