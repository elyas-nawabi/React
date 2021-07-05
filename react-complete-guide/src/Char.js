import React, { Component } from "react";
class Char extends React.Component{
    render(){
        const style = {
            display:'inline-block',
            padding:'16px',
            textAlign:'center',
            margin:'16px',
            border:'1px solid black'

        }
        
        // const passedArray = this.props.character.map((index)=>{
        //  return 
        // })
        return(
          <div style={style} onClick={this.props.clicked}>
              {this.props.character}
          </div>
         
         
        )
    }
}
export default Char