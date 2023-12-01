import React from "react";
// import LeftSidebar from "../components/dashboard/sidebar/leftSidebar/leftSidebar"
import { Outlet } from "react-router-dom";


const Layout2 = () => {

    return (
        <>
            <h1>Not Working</h1>
            <div className="main-content-area">
                {<Outlet />}
            </div>

        </>


    )

}
export default Layout2;