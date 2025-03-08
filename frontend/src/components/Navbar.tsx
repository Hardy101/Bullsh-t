import { MEDIA } from "../constants/media";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-center">
        <a href="#" className="my-auto">
          <img src={MEDIA.BULLSHIT} alt="logo" className="w-20" />
        </a>
      </div>
    </nav>
  );
};
