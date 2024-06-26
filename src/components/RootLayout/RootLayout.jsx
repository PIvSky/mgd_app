import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default RootLayout;