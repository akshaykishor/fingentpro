
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Home"
import Footer from "./Footer"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
