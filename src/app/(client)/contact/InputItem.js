const InputItem = ({ props: { label, type, name, placeholder } }) => {
  return (
    <label>
      <span className="block text-gray-500 dark:text-gray-400 pb-1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-base leading-6 text-gray-800 dark:text-gray-100 placeholder-gray-400 rounded-md py-2 pl-3 ring-1 ring-gray-300 dark:ring-gray-900 shadow-sm"
      />
    </label>
  );
};

export default InputItem;
