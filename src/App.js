import { Routes, Route } from "react-router-dom";

import Home from "./routers/home/home.component";
import Navigation from "./routers/navigation/navigation.component";
import SignIn from "./routers/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
