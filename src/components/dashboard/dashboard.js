import React from 'react';
// import { withRouter } from 'react-router-dom';
import { getBooks } from '../../services/books';
import { addToCart, getCart, updateCart } from '../../services/cart';

export default class Dashboard extends React.Component {
    debugger
    constructor() {
        super();
        this.state = {
            books: [],
            cartDetails: {},
            userDetails: JSON.parse(localStorage.getItem('user'))
        }
    }
    debugger
    componentDidMount() {
        getBooks().then(
            (response) => {
                if (response.status === 200 && Array.isArray(response.data)) {
                    this.setState({
                        books: response.data
                    });
                }
            }
        )
        this.callCartMethod();
    }
debugger
    callCartMethod = () => {
        getCart(this.state.userDetails._id).then(
            (response) => {
                console.log(response);
                if (response.data !== "") {
                    this.setState({
                        cartDetails: response.data
                    });
                }
            }
        )
    }

    addToCart = (value) => {
        debugger
        if (this.state.cartDetails.userId) {
            let isBookAvailable = false;
            const cartDetails = Object.assign({}, this.state.cartDetails);
            for (var i = 0; i < cartDetails.orders.length; i++) {
                if (cartDetails.orders[i].itemId === value._id) {
                    cartDetails.orders[i].quantity++;
                    isBookAvailable = true;
                    break;
                }
            }
            if (isBookAvailable === false) {
                cartDetails.orders.push({
                    "name": value.name,
                    "itemId": value._id,
                    "quantity": 1,
                    "cost": value.cost,
                    "currencyIn": value.currencyIn
                });
            }
            updateCart(this.state.userDetails._id, cartDetails).then(
                (response) => {
                    if (response.data.userId) {
                        setTimeout(() => {
                            this.callCartMethod();
                        });
                    }
                }
            );
        } else {
            var obj = {
                userId: this.state.userDetails._id,
                orders: [
                    {
                        "name": value.name,
                        "itemId": value._id,
                        "quantity": 1,
                        "cost": value.cost,
                        "currencyIn": value.currencyIn
                    }
                ]
            }
            debugger
            addToCart(obj).then(
                (res) => {
                    if (res.data.userId) {
                        // setTimeout(() => {
                        this.callCartMethod();
                        // });
                    }
                }
            )
        }
    }

    render() {
        const rows = this.state.books.map((value, index) => {
            return (
                <div className="card col-md-3 mr-5 mb-5" key={`card-${index}`}>
                    <div className="card-body">
                        <img src={require('../../assets/images/react.png')} className="card-img-top" alt="..." />
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.author.join(', ')}</p>

                        <button type="button" className="btn btn-primary" onClick={() => this.addToCart(value)}>Add to cart</button>
                    </div>
                </div>
            )
        });

        // console.log(rows);
        return (

            <div className="container mt-5">


                <header>
                    
                    <nav className="navbar navbar-nav  navbar-right bg-dark float-right mt-15  " role="navigation">
                        {/* <div className="pull-right">
                            <ul class="nav navbar-nav">
                                <li><button type="submit" class="btn navbar-btn btn-danger" name="logout" id="logout" value="Log Out">Log Out</button></li>
                            </ul>
                        </div> */}
                      
                        <div className="text-right">
                            <a href="/" onClick={this.logout}>LOGOUT</a>
                        </div>
                    </nav>
                    {/* <span>cart:{this.state.count}</span> */}

                </header>
                <div className="row">
                    {rows}
                </div>
            </div>
        );
    }

}