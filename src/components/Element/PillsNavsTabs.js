import React from "react";

const PillsNavsTabs = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Pills Navs & Tabs</h6>
                <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                        >
                            Profile
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        Sit sanctus et stet dolor kasd kasd takimata. Dolor stet
                        dolores nonumy et dolor et eos lorem et, diam ipsum
                        nonumy elitr sanctus dolores voluptua sit dolor, at et
                        et amet nonumy elitr ea et ipsum. Elitr lorem et dolore
                        invidunt eirmod voluptua lorem sed. Sed eirmod
                        sadipscing eos tempor.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        Invidunt rebum voluptua lorem eirmod dolore. Amet no sed
                        sanctus lorem ea. Nonumy sit stet sit magna. Rebum rebum
                        ipsum clita erat consetetur, sit dolor sit clita et
                        amet. Est et clita dolore takimata, sea dolores tempor
                        erat consetetur lorem. Consetetur sea sadipscing dolor
                        et dolores et stet, tempor elitr.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                    >
                        Et diam et est sed vero ipsum voluptua dolor et, sit eos
                        justo ipsum no ipsum amet sed aliquyam dolore, ut ipsum
                        sanctus et consetetur. Sit ea sit clita lorem ea
                        gubergren. Et dolore vero sanctus voluptua ipsum
                        sadipscing amet at. Et sed dolore voluptua dolor eos
                        tempor, erat amet.
                    </div>
                </div>
            </div>
        </>
    );
};

export default PillsNavsTabs;
