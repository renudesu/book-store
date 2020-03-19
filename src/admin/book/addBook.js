import React from 'react';
import { CreateBooks} from '../../services/book';
import { withRouter } from 'react-router-dom';

class AddBook extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            cost: '',
            currencyIn: '',
            description: '',
            imageUrl: '',
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addbook = () => {
        const book = {
            name: this.state.name,
            author: [this.state.author],
            cost: this.state.cost,
            currencyIn: this.state.currencyIn,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        };
        CreateBooks(book).then(
            (response) => {
                console.log(response);
            })

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
                            <h3 className='text-primary mb-5'>Add Book</h3>
                            <div className='form-row '>
                                <div className="form-group col-md-10 ">
                                    <label htmlFor='username'>BookName</label>
                                    <input type='text' className='form-control' name='name' id='name' onChange={this.onChangeText} />
                                    <label htmlFor='username'>Author</label>
                                    <input type='text' className='form-control' name='author' id='author' onChange={this.onChangeText} />
                                    <label htmlFor='username'>cost</label>
                                    <input type='text' className='form-control' name='cost' id='cost' onChange={this.onChangeText} />
                                    <label htmlFor='username'>currencyIn</label>
                                    <input type='text' className='form-control' name='currencyIn' id='currencyIn' onChange={this.onChangeText} />
                                    <label htmlFor='username'>Description</label>
                                    <input type='text' className='form-control' name='description' id='description' onChange={this.onChangeText} />
                                    <label htmlFor='username'>Image Url</label>
                                    <input type='text' className='form-control' name='imageUrl' id='imageUrl' onChange={this.onChangeText} />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.addbook}>Addbook</button>
                            {/* <button type="button" className="btn btn-link"> <Link to="/signup">Register</Link></button> */}
                        </form>

                    </div>
                </div>
            </div>
        );
    }
} export default withRouter(AddBook);