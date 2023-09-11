import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavigationBar from './Components/Navigation/Navigation';
import Footer from './Components/Footer/footer';
import SearchBar from './Components/Searchbar/Searchbar'; 
import ITOfficer from './Pages/itofficer';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import FullUserdetails  from './Pages/FullUserdetails';
import Navigation2 from './Components/Navigationbar2/Navigation2';
import UpdateUserDetails from './Pages/UpdateUserDetails';
import UserPersona from './Components/UserPersona/UserPersona';
import FullUserPersona from './Pages/FullUserPersona';
import Registercrimefull from './Pages/Registercrimefull';
import RegisterEvidencefull from './Pages/RegisterEvidencefull';
import RegisterVictimfull from './Pages/RegisterVictimfull';
import Suspect from './Pages/Suspect';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navigation" element={<NavigationBar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/ITofficer" element={<ITOfficer/>}/>
          <Route path="/SearchBar" element={<SearchBar/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/FullUserdetails"element={<FullUserdetails/>}/>
          <Route path='/Navigation2' element={<Navigation2/>}/> 
          <Route path='/UpdateUserDetails' element={<UpdateUserDetails/>}/>
          <Route path='/UserPersona' element={<UserPersona/>}/>
          <Route path='/FullUserPersona' element={<FullUserPersona/>}/>
          <Route path='/Registercrimefull'element={<Registercrimefull/>}/>
          <Route path='/RegisterEvidencefull' element={<RegisterEvidencefull/>}/>
          <Route path='/RegisterVictimfull' element={<RegisterVictimfull/>}/>
          <Route path='/Suspect' element={<Suspect/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
