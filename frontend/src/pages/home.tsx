import { NavBar } from "../components/Navbar";
import { PostSomething } from "../components/PostSomething";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <PostSomething />
    </>
  );
};
