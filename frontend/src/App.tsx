import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Home from "./pages/home";
import GetLink from "./pages/generateLink";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="getlink" element={<GetLink />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
