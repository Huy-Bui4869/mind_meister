const Heading = ({ props: { title, subTitle, intro } }) => {
  return (
    <div className="w-full lg:w-5/12 flex flex-col justify-center">
      <span className="text-2xl lg:text-3xl font-bold leading-9 text-gray-500 dark:text-gray-400">
        {subTitle}
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 dark:text-gray-100 pb-6">
        {title}
      </h2>
      <p className="font-normal text-base leading-6 text-gray-400 dark:text-gray-500">
        {intro}
      </p>
    </div>
  );
};

export default Heading;
