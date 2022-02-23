import Routes from "../../routes/routes";
import Footer from "../Footer";
import Header from "../Header";

const LayoutCompnent = () => {
    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    );
};

export default LayoutCompnent;
