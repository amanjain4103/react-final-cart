import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-sm navbar-light bg-light" id="mynavbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#mynavbar">Final Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex my-auto">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item my-auto">
                            <a className="nav-link" href="#">About</a>
                        </li>

                        <li className="nav-item">
                            <button type="button" className="btn btn-primary btn-sm position-relative m-2">
                                Checkout
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {this.props.noOfPositiveCounters}
                                </span>
                            </button>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>

            </React.Fragment>
        )
    }
}

export default Navbar;