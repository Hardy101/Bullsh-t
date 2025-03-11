import { FormData } from "../pages/enterForum";

const AuthModal: React.FC<FormData> = ({ name, password }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40">
      <div className="modal bg-white rounded-2xl p-4">
        <form action="#">
          <div className="form-control">
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
            />
          </div>
          <div className="form-control">
            <input
              id="password"
              name="password"
              value={password}
              type="text"
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-white border-2 border-grey rounded-lg outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
