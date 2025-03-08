import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Home from "./pages/home";
import GetLink from "./pages/generateLink";
import MessageBoard from "./pages/msgBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="getlink" element={<GetLink />} />
          <Route path="messageboard" element={<MessageBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
