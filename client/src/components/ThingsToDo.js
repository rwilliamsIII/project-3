import React from "react";

function ThingsToDo (props) {
    return (
        <div className="ui styled fluid accordion">
            <div className="active title">
                <i className="dropdown icon"></i>
                    What is a dog?
            </div>
                <div className="active content">
                    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                </div>
        </div>
    )
}

export default ThingsToDo;