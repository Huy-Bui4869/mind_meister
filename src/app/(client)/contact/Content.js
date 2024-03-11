import Image from "next/image";

// import CheckSVG from "@/public/check.svg";

const Content = () => {
  return (
    <div className="max-w-[530px] w-full mx-auto md:mx-0">
      <div className="flex flex-col">
        <span className="text-2xl lg:text-3xl font-bold leading-9 text-gray-500 dark:text-gray-400">
          Contact our Sales Team
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 dark:text-gray-100 pb-6">
          Get in Touch.
        </h2>
        <p className="font-normal text-xl leading-6 text-gray-400 dark:text-gray-500">
          Tell us how we can help you succeed. We will:
        </p>
      </div>

      <ul className="space-y-7 mt-8">
        <li className="flex gap-3 items-start">
          <img
            src="/check.svg"
            alt="check"
            className="w-6 h-6 p-[2px] rounded-full border-2 border-gray-600"
          />
          <span className="text-gray-600 dark:text-gray-400">
            Help increase your productivity.
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <img
            src="/check.svg"
            alt="check"
            className="w-6 h-6 p-[2px] rounded-full border-2 border-gray-600"
          />
          <span className="text-gray-600 dark:text-gray-400">
            Create a price and license plan best suited to your needs.
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <img
            src="/check.svg"
            alt="check"
            className="w-6 h-6 p-[2px] rounded-full border-2 border-gray-600"
          />
          <span className="text-gray-600 dark:text-gray-400">
            Introduce MindMeister and explain its value to your business.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Content;
