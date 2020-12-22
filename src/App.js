import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Post from './component/Post';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <h1 style={{color:'skyblue'}}>MediTechBD</h1>  
    <Nav/>
    </div>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/post/:postID' component={Post}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
