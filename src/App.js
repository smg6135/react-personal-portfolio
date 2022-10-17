import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <>
      <div className="App">
        <StarBackground/>
        <Header/>
        <div className = "container-fluid">
          <About/>
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
}

export default App;
