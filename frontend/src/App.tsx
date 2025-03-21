import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Home from "./pages/home";
import GetLink from "./pages/generateLink";
import MessageBoard from "./pages/msgBoard";
import EnterForum from "./pages/enterForum";
import AuthModal from "./components/authModal";
import SendMessage from "./pages/sendMessage";
import { NavBar } from "./components/Navbar";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar setShowModal={() => setShowModal(true)} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="getlink" element={<GetLink />} />
          <Route path="messageboard" element={<MessageBoard />} />
          <Route path="forum" element={<EnterForum />} />
          <Route path="sendMessage" element={<SendMessage />} />
        </Routes>
      </BrowserRouter>

      <AuthModal showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
