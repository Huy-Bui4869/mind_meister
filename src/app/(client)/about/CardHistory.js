import Image from "next/image";

const CardHistory = ({ props: { icon, title, desc } }) => {
  return (
    <article className="p-6 bg-gray-200 dark:bg-gray-800 rounded-md w-[45%] lg:w-[30%] flex-auto">
      <Image src={icon} alt="icon" width={48} height={48} />
      <h3 className="text-[21px] font-bold py-3 mt-1 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-500">{desc}</p>
    </article>
  );
};

export default CardHistory;
