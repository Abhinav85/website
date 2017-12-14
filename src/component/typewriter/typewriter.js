import React , {Component} from 'react';
import ReactRotatingText from 'react-rotating-text'
import './typewriter.scss';

export default class TypewriterHeader extends Component{
    render(){
        console.log("This.props.|| This.state", this.props, this.state);
        if(this.props.strings.length > 0){
            return(
                <div className = "typewrite">
                <ReactRotatingText items = {this.props.strings}></ReactRotatingText>
                </div>
            )
        }
    }
}
