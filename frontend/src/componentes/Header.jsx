const Header = () => {
  return (
    <div className="text-center mb-10">

      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        🛡 Spam Detection AI
      </h1>

      <p className="mt-3 text-gray-600 text-lg">
        Detect Spam Emails & SMS using Machine Learning
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">

        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm shadow">
          🤖 AI Powered
        </span>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm shadow">
          🌳 Random Forest
        </span>

        <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm shadow">
          ⚡ FastAPI
        </span>

      </div>

    </div>
  );
};

export default Header;
