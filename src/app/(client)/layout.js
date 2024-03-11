import Header from "~/components/Header";
import Footer from "~/components/Footer";

const clientLayout = async ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default clientLayout;
