import React from "react";

class Counter extends React.Component {

    

    render() {
    
        const {productName,value} = this.props.counter;
        const classesForDecrementButton = value >= 1 ? "btn btn-warning btn-sm" : "btn btn-warning btn-sm disabled";

        return (
            <div className="d-inline-flex align-items-center counter w-100 gap-5">
                
                <p className="my-auto w-25">
                    {productName} 
                    <span className="badge bg-warning">{value}</span>
                </p>
                <div className="btn-group" role="group">
                    <button onClick={() => this.props.incrementMe(this.props.counter)} className="btn btn-success btn-sm">Inc.</button>
                    <button onClick={() => this.props.decrementMe(this.props.counter)} className={classesForDecrementButton}>Dec.</button>
                    <button onClick={() => this.props.resetMe(this.props.counter)} className="btn btn-danger btn-sm">Reset</button>

                </div>
            </div>
        )
    }
}

export default Counter;