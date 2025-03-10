import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Home from "./pages/home";
import GetLink from "./pages/generateLink";
import MessageBoard from "./pages/msgBoard";
import EnterForum from "./pages/enterForum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="getlink" element={<GetLink />} />
          <Route path="messageboard" element={<MessageBoard />} />
          <Route path="forum" element={<EnterForum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
