import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchByName } from "../Store/Actions/loginAction";

class ProductInvetory extends Component {
    
    componentDidMount(){
        let logincred = localStorage.getItem("loginObj")
        if(!logincred){
            this.props.history.push("/")
        }
        this.props.searchByName(this.props.productsList)
    }

    searchByName = (e) => {
        let { productsList } = this.props
        if(e.target.value !== ""){
            const filteredList = productsList.filter(ele=>Object.values(ele).some(value=>value.includes(e.target.value)));
            this.props.searchByName(filteredList)
        }else{
            this.props.searchByName(this.props.productsList)
        }
    }

    searchByPrice = (e) => {
        let { productsList } = this.props
        if(e.target.value !== ""){
            const filteredList = productsList.filter(ele => ele.price === e.target.value)
            this.props.searchByName(filteredList)
        }else{
            this.props.searchByName(this.props.productsList)
        }
    }

    searchByQuantity = (e) => {
        let { productsList } = this.props
        if(e.target.value !== ""){
            const filteredList = productsList.filter(ele => ele.quantity === e.target.value)
            this.props.searchByName(filteredList)
        }else{
            this.props.searchByName(this.props.productsList)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="ProductListPage">
                <Navbar/>
                <div >
                    <div className="btn_filter" >
                        <Link to="/add_product"><button className="AddProductButton">Add Product</button></Link>
                        <div className="productInput">
                            <input type="text" className="AddProductInput" placeholder="Search By Name" onChange={this.searchByName}/>
                            <input type="text" className="AddProductInput" placeholder="Search By Price" onChange={this.searchByPrice}/>
                            <input type="text" className="AddProductInput" placeholder="Search By Quantity" onChange={this.searchByQuantity}/>
                        </div>
                    </div>
                    <div className="tableDiv">
                        <table className="tableScroll">
                            <thead>
                                <tr>
                                    <th className="table_th">Name</th>
                                    <th className="table_th_des">Description</th>
                                    <th className="table_th">Price</th>
                                    <th className="table_th">Quantity</th>
                                    <th className="table_th">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.filteredProductList?.length>0 && this.props.filteredProductList.map((ele, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="table_td">{ele.name}</td>
                                                <td className="table_td">{ele.description}</td>
                                                <td className="table_td">{ele.price}</td>
                                                <td className="table_td">{parseInt(ele.quantity)}</td>
                                                <td className="table_td"><Link to={{pathname: "add_product", state: { prod: ele, ind: index }}}>Edit</Link></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            searchByName
        },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.LoginReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInvetory);