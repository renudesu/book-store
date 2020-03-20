import React from 'react';
import { GetBooks, UpdateBook, DeleteBook } from '../../services/book';

export default class AdminDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            isBookAvailable: false,
            selectedBook: {}
        }
    }
    componentDidMount() {
        this.getBooks();
    }
    getBooks = () => {
        GetBooks().then((response) => {
            console.log(response.data)
            if (response && response.data && response.data.length) {
                this.setState({
                    books: response.data
                })
            }
        });
    }
    selectBook = (book) => {
        this.setState({ isBookAvailable: true, selectedBook: book });
    }
    backBook = () => {
        this.setState({ isBookAvailable: false, selectedBook: {} });
    }
    onChangeText = (event) => {
        this.setState({
            selectedBook: {
                ...this.state.selectedBook,
                [event.target.name]: event.target.value
            }
        })
    }
    editBook = () => {
        UpdateBook(this.state.selectedBook).then((success) => {
            this.backBook();
            this.getBooks();
        })
    }
    removeBook = () => {
        DeleteBook(this.state.selectedBook._id).then((success) => {
            this.backBook();
            this.getBooks();
        })
    }
    render() {
        const adminBookList = this.state.books.map((value, index) => {
            return (
                <li class="list-group-item" key={`booklist-${index}`} onClick={() => this.selectBook(value)}>{value.name}</li>

            )
        });

        return (
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <ul class="list-group">
                            {adminBookList}
                        </ul>
                    </div>
                    <div className='col-md-4 '></div>
                    {this.state.isBookAvailable ? <div className='col-md-4'>
                        <form >
                            <div className="form-row">
                                <div className="form-group 6">
                                    <h3 className='text-primary '>Add Book</h3>
                                    <label htmlFor='username'>BookName</label>
                                    <input type='text' className='form-control' name='name' id='name' onChange={this.onChangeText} value={this.state.selectedBook.name} />
                                    <label htmlFor='username'>Author</label>
                                    <input type='text' className='form-control' name='author' id='author' onChange={this.onChangeText} value={this.state.selectedBook.author} />
                                    <label htmlFor='username'>cost</label>
                                    <input type='text' className='form-control' name='cost' id='cost' onChange={this.onChangeText} value={this.state.selectedBook.cost} />
                                    <label htmlFor='username'>currencyIn</label>
                                    <input type='text' className='form-control' name='currencyIn' id='currencyIn' onChange={this.onChangeText} value={this.state.selectedBook.currencyIn} />
                                    <label htmlFor='username'>Description</label>
                                    <input type='text' className='form-control' name='description' id='description' onChange={this.onChangeText} value={this.state.selectedBook.description} />
                                    <label htmlFor='username'>Image Url</label>
                                    <input type='text' className='form-control' name='imageUrl' id='imageUrl' onChange={this.onChangeText} value={this.state.selectedBook.imageUrl} />
                                </div>
                            </div>

                        </form>
                        <button type="button" className="btn btn-primary mr-2" onClick={this.editBook}>Edit</button>
                        <button type="button" className="btn btn-danger mr-2" onClick={this.removeBook}>Delete</button>
                        <button type="button" className="btn btn-primary mr-2" onClick={this.backBook}>Back</button>
                    </div> : null}
                </div>

            </div>



        );
    }

}