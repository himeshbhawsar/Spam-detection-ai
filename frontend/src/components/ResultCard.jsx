const ResultCard = ({ prediction, confidence }) => {
  const isSpam = prediction === "Spam";

  return (
    <div className="mt-8 bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Prediction Result
      </h2>

     

      <div className="flex justify-center">

        <span
          className={`px-8py-3 rounded-full text-white text-lg font-bold

            ${
              isSpam? "bg-red-500": "bg-green-500"
            }
          `}
        >
          {isSpam ? "🚨 SPAM" : "✅ HAM"}
        </span>

      </div>

      {/* Confidence */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="font-medium text-gray-700">
            Confidence
          </span>

          <span className="font-bold">
            {(confidence * 100).toFixed(2)}%
          </span>

        </div>

        {/* Progress Bar */}

        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

          <div
            className={`h-full rounded-full transition-all duration-700 ${
              isSpam? "bg-red-500": "bg-green-500"}`}
            style={{
              width: `${confidence * 100}%`,
            }}
          ></div>

        </div>

      </div>

      {/* Model Information */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="bg-slate-100 rounded-xl p-4 text-center">

          <p className="text-gray-500 text-sm">
            Model
          </p>

          <h3 className="font-bold">
            Random Forest
          </h3>

        </div>

        <div className="bg-slate-100 rounded-xl p-4 text-center">

          <p className="text-gray-500 text-sm">
            Vectorizer
          </p>

          <h3 className="font-bold">
            TF-IDF
          </h3>

        </div>

        <div className="bg-slate-100 rounded-xl p-4 text-center">

          <p className="text-gray-500 text-sm">
            Status
          </p>

          <h3
            className={`font-bold ${
              isSpam
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {prediction}
          </h3>

        </div>

      </div>

    </div>
  );
};

export default ResultCard;