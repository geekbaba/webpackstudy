import React,{Component} from "React";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bodys from "../../components/Bodys";

import "./index.css";


export default class App extends Component{

	render(){
		return  (
			<div>
				<Header />
                <Bodys />
				<Footer />
			</div>
		);
	}
}
