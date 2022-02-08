import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
// console.log("redux", state);
  return{
      count : state.count,
      data : state.data
  }
};
function Getdata(props) {

  return ( 
    <div>
    count {props.count}
      <h1>Getdata</h1>
      <button onClick={() => props.dispatch({
          type: 'add',

      })}>Click </button>


      <button onClick={() => props.dispatch({
        type: 'remove',
        
    })}>Click </button>


    <hr />

    {
        props.data.map((d) => (
            <li key={Math.random()}>
            
            <h5>{d.title}</h5>
            <h5>{d.body}</h5>
            </li>
        ))
    }
    </div>
  );
}

export default connect(mapStateToProps)(Getdata);
