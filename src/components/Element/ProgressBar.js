import React from "react";

const ProgressBar = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Progress Bar</h6>
                <div className="pg-bar mb-3">
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="pg-bar mb-3">
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="pg-bar mb-3">
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-info"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="pg-bar mb-3">
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-warning"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="pg-bar mb-0">
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-danger"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
