import React,{Component} from "react"

class Header extends Component {
    state = { 
   monster:[
       {name:"blessed",
        id:1},
       {name:"Emoefe",
       id:2},
       {name:"junior",
       id:3},
       {name:"havard",
       id:4}

   ]
     }
     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then(issue=>this.setState({monster:issue}))
     }
    render() { 
        return ( 
            <div><h3>thi is</h3>
                {this.state.monster.map(individual=><h2 key={this.state.monster.id}>{individual.name}</h2>)}
            </div>
         );
    }
}
 
export default Header;