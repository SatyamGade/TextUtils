import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode==="Light"?"black":"white",
        backgroundColor: props.mode==="Light"?"white":"rgb(26 27 28)",
        border: "1px solid",
        borderColor: props.mode==="Light"?"black":"white"
    }

    return (
        <div className="container my-3">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            About {props.title}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a website that manupulate the text which is inputed by a User.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Properties of {props.title}
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <ol className="list-group list-group-numbered" >
                                <li className="list-group-item" style={myStyle}>Text can be converted into Uppercase.</li>
                                <li className="list-group-item" style={myStyle}>Text can be converted into Lowercase.</li>
                                <li className="list-group-item" style={myStyle}>Text can be copied to Clipboard.</li>
                                <li className="list-group-item" style={myStyle}>First letter of each word can be converted into Uppercase.</li>
                                <li className="list-group-item" style={myStyle}>Extra spaces can be removed in the text.</li>
                                <li className="list-group-item" style={myStyle}>Summary about text is available.</li>
                                <li className="list-group-item" style={myStyle}>Preview of text is available.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Other Things About {props.title}
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <ol className="list-group list-group-numbered" >
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={myStyle}>
                                    <div className="ms-2 me-auto" >
                                        <div className="fw-bold">Platform</div>
                                        Visual Studio Code.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={myStyle}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Languages</div>
                                        HTML, CSS, JAVASCRIPT.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={myStyle}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Library or Framework</div>
                                        REACTJS, BOOTSTRAP.
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
