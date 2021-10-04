
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import Course from './component/Course-Categories/Course';
import WebDeveloper from './component/Web developer/WebDeveloper';
import Header from './component/header/Header';
import Home from './component/home/Home';
import NotFound from './component/Not Found/NotFound';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/webDeveloper">
            <WebDeveloper></WebDeveloper>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
