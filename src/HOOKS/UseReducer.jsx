import React from 'react'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
function UseReducer(props) {
  const { dispatchIncrease, dispatchDecrease } = props;
  return (
    <div>
      <Navbar/>

      <button onClick={dispatchIncrease} className='btn btn-info'>inecrease</button>
      <button onClick={dispatchDecrease} className='btn btn-danger'>Decrease</button>
      <div className='container' style={{backgroundColor:"black" ,width:'50%', height:"30rem"}}>
      <h1 style={{color:"white"}}>{props.count}</h1>
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  console.log(state)
return{
    count:state.count
}

}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchIncrease: () => dispatch(increase()),
    dispatchDecrease: () => dispatch(decrease()),
  };
};


export default connect(mapStateToProps)(UseReducer)
