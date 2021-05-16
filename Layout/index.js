import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
