const PredictButton = ({ onPredict, loading }) => {
  return (
    <button
      onClick={onPredict}
      disabled={loading}
      className={`
        w-full
        mt-6
        py-4
        rounded-2xl
        font-semibold
        text-lg
        text-white
        shadow-lg
        transition-all
        duration-300

        ${loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:scale-[1.02] hover:shadow-xl"
        }
      `}
    >
      {loading ? (
        <div className="flex justify-center items-center gap-3">

          <svg
            className="animate-spin h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>

            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>

          Analyzing...
        </div>
      ) : (
        "🔍 Analyze Message"
      )}
    </button>
  );
};

export default PredictButton;
