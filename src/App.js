
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import Users from "./list-user"
// import Profile from "./profile";
import  AddUser  from "./addUser";
import { EditUser } from "./editUser";
import Home from "./Home"




function App() {
  return (
    <div>
     <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
 <Route path="/add"  component={AddUser} />

 <Route path="/edit/:id" component={EditUser} />
 </Switch>
 </BrowserRouter>
 </div>
  );
}

export default App;
