import Book from "../Book/Book";
import PropTypes from 'prop-types';
const Books = ({ books }) => {
    console.log(books);
    return (
        <div className="mt-16">
            <h3 className="text-3xl font-bold text-black text-center my-4">Books</h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 mt-8">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};
Books.propTypes = {
    books: PropTypes.array
}
export default Books;