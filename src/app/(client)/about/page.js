import CardHistory from "./CardHistory";
import { featured, content, history } from "~/data/about.json";
import CardUser from "./CardUser";
import Heading from "./Heading";

export const metadata = {
  title: "Giới thiệu - Mindmap Flow",
  description: "Generated by create next app",
};

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <section className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <Heading props={featured.heading} />
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </section>

      <section className="featured_section flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <Heading props={content.heading} />
        <ul className="w-full lg:w-8/12 lg:pt-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          {content.data.map((value, i) => (
            <CardUser key={i} props={value} />
          ))}
        </ul>
      </section>

      <section className="history_section pt-12">
        <Heading props={history.heading} />
        <ul className="flex justify-center flex-wrap gap-5 mt-3">
          {history.data.map((value, i) => (
            <CardHistory key={i} props={value} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
