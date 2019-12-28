import React,{Component} from "react"
import CardList from "./components/card-list/CardList.jsx"

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
            <div>
                <CardList monster={this.state.monster} />
            </div>
         );
    }
}
 
export default Header;