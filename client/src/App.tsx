import { Routes, Route } from "react-router";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/Home/Home";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </Wrapper>
  );
};

export default App;
