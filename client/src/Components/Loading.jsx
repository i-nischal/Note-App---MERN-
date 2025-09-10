const Loading = () => {
  const text = "Loading";
  return (
    <div className=" h-screen flex items-center justify-center ">
      <h1 className="text-4xl text-center font-bold text-gray-800 flex space-x-1">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
        <span className="inline-block ml-2 animate-pulse">...</span>
      </h1>
    </div>
  );
};

export default Loading;