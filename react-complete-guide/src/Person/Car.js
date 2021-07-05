import React from "react";

class Car extends React.Component{
    render(){
        return(
            <div className="Car">
                <h2>This is the worst tag in html. said: "{this.props.Author}"</h2>
            </div>
        );
    }
    
}
export default Car;