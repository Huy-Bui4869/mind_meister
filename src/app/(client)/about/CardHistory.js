import Image from "next/image";
import dataAboutAll from "~/data/about.json";

const CardHistory = () => {
  const { history } = dataAboutAll;

  return (
    <>
      {history.map(({ icon, color, title, desc }, i) => {
        return (
          <article
            key={i}
            className="p-6 bg-gray-200 rounded-md w-[45%] lg:w-[30%] flex-auto"
          >
            <Image src={icon} alt="icon" width={48} height={48} />
            <h3 className="text-[21px] font-bold py-3 mt-1">{title}</h3>
            <p className="text-gray-500">{desc}</p>
          </article>
        );
      })}
    </>
  );
};

export default CardHistory;
