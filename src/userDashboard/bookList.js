import React from 'react';
import { withRouter } from 'react-router-dom';
import { GetBooks} from '../services/book';
class BookList extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            cost: '',
            currencyIn: '',
            description: '',
            imageUrl: '',

            books: [],
            userDetails: JSON.parse(localStorage.getItem('user'))
        }
    }
    componentDidMount() {
        GetBooks().then(
            (response) => {
                if (response && response.data === 200 && response.data.length) {
                    console.log(response.data.length)
                }
                this.setState({
                    books: response.data
                });
            })
    }

    render() {
        const listOfBooks = this.state.books.map((value, index) => {


            return (
                <div className="card col-md-3 mr-5 mb-5" key={`card-${index}`}>
                    <div className="card-body">

                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.author.join(', ')}</p>

                        <button type="button" className="btn btn-primary" onClick={() => this.addToCart(value)}>Add to Cart</button>

                    </div>

                </div>
            )
        });
        return (
            <div className="container mt-5">
                <header>
                    <nav className="navbar navbar-nav  navbar-right bg-dark float-right mt-15  " role="navigation">
                        <div className="text-right">
                            <a href="/" onClick={this.logout}>LOGOUT</a>
                        </div>
                    </nav>
                </header>
                <div className="row">
                    {listOfBooks}
                </div>

            </div>
        )
    }
}
export default withRouter(BookList);