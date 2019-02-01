import React,{Component} from "react";

import "./index.css";
import viewBox from '../../assets/svg/viewBox.svg';

class Bodys extends Component{
	render(){
		return <svg width="1600" height="1600"><use xlinkHref="#viewBox" /></svg>;
	}
}

export default Bodys;