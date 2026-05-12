import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";
import About from "./pages/About";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Advertising from "./pages/Advertising";
import Business from "./pages/Business";
import AppDownload from "./pages/AppDownload";
import More from "./pages/More";
import Companies from "./pages/Companies";
import PostJob from "./pages/PostJob";
import Notifications from "./pages/Notifications";
import Profile from "./pages/ProfileWizard";
import ViewProfile from "./pages/ViewProfile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/business" element={<Business />} />
        <Route path="/app" element={<AppDownload />} />
        <Route path="/more" element={<More />} />
       <Route path="/companies" element={<Companies />} />
       <Route path="/post-job" element={<PostJob />} />
       <Route path="/notifications" element={<Notifications />} />
       <Route path="/profile" element={<Profile />} />
<Route path="/view" element={<ViewProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
