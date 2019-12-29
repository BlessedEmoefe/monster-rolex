import React,{Component} from "react"
import CardList from "./components/card-list/CardList.jsx"
import "./header.style.css"

class Header extends Component {
    state = { 
   monster:[],
   searchfield:''
     }
     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then(issue=>this.setState({monster:issue}))
     }
    render() { 
        return ( 
            <div className="header">
                <input type="search" placeholder="search monsters" onChange={e=>{this.setState({searchfield:e.target.value},console.log(this.state))
                    }}/>
                <CardList monster={this.state.monster} />
            </div>
         );
    }
}
 
export default Header;