import { NavBar } from "../components/Navbar";

export const Home: React.FC = () => {
  return (
    <main className="flex h-screen">
      <NavBar />
      <div className="font-neucha w-3/5 m-auto text-white">
        <p className="grid gap-y-6 text-5xl text-center">
          <span className="">We listen, we don't judge.</span>
          <span className="text-3xl text-grey text-center">
            okay...maybe a little
          </span>
        </p>
        <p className="flex gap-4 mt-8 justify-center text-xl">
          <a href="#" className="bg-yellow text-black px-4 py-2 rounded-sm">
            Generate Link
          </a>
          <a href="#" className="bg-yellow text-black px-4 py-2 rounded-sm">
            I have a link
          </a>
        </p>
      </div>
    </main>
  );
};
