import Signin from "./Components/signin/Signin.Component";
import Signup from "./Components/signup/Signup.Component";
// import Signup from "./Components/signup/Signup.Component";
// import signup from "./Components/signup/Signup.Component"

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
       <Routes>
         <Route path="/" element={<Signin/>} />
         <Route path="/signup" element={<Signup/>} />
       </Routes>
    </div>
    </>
  );
}

export default App;
