import React from "react";
import BasicAlerts from "./BasicAlerts";
import IconsDismissingAlerts from "./IconsDismissingAlerts";

const Element = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BasicAlerts />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <IconsDismissingAlerts />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Element;
