import Header from "~/components/Header";
import Footer from "~/components/Footer";

const clientLayout = async ({ children }) => {
  return (
    <main>
      <Header />
      <div style={{ height: "64px" }}></div>
      {children}
      <Footer />
    </main>
  );
};

export default clientLayout;
