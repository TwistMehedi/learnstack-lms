import { Routes, Route } from "react-router";
import SignIn from './pages/auth/sign-in';


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SignIn />}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
