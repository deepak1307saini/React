
//rce generate coide Snippets

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {   //Use rconst for generate code of constructor (Snippets)
      super(props)
    
      this.state = {
         count:0
      }
    }

    // //state mode going to modified in UI
    // increment(){
    //     this.state.count=this.state.count+1
    //     console.log(this.state.count)
    // }

    // increment(){
        
    //     this.setState({
    //         count:this.state.count+1
    //     },
    //     ()=>{console.log('Callback value',this.state.count)})  //Call back function 1,2..
    //     console.log(this.state.count) //syncronous log function 0,1,2...
    // }

    increment(){
        
        this.setState(prevState=>({
            count: prevState.count+1
        }))
       
        console.log(this.state.count) //syncronous log function 0,1,2...
    }



    incrementFive(){      // React makes multiple set state calls  into a single update for better perfomance five state in going one=> increment by 1 only
        this.increment()   // ToSolve this we use prevState rather than current state
        this.increment()   // instead of regular object function have previous state access
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>Count - {this.state.count}
      <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
