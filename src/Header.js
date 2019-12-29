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
        const { monster,searchfield } = this.state
        const FieldMonster = monster.filter(individual => individual.name.toLowerCase().includes(searchfield.toLowerCase())) 
        
        return ( 
            <div className="header">
                <input type="search" placeholder="search monsters" onChange={e=>this.setState({searchfield:e.target.value})}/>
                <CardList monster={FieldMonster} />
            </div>
         );
    }
}
 
export default Header;