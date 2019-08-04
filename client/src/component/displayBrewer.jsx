import React, { Component } from "react";


class DisplayQuery extends Component {
    constructor(props) {
        super(props);
        this.state = { green: true }
    }

    changeColor = () =>{
        this.setState({green: !this.state.green})
    }
    render() { 
        let btn_class = this.state.green ? "blackButton" : "whiteButton";
        console.log(this.props.brewer);
        return ( 
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>state</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>phone</th>
                        <th>Click it to Favourite it</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.brewer.map(brewer=> (
                        <tr key = {brewer.id}>
                        <td>{brewer.id}</td>
                        <td>{brewer.name}</td>
                        <td>{brewer.state}</td>
                        <td>{brewer.city}</td>
                        <td>{brewer.country}</td>
                        <td>{brewer.phone}</td>
                        <td>
                            <button type = "button" className= {btn_class} onClick={() => this.changeColor()}>favourite button</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         );
    }
}
/*
<td></td>
                        <td>
                            <button type= 'button'>Favourite</button>
                        </td>
*/
 
export default DisplayQuery ;