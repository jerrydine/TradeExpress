import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Learn from './Component/Learn';
import Login from './Component/Login';
import GetStarted from './Component/GetStarted';
import GetstartedBusiness from './Component/GetstartedBusiness';
import GetstartedIndividual from './Component/GetstartedIndividual';
import Instantly from './Component/Instantly';
import Buy from './Component/Buy';
import Sell from './Component/Sell';




function App(){

  return (
    <div className='App'>
     <BrowserRouter>
     <Nav/>
    
     <Routes>
     <Route path='/' element={< Home/>}/>
     <Route path='Instantly' element={<Instantly/>}>
      <Route path='Buy' element={<Buy/>}/>
      <Route path='Sell' element={<Sell/>}/>
     </Route>

     <Route path='/Learn' element={<Learn/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/GetStarted' element={<GetStarted/>}>
     <Route path='GetstartedIndividual' element={<GetstartedIndividual/>}/>
     <Route path='GetstartedBusiness' element={<GetstartedBusiness/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
