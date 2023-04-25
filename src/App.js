import React from "react";
import {connect} from 'react-redux';
import { IncAction} from "./actions";
import { DecAction } from "./actions";




const App =({local_variable,IncAction,DecAction}) =>{
  return(
    <div>
      <center>
      <h1>{local_variable}</h1> <br/>
      <button onClick={()=> IncAction(3)}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
      </center>
    </div>
  )

}

const mapStateToProps = state => ({
  local_variable: state

})



export default connect(mapStateToProps,{IncAction,DecAction})(App);