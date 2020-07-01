import React from "react";

function Form (props) {
    return (
        <div className="ui form">
            <div className="field">
                <label>Title:</label>
                    <input type="text"/>
            </div>
            <div className="field">
                <label>Due Date:</label>
                    <input type="text"/>
            </div>
            <div className="field">
                <label>Description:</label>
                    <input type="text"/>
            </div>
        </div>
    )
}

export default Form;