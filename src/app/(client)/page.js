import Image from "next/image";
import soDoTuDuy from "~/assets/images/soDoTuDuy.webp";

import dataHomeAll from "~/data/home.json";

const Home = () => {
  return (
    <div className="bg-indigo-100 dark:bg-transparent py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-2 text-gray-800 dark:text-gray-100">
            Học tập hiệu quả với bản đồ tư duy
          </h1>
          <button className="bg-[#FF338F] text-white py-2 px-6 rounded-full text-xl mt-6">
            Sử dụng miễn phí
          </button>
          <div className="mt-4">
            <Image
              src={soDoTuDuy}
              alt="So-do-tu-duy"
              loading="eager"
              priority
            />
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
          {dataHomeAll.home.map(({ title, value }, i) => (
            <div
              className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center"
              key={i}
            >
              <span className="w-20 border-t-2 border-solid border-indigo-200 dark:border-gray-700 inline-block mb-3"></span>
              <h5 className="text-xl font-medium uppercase mb-4 text-gray-800 dark:text-gray-100">
                {title}
              </h5>
              <p className="text-gray-600 dark:text-gray-400">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
