import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from '../Components/navbar'

import { handleChange, addProduct, clearFields, editProduct, ProductToEdit } from "../Store/Actions/loginAction";

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:"",
        }
    }

    componentDidMount() {
        let logincred = localStorage.getItem("loginObj")
        if(!logincred){
            this.props.history.push("/")
        }
        const prod = this.props.location.state?.prod
        if (prod) {
            const { name, description, price, quantity } = prod
            const { ind } = this.props.location.state
            const product = {
                name: name,
                description: description,
                price: price,
                quantity: quantity
            }
            let replceObj = this.props.productsList[ind]
            // let editedProduct = this.props
            this.props.editProduct(replceObj)
        }else{
            this.props.clearFields()
        }
    }

    addProduct = async (e) => {
        e.preventDefault()
        let { name, description, price, quantity } = this.props
        const ind = this.props.location.state?.ind
        if(name!==""&&price!==""&&quantity!==""){
            if(ind || ind === 0){
                let editproduct = {
                    name: name,
                    description: description,
                    price: price,
                    quantity: quantity
                }
                let newProduct = [...this.props.productsList]
                newProduct[ind] = editproduct
                await this.props.ProductToEdit(newProduct)
                await this.props.clearFields()
                this.props.history.push("/product_inventory")
            }else{
                let product = {
                    name: name,
                    description: description,
                    price: price,
                    quantity: quantity
                }
                await this.props.addProduct(product)
                await this.props.clearFields()
                this.props.history.push("/product_inventory")
            }
        }
        else{
            this.setState({
                error:"All Fields are required !"
            })
            setTimeout(()=>{
                this.setState({
                    error:""
                })
            },3000)
        }
    }

    render() {
        const { name, description, price, quantity } = this.props
        return (
            <React.Fragment>
                <Navbar/>
                <div className="login_div">
                    <form className="form_box">
                        <div>
                            <label className="login" htmlFor="name">Name*:</label>
                            <input className="input_fields" autoComplete="off" type="text" id="name" name="name" value={name} onChange={this.props.handleChange} />
                        </div>

                        <div>
                            <label className="login" htmlFor="description">Description:</label>
                            <input className="input_fields" autoComplete="off" type="text" id="description" name="description" value={description} onChange={this.props.handleChange} />
                        </div>

                        <div>
                            <label className="login" htmlFor="price">Price*:</label>
                            <input className="input_fields" autoComplete="off" type="number" id="price" name="price" value={price} onChange={this.props.handleChange} />
                        </div>

                        <div>
                            <label className="login" htmlFor="quantity">Quantity*:</label>
                            <input className="input_fields" autoComplete="off" type="number" id="quantity" name="quantity" value={quantity} onChange={this.props.handleChange} />
                        </div>
                        {/* 
                        <div>
                            <label for="image">Image:</label><br />
                            <input type="file" id="image" name="image" onChange={this.props.handleChange}/><br /> 
                        </div>*/}
                        <span style={{fontSize:"10px",color:"red",marginLeft:"1rem"}}>{this.state.error}</span>
                        <div>
                            <button className="btn_submit" onClick={this.addProduct}>Add Product</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            handleChange,
            addProduct,
            clearFields,
            editProduct,
            ProductToEdit
        },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.LoginReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);