import Content from "./Content";
import ContactForm from "./ContactForm";
import ListLogo from "./ListLogo";

export const metadata = {
  title: "Liên hệ - Mindmap Flow",
  description: "Generated by create next app",
};

const Contact = () => {
  return (
    <section className="relative ">
      <div className="flex flex-col md:flex-row justify-center md:items-start gap-12 lg:gap-16 mx-auto pt-16 px-6 lg:px-2">
        <Content />
        <ContactForm />
      </div>
      <figure className="w-screen absolute z-[-1] top-[25%] md:top-[42%] left-0 translate-y-[-50%]">
        <img src="./Meister-Wave-Export.svg" alt="bg" className="w-full" />
      </figure>
      <div className="mx-auto max-w-[1160px] w-full px-6">
        <ListLogo />
        <p className="pt-12 pb-20 text-3xl text-[32px] text-gray-400 dark:text-gray-500 text-center">
          “The Meister Sales Team is dedicated to helping customers worldwide
          achieve their goals with our innovative productivity tools. We’d love
          to help you and your team as well!”
        </p>
      </div>
    </section>
  );
};

export default Contact;
