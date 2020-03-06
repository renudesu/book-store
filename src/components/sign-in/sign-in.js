import React from 'react';
import { login } from '../../services/authentication';
import { Link, withRouter } from "react-router-dom";

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: '',
                password: '',

            }
        };
    }
    onChangeText = (event) => {
        this.setState(
            {
                user: {
                    ...this.state.user,
                    [event.target.name]: event.target.value
                }
            }
        );
    }
    signin = () => {
        login(this.state.user)
            .then((res) => {
                // console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.details))
                this.props.history.push('/dashboard');
            });

    }

    render() {
        return (
            <div className="container mt-5">

                <a className="navbar-brand float-left" href="/">
                    <img className="bookstore-logo img-thumbnail rounded flaot-left" src={require('../../assets/images/resized.jpg')} alt="bookimage" />

                </a>

                <div className='row mt-5 '>
                    <div className='col-md-8 '></div>
                    

                    <div className='col-md-4 float-right'>
                        <form >
                            <h3 className='text-primary mb-5'>Sign In</h3>
                            <div className='form-row '>
                                <div className="form-group col-md-10 ">
                                    <label htmlFor='username'>Username</label>
                                    <input type='text' className='form-control' name='username' id='username' onChange={this.onChangeText} />
                                    <label htmlFor='username'>password</label>
                                    <input type='password' className='form-control' name='password' id='password' onChange={this.onChangeText} />

                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.signin}>Sign In</button>
                            <button type="button" className="btn btn-link"> <Link to="/signup">Register</Link></button>
                        </form>
                       
                    </div>
                </div>
            </div>



        );
    }
}


export default withRouter(Signin);