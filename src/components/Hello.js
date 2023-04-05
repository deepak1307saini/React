import React from "react";


const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hello Deepak</h1>
    //     </div>
    // )

    // return React.createElement('div'
    // ,null  //Key value pair that is applied to element
    // ,React.createElement('h1',null,"Deepak Saini"))

    return React.createElement('div'
    ,{id:'Hello',className:'dummy'}
    ,React.createElement('h1',null,"Deepak Saini"))
}

export default Hello;