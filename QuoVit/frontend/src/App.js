import { Route, Switch } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import Contact from "./Screens/Contact/Contact";
import FacultyReview from "./Screens/FacultyReview/FacultyReview";
import Confessions from "./Screens/Confessions/Confessions";
import IdeasBlock from "./Screens/IdeasBlock/IdeasBlock";
import QuestionBank from "./Screens/QuestionBank/QuestionBank";
import Profile from "./Screens/Profile/Profile";
import "./App.css";
import SavedPosts from "./Screens/Landing/SavedPosts";
import Notifications from "./Screens/Landing/Notifications";
import EachCourse from "./Screens/QuestionBank/EachCourse";
import NotFound from "./Screens/NotFound/NotFound";
import About from "./Screens/About/About";
import Mentorship from "./Screens/Mentor/Mentorship";

function App() {
  return (
    <Switch>
            <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      
      <Route exact path="/" component={Landing} />
      <Route exact path="/Saved" component={SavedPosts} />
      <Route exact path="/Notifications" component={Notifications} />
      <Route exact path="/Profile" component={Profile} />

      <Route exact path="/FacultyReview" component={FacultyReview} />
      <Route exact path="/Confessions" component={Confessions} />
      <Route exact path="/IdeasBlock" component={IdeasBlock} />
      <Route exact path="/QuestionBank" component={QuestionBank} />
      <Route exact path="/EachCourse" component={EachCourse} />

      <Route exact path="/Mentorship" component={Mentorship} />

      <Route exact path="/Contact" component={Contact} />  
      <Route exact path="/About" component={About} />
      <Route component={NotFound} />    
    </Switch>
  );
}

export default App;
