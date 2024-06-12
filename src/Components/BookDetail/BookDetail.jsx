import { useLoaderData, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredData, storedData } from "../../Utilities/StoredReadBooks";
import { storedWishData } from "../../Utilities/storedWishlistBooks";

const BookDetail = () => {
    const books = useLoaderData();
    const { bookid } = useParams();
    const idInt = parseInt(bookid);
    const aBook = books.find(book => book.bookId == idInt);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = aBook;
    let readCount = 0;
    const bookReaded = () => {
        readCount++;
        const localData = getStoredData();
        const data = localData.find(data => data === bookId);
        if (!data) {
            toast.success(' You added this successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            })
        }
        else {
            toast.error(' You already added this!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
            }
        storedData(bookId);
    }
    let wishCount = 0;
    const wishList = () => {
        wishCount++;
        storedWishData(bookId)
        if (readCount === 0 && wishCount === 1) {
            toast.success(' added to wishlist successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
        }
        else if (readCount === 1) {
            toast.error('You already read this book!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error('You already added this book!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    return (
        <div className="flex mt-5 ">
            <div className="bg-base-200 p-10 rounded-2xl mr-2 ml-5 w-2/4">
                <img className="w-80 mx-auto" src={image} alt="" />
            </div>
            <div className="ml-4 w-2/4">
                <h2 className="text-4xl text-black font-bold">{bookName}</h2>
                <div className="work-sans">
                    <p className="border-b py-3 text-[#131313CC] font-semibold">By: {author}</p>
                    <p className="text-[#131313CC] font-semibold border-b py-3">{category}</p>
                    <p className="my-3">
                        <h5 className="inline font-bold text-black mr-2">Review:</h5>{review}
                    </p>
                    <p className="flex  my-6"><span className="font-bold text-black pr-3">Tags:</span>
                        <ul className="flex -mt-2">
                            {
                                tags.map((tag, idx) => <li key={idx} className="mr-3 py-2 px-3 bg-base-200 rounded-full text-[#23BE0A]">#{tag}</li>)
                            }
                        </ul>
                    </p>
                    <div className="text-[#131313B3] font-medium grid grid-cols-3">
                        <div className="flex flex-col">
                            <span className="mb-3">Number of Pages:</span>
                            <span className="mb-3">Publisher:</span>
                            <span className="mb-3">Year of Publishing:</span>
                            <span className="mb-3">Rating:</span>
                        </div>
                        <div className="flex flex-col text-black col-span-2">
                            <span className="mb-3">{totalPages}</span>
                            <span className="mb-3">{publisher}</span>
                            <span className="mb-3">{yearOfPublishing}</span>
                            <span className="mb-3">{rating}</span>
                        </div>
                    </div>
                </div>
                <div className="work-sans mt-5">
                    <button onClick={() => bookReaded(bookId)} className="btn px-6 mr-4 text-base btn-outline">Read</button>
                    <button onClick={wishList} className="btn px-6 text-base bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />
            <ToastContainer />
        </div>
    );
};

export default BookDetail;

//
