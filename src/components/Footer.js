import Link from "next/link";

const Footer = () => {
  const dataFooter = [
    {
      title: "Features",
      data: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Stuff for developers",
        "Another one",
        "Last time",
      ],
    },
    {
      title: "Resources",
      data: ["Resource", "Resource name", "Another resource", "Final resource"],
    },
    {
      title: "About",
      data: ["Team", "Locations", "Privacy", "Terms"],
    },
    {
      title: "Help",
      data: ["Support", "Help Center", "Contact Us"],
    },
    {
      title: "Stay connected",
      data: [
        {
          name: "fa-facebook",
          bgColor: "blue-600",
        },
        {
          name: "fa-twitter",
          bgColor: "blue-400",
        },
        {
          name: "fa-google-plus-g",
          bgColor: "red-600",
        },
      ],
    },
  ];

  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          {dataFooter.map(({ title, data }, i) => {
            if (title === "Stay connected") {
              return (
                <div
                  className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto"
                  key={i}
                >
                  <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                    {title}
                  </h5>
                  <div className="flex sm:justify-center xl:justify-start">
                    {data.map(({ name, bgColor }, i) => (
                      <Link
                        key={i}
                        href="#"
                        className={`w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 `}
                      >
                        <i className={`fa-brands ${name}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div
                className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0"
                key={i}
              >
                <h5 className="text-xl font-bold mb-6">{title}</h5>
                <ul className="list-none footer-links">
                  {data.map((value, index) => (
                    <li className="mb-2" key={index}>
                      <Link
                        href="/#"
                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                      >
                        {value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              123 6th St.
              <br />
              Melbourne, FL 32904
            </address>
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
              <em>All are MIT License</em>
            </p>
          </div>

          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
