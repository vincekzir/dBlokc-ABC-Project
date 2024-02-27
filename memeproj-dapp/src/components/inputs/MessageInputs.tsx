const MessageInputs = ({ type, message }) => {
  return type === 1 ? (
    <div
      className="mb-10 justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col"
      style={{
        position: "absolute",
        top: "24%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 className="text-2xl font-semibold font-syber">WHAT</h2>
    </div>
  ) : null;
};
export default MessageInputs;
