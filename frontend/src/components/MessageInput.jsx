const MessageInput = ({ message, setMessage }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">

      {/* Heading */}

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-gray-800">
          📩 Enter Your Message
        </h2>

        <span className="text-sm bg-slate-100 px-3 py-1 rounded-full text-gray-600">
          Max 1000 Characters
        </span>

      </div>

      {/* Text Area */}

      <textarea
        rows={8}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Paste your email or SMS here..."
        className="
          w-full
          rounded-2xl
          border-2
          border-gray-200
          bg-slate-50
          p-5
          text-gray-700
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-4
          focus:ring-blue-300
          focus:border-blue-500
          resize-none
          transition
        "
      />

      {/* Bottom Row */}

      <div className="flex justify-between items-center mt-4">

        <p className="text-gray-500 text-sm">
          {message.length} Characters
        </p>

        <button
          onClick={() => setMessage("")}
          className="
            px-4
            py-2
            rounded-xl
            bg-red-50
            text-red-600
            hover:bg-red-100
            transition
            font-medium
          "
        >
          🗑 Clear
        </button>

      </div>

    </div>
  );
};

export default MessageInput;
