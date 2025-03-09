import { MEDIA } from "../constants/media";

export const NavBar = () => {
  return (
    <nav>
      <div className="fixed w-full top-0 left-0 flex justify-center p-8">
        <a href="#" className="my-auto">
          <img src={MEDIA.BULLSHIT} alt="logo" className="w-28" />
        </a>
      </div>
    </nav>
  );
};
