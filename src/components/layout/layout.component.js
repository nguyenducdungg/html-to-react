import Routes from "../../routes/routes";
<<<<<<< HEAD
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
=======
import Footer from "../../Header&Footer/Footer";
import Header from "../../Header&Footer/Header";

>>>>>>> hoan
const LayoutCompnent = () => {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes />    
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutCompnent;
