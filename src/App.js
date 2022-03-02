
import './App.css';
import {
 
  Routes,
  Route
} from "react-router-dom";
import Header from './pages/Header/Header';
// import Templates from './pages/Template/Template';
import Form from './pages/form/Form'
import User_form from './pages/User_form/user_form';
import CenteredTabs from './pages/Tabs/Tabs';

function App() {
  return (
    <div className="App">
        <Routes>
          
            <Route path="/" element={<Header />}/>
        <Route path="/form/:id" element={<Form />} >
          <Route  element={<CenteredTabs />} />

        </Route>

        <Route path="/response" element={< User_form />} />
     
 
              
           
          </Routes>
    </div>
  );
}

export default App;
