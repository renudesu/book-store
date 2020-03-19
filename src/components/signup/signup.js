import React from 'react';
import {register} from '../../services/register';
import { withRouter } from "react-router-dom";
 class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phoneNumber: 0,
            address: ''
        }
    }
    onChangeText = (event) => {
      
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    signup=()=>{
 
        register(this.state).then(
            (response)=>{
                console.log(response);
            }
        )
        this.props.history.push('/');
    }

    render() {
        return (
            <div className=' container row mt-5'>
                <a className="navbar-brand float-left" href="/">
                    <img className="bookstore-logo img-thumbnail rounded flaot-left" src={require('../../assets/images/resized.jpg')} alt="bookimage" />

                </a>

                <div className='col-md-2'></div>
                <div className='col-md-6 '>
                    <form>
                        <h3 className='text-primary mb-5'> Sign Up</h3>
                        <div className='form-row '>
                            <div className="form-group col-md-6 ">
                                <label htmlFor="firstName">FirstName</label>
                                <input type="text" className="form-control" name='firstName' id="firstName" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">LastName</label>
                                <input type="text" className="form-control" name='lastName' id="lastName" onChange={this.onChangeText} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" name="username" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={this.onChangeText} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone number" onChange={this.onChangeText} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" name='address' placeholder="Apartment, studio, or floor" onChange={this.onChangeText} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.signup}>Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}export default withRouter(Signup);