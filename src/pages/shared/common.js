import Footer from "./footer";
import Header from "./nav";

const Common = ({Component}) => {
    return (
        <>
            < Header />
            <Component />
            <Footer />
        </>
    );
}

export default Common;