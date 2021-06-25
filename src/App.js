
import './App.css';
import Nav from './Components/Nav/Nav'
import Cover from './Components/Cover/Cover'
import BS from './Components/Panels/Boxes'
import Shows from './Components/Shows/Shows';
import Email from './Components/Email/Email';
import Youtube from './Components/Youtube/Youtube.js'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>    
      <Cover/>
      <BS />
      <Shows />
      {/* <Email />  */}
      <Youtube />
      <Footer/>
    </div>
  );
}

export default App;
