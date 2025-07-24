function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      
      {/* Left side: App Title */}
      <h1 className="text-xl font-bold text-indigo-600">Group App</h1>

      {/* Middle Nav Items */}
      <div className="flex gap-6">
        <h1 className="text-md font-medium text-gray-700 hover:text-indigo-600 cursor-pointer">Home</h1>
        <h1 className="text-md font-medium text-gray-700 hover:text-indigo-600 cursor-pointer">About</h1>
        <h1 className="text-md font-medium text-gray-700 hover:text-indigo-600 cursor-pointer">Contact</h1>
      </div>

      
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
        Create Group
      </button>
    </nav>
  );
}

export default Navbar;
