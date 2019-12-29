import React,{Component} from "react"
import CardList from "./components/card-list/CardList.jsx"
import "./header.style.css"
import SearchBox from "./components/searchBox/SearchBox.js";

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

handleChange = e => {
    this.setState({searchfield:e.target.value})
}

    render() { 
        const { monster,searchfield } = this.state
        const FieldMonster = monster.filter(individual => individual.name.toLowerCase().includes(searchfield.toLowerCase())) 
        
        return ( 
            <div className="header">
               <SearchBox
               placeholder="search monster"
               handleChange={this.handleChange} />
                <CardList monster={FieldMonster} />
            </div>
         );
    }
}
 
export default Header;