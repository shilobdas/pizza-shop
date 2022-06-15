import React, { useState , useEffect} from 'react' 
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPizzas } from "../actions/pizzaActions"
import Error from "../components/Error"
import Filter from "../components/Filter"
import Loading from "../components/Loading"

export default function Pizzalist() {
    const dispatch = useDispatch()

    const pizzasstate = useSelector(state=>state.getAllPizzasReducer)

    const {pizzas , error, loading} = pizzasstate
    useEffect(() => {
    dispatch(getAllPizzas())
  }, []);
  return (
    <div>
        <h2>Pizza List</h2>
        {loading && (<Loading></Loading>)}
        {error && (<Error error="something went wrong"></Error>)}

        <table className='table table-bordered'>
            <thead className='thead table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {pizzas && pizzas.map(pizza=>{
                return <tr>
                    <td>{pizza.name}</td>
                    <td>
                        Small : {pizza.prices[0]['small']}<br></br>
                        Medium : {pizza.prices[0]['medium']}<br></br>
                        Large : {pizza.prices[0]['large']}<br></br>
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                        <i className='fa fa-trash m-3'></i>
                        <Link to= {'/admin/editpizza/${pizza._id}'}>
                            <i className='fa fa-edit m-3'></i></Link>
                    </td>
                </tr>
            })} 
            </tbody>
        </table>
    </div>
  )
}
