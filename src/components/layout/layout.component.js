import Routes from "../../routes/routes";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
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
