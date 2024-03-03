import CardHistory from "./CardHistory";

export const metadata = {
  title: "Giới thiệu - Mindmap Flow",
  description: "Generated by create next app",
};

const About = () => {
  return (
    <section className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="text-2xl lg:text-3xl font-bold leading-9 text-gray-500">
            How to Mind Map, Beautifully
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 pb-4">
            Features for Your Big Ideas.
          </h2>
          <p className="font-normal text-base leading-6 text-gray-400">
            Mind mapping starts with a main idea in the center of your mind map.
            Create unlimited subtopics and explore your thoughts, color coding
            for clarity and style. As your map takes shape, add context to
            topics with attachments, embedded media and more. MindMeister’s
            features guide you through your first mind maps onto maximum
            creativity.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="text-2xl lg:text-3xl font-bold leading-9 text-gray-500">
            Unlock Your Imagination
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 pb-4">
            Mind Map Online.
          </h2>
          <p className="font-normal text-base leading-6 text-gray-400">
            MindMeister makes creating stunning mind maps easy. Our intuitive
            editor allows you to map your big ideas together with your team,
            quickly and beautifully. From project planning, to brainstorming, to
            meeting management, set your collaborative creativity free and
            create epic mind maps.
          </p>
        </div>

        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Olivia
              </p>
            </div>

            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Liam
              </p>
            </div>

            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //History */}
      <section className="history_section pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="text-2xl lg:text-3xl font-bold leading-9 text-gray-500">
            Mind Mapping 101
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 pb-4">
            A Short History
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-5 mt-3">
          <CardHistory />
        </div>
      </section>
    </section>
  );
};

export default About;
