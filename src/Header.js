import React,{Component} from "react"
import CardList from "./components/card-list/CardList.jsx"
import "./header.style.css"

class Header extends Component {
    state = { 
   monster:[]
     }
     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then(issue=>this.setState({monster:issue}))
     }
    render() { 
        return ( 
            <div className="header">
                <CardList monster={this.state.monster} />
            </div>
         );
    }
}
 
export default Header;