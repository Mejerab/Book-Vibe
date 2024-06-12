import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <div className="card lg:w-96 w-auto bg-base-100 flex shadow-xl border rounded-2xl">
            <Link to={`/book/${bookId}`}>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <ul className='flex flex-grow ml-7 pt-4 font-medium work-sans text-[#23BE0A]'>
                    <div className='grid grid-cols-3 text-center'>
                        {
                            tags.map((tag, index) => <li key={index} className='mr-2 rounded-full bg-base-200 px-4 py-2 mb-2'>{tag}</li>)
                        }
                    </div>
                </ul>
                <div className="card-body justify-end text-left">
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p className='text-[#131313CC] flex-grow font-medium work-sans'>By: {author}</p>
                    <div className="card-actions border-t-2 pt-5 border-dotted">
                        <p className='flex justify-between work-sans'><span>{category}</span><span>{rating}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object
}
export default Book;