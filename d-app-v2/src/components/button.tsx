const Button = ({ name, message, type, onClick }) => {
  return type === 1 ? (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
      <button
        onClick={() => {
          console.log("Button clicked");
          onClick(); // Call the onClick function
        }}
      >
        <h2 className={`mb-1 text-3xl font-semibold`}>
          {name}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
          {message}
        </p>
      </button>
    </div>
  ) : type === 2 ? (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
      <button
        onClick={() => {
          console.log("Mint Button clicked");
          onClick(); // Call the onClick function
        }}
      >
        <h2 className={`mb-1 text-3xl font-semibold`}>
          {name}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
          {message}
        </p>
      </button>
    </div>
  ) : null;
};

export default Button;
