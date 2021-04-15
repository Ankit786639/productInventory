import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleChange } from "../Store/Actions/loginAction";
import LoginReducer from '../Store/Reducers/loginReducer';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:"",
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let { name, email } = this.props
        if(name!=="" && email!==""){
            if(email.includes("@gmail.com")){
                let obj = {
                    name: name,
                    email: email
                }
                localStorage.setItem("loginObj", JSON.stringify(obj))
                this.props.history.push("/product_inventory")
            }
            else{
                this.setState({
                    error:"Incorrect Email !"
                })
                setTimeout(()=>{
                    this.setState({
                        error:""
                    })
                },3000)
            }
        }
        else{
            this.setState({
                error:"All Fields are Required !"
            })
            setTimeout(()=>{
                this.setState({
                    error:""
                })
            },3000)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="login_div">
                    <div className="form_box">
                        <div>
                            <h1 className="login" style={{textAlign:"center"}}>Login</h1>
                        </div>
                        <div>
                            <div>
                                <input className="input_fields" autoComplete="off" type="text" placeholder="Name*" name="name" onChange={this.props.handleChange}/>
                            </div>
                            <div>
                                <input className="input_fields" autoComplete="off" type="text" placeholder="Email*" name="email" onChange={this.props.handleChange} />
                            </div>
                            <span style={{fontSize:"10px",color:"red",marginLeft:"1rem"}}>{this.state.error}</span>
                            <div style={{float:"right",marginRight:"1rem"}}>
                                <button className="btn_submit" onClick={this.handleSubmit}>Login</button>
                            </div>
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
            handleChange
        },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.LoginReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);