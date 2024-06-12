import PropTypes from 'prop-types';
import { CiTimer } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
const ReadBook = ({ readItem }) => {
    const navigate = useNavigate();
    const { bookId, bookName, author, image, tags, category, rating, publisher, yearOfPublishing, totalPages } = readItem;
    const goToDetails = () =>{
        navigate(`/book/${bookId}`)
    }
    return (
        <div className='border p-6 flex lg:flex-row flex-col items-center mb-5 rounded-lg'>
            <div className="p-6 bg-base-200 rounded-lg mr-7">
                <img className="w-40" src={image} alt="" />
            </div>
            <div className='w-full' >
                <h3 className="playfair-dis font-bold text-2xl">{bookName}</h3>
                <p className="text-[#131313B3] font-medium py-3">By: {author}</p>
                <p className="text-[#131313B3]"></p>
                <div className='flex pb-3'>
                    <p className='flex mt-1 mr-7'>
                        <span className='mr-2 font-bold'>Tags: </span>
                        <ul className="flex -mt-2 items-center">
                            {
                                tags.map((tag, idx) => <li key={idx} className='py-2 font-medium px-4 bg-base-200 rounded-full text-[#23BE0A] mr-3'>#{tag}</li>)
                            }
                        </ul>
                    </p>
                    <p className='text-[#131313B3] font-medium mt-1'><CiTimer className='text-[#424242] text-lg inline -mt-1 mr-1' />Year of publishing: {yearOfPublishing}</p>
                </div>
                <p className='text-[#13131399] font-medium pb-3 border-b'>
                    <span className='mr-3'><GoPeople className='text-lg inline -mt-1 mr-1' />Publisher: {publisher}</span>
                    <span className='ml-3'><GrDocumentText className='text-lg inline -mt-1 mr-1' />Pages: {totalPages}</span>
                </p>
                <div className='mt-6 flex'>
                    <ul>
                        <li className='mr-2 bg-[#328EFF26] py-3 px-5 rounded-full inline text-[#328EFF]'>Category: {category}</li>
                        <li className='bg-[#FFAC3326] text-[#FFAC33] py-3 px-5 rounded-full inline'>Rating: {rating}</li>
                    </ul>
                    <button onClick={goToDetails} className='btn -mt-3 py-2 ml-2 bg-[#23BE0A] text-white rounded-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};
ReadBook.propTypes = {
    readItem: PropTypes.object
}
export default ReadBook;