import React from "react";

const BasicNavsTabs = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Basic Navs & Tabs</h6>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            Home
                        </button>
                        <button
                            className="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            Profile
                        </button>
                        <button
                            className="nav-link"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            Contact
                        </button>
                    </div>
                </nav>
                <div className="tab-content pt-3" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        Diam sea sanctus amet clita lorem sit sanctus ea elitr.
                        Lorem rebum est elitr eos. Dolores aliquyam sadipscing
                        dolor sadipscing accusam voluptua tempor. Sanctus elitr
                        sanctus diam tempor diam aliquyam et labore clita, ipsum
                        takimata amet est erat, accusam takimata gubergren sea
                        sanctus duo nonumy. Ipsum diam ipsum sit kasd.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                        Sanctus vero sit kasd sea gubergren takimata consetetur
                        elitr elitr, consetetur sadipscing takimata ipsum
                        dolores. Accusam duo accusam et labore ea elitr ipsum
                        tempor sit, dolore aliquyam ipsum sit amet sit. Et
                        dolore ipsum labore invidunt rebum. Sed dolore gubergren
                        sanctus vero diam lorem rebum elitr, erat diam dolor
                        clita.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                        Sit consetetur eirmod lorem ea magna sadipscing ipsum
                        elitr invidunt, dolores lorem erat ipsum ut aliquyam eos
                        lorem sed. Nonumy aliquyam ea justo eos dolores dolores
                        duo dolores. Aliquyam dolor sea dolores sit takimata no
                        erat vero. At lorem justo tempor lorem duo, stet kasd
                        aliquyam ipsum voluptua labore at.
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicNavsTabs;
