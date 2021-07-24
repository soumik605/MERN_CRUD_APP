import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/allusers" component={AllUsers} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/edituser/:id" component={EditUser} />
          <Route exact path="/userdetails/:id" component={UserDetails} />
          <Route component={NotFound} />
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
