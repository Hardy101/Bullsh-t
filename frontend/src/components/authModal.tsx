import { useState } from "react";
import ReactDOM from "react-dom";

import { FormData } from "../pages/enterForum";

const AuthModal: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 font-neucha">
      <div className="relative modal bg-white rounded-2xl p-4">
        <button
          onClick={() => setShowModal(false)}
          className="absolute -top-5 -right-5 bg-red-500 text-sm"
        >
          close
        </button>

        <form action="#" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              id="name"
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
            />
          </div>
          <div className="form-control">
            <input
              id="password"
              name="password"
              value={formData.password}
              type="text"
              onChange={handleChange}
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
            />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
};

export default AuthModal;
