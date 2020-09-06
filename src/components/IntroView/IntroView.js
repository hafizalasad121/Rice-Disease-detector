import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Text1 from "./Text1";
import Text2 from "./Text2";

function IntroView() {
    return (
        <>
            <div className="top-space" />
            <h1>Rice Disease Classification</h1>
            <Text1 />
            <Link to="/detector">
                <Button className="start-button start-button-size">
                    START...
                </Button>
            </Link>
            <Text2 />
        </>
    );
}

export default IntroView;
