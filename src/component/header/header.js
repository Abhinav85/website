import React, {Component} from 'react';
import './header.scss';
import valuesin from 'lodash.valuesin'

// for left align keep the align tab to be false, for right align let it be true

export default class HeaderFixed extends Component{

    getHeader(){
        const rightList = [];
        const leftList = [];
        let arr = valuesin(this.props.headerList);
        arr.map((item) => {
            let className = "headingTab";
            let i = item.index;
            console.log("Item",item);
            if(item.active){
                className = "headingTab active"
            }
            if(item.align){
                rightList.push(
                    <span className = {className} onClick = {() =>this.onHeaderClick(item.divName)}>{item.title}</span> 
                )
            }else{
                leftList.push(
                    <span className = {className} onClick = {()=>this.onHeaderClick(item.divName)}>{item.title}</span>                     
                )
            }
        })

        return {leftList,rightList};
    }

    onHeaderClick(input){
        
        console.log("Inputname",input);
        this.props.goToIndex(input);
    }

    render(){
        let header = this.getHeader();

        // return(
        //     <div className = "fixedHeader">
        //         <div className = "heading1">
        //             {header}
        //         </div>
        //     </div>
        // )
        return(
            <div className = "fixedHeader">
                <div className = "heading1">
                    <div className = "leftAlign">
                    {header.leftList}
                    </div>
                    <div className = "rightAlign">
                        {header.rightList}
                    </div>
                </div>
            </div>
        )
    }
}