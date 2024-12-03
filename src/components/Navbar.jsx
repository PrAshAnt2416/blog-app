
const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-1 py-4 px-8">
        <div className="text-lg font-bold">Your Name</div>
        <nav className="flex space-x-10 ml-auto">
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#newsletter" className="hover:underline">Newsletter</a>
        </nav>
        <button className="ml-3 text-xl">🌙</button>
      </header>
      <hr className="border-t border-gray-300 w-auto" />
    </>
  );
};

export default Navbar;
