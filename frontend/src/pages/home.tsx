import { NavBar } from "../components/Navbar";
import { PostSomething } from "../components/PostSomething";
import { MyForums } from "../components/MyForums";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <PostSomething />
      </div>
    </>
  );
};
