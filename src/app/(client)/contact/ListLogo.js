import Image from "next/image";
import Fischer from "@/public/contact/fischer.png";

const ListLogo = () => {
  const data = [
    {
      src: "/contact/Allianz-logo.svg",
      alt: "allianz",
      width: 162,
      height: 41,
    },
    { src: "/contact/Lbbw-logo.svg", alt: "lbbw", width: 168, height: 35 },
    {
      src: "/contact/Ritter_Sport_logo.svg",
      alt: "ritter",
      width: 69,
      height: 68,
    },
    {
      src: Fischer,
      alt: "fischer",
      width: 199,
      height: 38,
    },
    {
      src: "/contact/Mainfranken-Worzburg-logo.svg",
      alt: "mainfranken",
      width: 53,
      height: 90,
    },
  ];
  return (
    <ul className="flex flex-wrap justify-evenly items-center gap-8 pt-20">
      {data.map(({ src, alt, width, height }, i) => (
        <li key={i}>
          <Image src={src} alt={alt} width={width} height={height} />
        </li>
      ))}
    </ul>
  );
};

export default ListLogo;
