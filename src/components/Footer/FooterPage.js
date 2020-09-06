import {
    faFacebook,
    faGithub,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrivacyModal from "../ModalView/PrivacyModal";
import "./FooterPage.css";

const FooterPage = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} | All Rights Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/hafizalasad121/Rice-Disease-detector"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="http://fb.com/hafiz.alasad.121"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="item5">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default FooterPage;
