import "~/assets/scss/loading.scss";

const Loading = () => {
  return (
    <div className="overlay">
      <div className="loader"></div>
      <div className="loaderSmall"></div>
      <div className="loaderBig"></div>
    </div>
  );
};

export default Loading;
