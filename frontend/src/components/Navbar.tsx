import { MEDIA } from "../constants/media";

interface ModalProps {
  setShowModal: () => void;
}

export const NavBar: React.FC<ModalProps> = ({ setShowModal }) => {
  return (
    <nav>
      <div className="fixed w-full top-0 left-0 flex justify-between p-8">
        <a href="#" className="my-auto">
          <img src={MEDIA.BULLSHIT} alt="logo" className="w-28" />
        </a>
        <button
          onClick={setShowModal}
          className={`inline-flex items-center py-1 pl-1 pr-2 gap-4 text-black text-sm font-lobster bg-white rounded-full`}
        >
          <img src={MEDIA.ANONYM} alt="anonymous" className="w-8 " />
          <span>Register/Login</span>
        </button>
      </div>
    </nav>
  );
};
