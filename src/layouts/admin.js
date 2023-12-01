import React from "react";
// import LeftSidebar from "../components/dashboard/sidebar/leftSidebar/leftSidebar"
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { config } from "../config/config";

const Layout1 = () => {
    const { i18n } = useTranslation();

    const handleTranslate = (event, code) => {
        event.preventDefault();
        i18n.changeLanguage(code);
      };
    return (
        <>
            {/* <h1>Working</h1> */}
            {config.lngs.map((lng, i) => {
            const { code, native } = lng;
            return (
              <button onClick={(event) => handleTranslate(event, code)}>
                {native}
              </button>
            );
          })}
            <div className="main-content-area">
                {<Outlet />}
            </div>

        </>


    )

}
export default Layout1;