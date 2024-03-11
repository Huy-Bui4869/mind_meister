const CardUser = ({ props: { name, src, srcMobile, alt } }) => {
  return (
    <article className="p-4 pb-6 flex justify-center flex-col items-center">
      <img className="md:block hidden" src={src} alt={alt} />
      <img className="md:hidden block" src={srcMobile} alt={alt} />
      <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
        {name}
      </p>
    </article>
  );
};

export default CardUser;
