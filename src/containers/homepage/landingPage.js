import React, { Component } from 'react';
import HeaderFixed from './../../component/header/header'
import TypeWriterHeader from './../../component/typewriter/typewriter';
import Heading from './../../component/heading/heading';
import scrollToComponent from 'react-scroll-to-component';
import './landingPage.scss';
import Utils from './../../component/Utils/Utils';
import VisibilitySensor from 'react-visibility-sensor';

export default class LandingPage extends Component{
    constructor(props){
        super();
        this.goToIndex = this.goToIndex.bind(this);
        this.atWhatHeight = this.atWhatHeight.bind(this);
        this.onHelloVisible = this.onHelloVisible.bind(this);
        this.onSkillsVisible = this.onSkillsVisible.bind(this);
        this.state = {
                headerTitles : {
                    "1" : 
                {title : "Hello", active : true, align : false, index : 1,divName : "hello"},
                    "2":
                {title : "Skills", active : false, align : false, index : 2, divName : "skills"},
                    "3" : 
                {title : "Projects and Blogs", active : false, align : true, index : 3},
                    "4" : 
                {title : "About Me", active : false, align : true, index : 4}
                }
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.atWhatHeight);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.atWhatHeight)
    }


    goToIndex(divName){
        console.log("This.containeroffser", this[divName]);
        scrollToComponent(this[divName],{offset : 0,align : 'top',duration : 1500});
    }

    atWhatHeight(){
        if(!Utils.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(this.landingPage)){
            // console.log("The Client Height",this.landingPage.clientHeight)
            // console.log("The scroll height of div", this.landingPage.scrollHeight);
            // console.log("The Actual fuckinh height", this.endDiv.offsetHeight);
            // console.log("The Offset Height", this.landingPage.offsetHeight);
            // console.log("scrollTo", window.scrollY)
            let currentScrolled = (this.landingPage.scrollHeight)
        }
    }

    onHelloVisible(isVisible){
        console.log("Is it",isVisible);
        let headerTitles = this.state.headerTitles
        headerTitles["1"].active = isVisible;
        this.setState({
            headerTitles : headerTitles
        })
    }

    onSkillsVisible(isVisible){
        console.log("Are they",isVisible)
        let headerTitles = this.state.headerTitles        
        headerTitles["2"].active = isVisible;
        this.setState({
            headerTitles : headerTitles
        })
    }


    
    render(){
        const strings = ["Front End Developer","UI/UX Enthusiast"]
        const inputHeading = "Hi, I am Abhinav"
        return(
            <div ref = {(e1) => {this.landingPage = e1}} className = "landingPage">
            <HeaderFixed headerList = {this.state.headerTitles} goToIndex = {this.goToIndex.bind(this)} />
                <div  ref = {(e1) => {this.hello = e1}} className = "landingPage1">
                    <Heading inputHeading = {inputHeading} />
                    <VisibilitySensor onChange = {this.onHelloVisible}/>
                    <TypeWriterHeader 
                        strings = {strings}
                    />
                    <div className = "materialIcons">
                        <i className = "material-icons md-48" onClick = {() =>this.goToIndex("skills")}>expand_more</i>         
                    </div>
                </div>
                <div ref = {(e1) => {this.skills = e1}} className = "landingPage2">
                    <VisibilitySensor onChange = {this.onSkillsVisible}/>
                    <div className = "hexagonParent">
                        <div className="hexagon"></div>
                    </div>
                    {/* <TypeWriterHeader 
                        strings = {strings}
                    /> */}
                    <div className = "materialIcons">
                        <i className = "material-icons md-48">expand_more</i>
                    </div>
                </div>
                <div ref = {(e1) =>{this.endDiv = e1}}></div>
            </div>
        )
    }
}