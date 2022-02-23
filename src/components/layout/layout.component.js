import Routes from "../../routes/routes";
import Footer from "../Footer";
import Header from "../Header";

const LayoutCompnent = () => {
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
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
