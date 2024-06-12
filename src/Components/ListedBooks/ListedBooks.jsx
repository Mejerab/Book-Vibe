import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../Utilities/StoredReadBooks";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReadBook from "../ReadBook/ReadBook";
import WishItems from "../WishItems/WishItems";
import { getWishData } from "../../Utilities/storedWishlistBooks";

const ListedBooks = () => {
    const [readItems, setReadItems] = useState([]);
    const [nothing, setNothing] = useState([]);
    const [wishItems, setWishItems] = useState([]);
    const [wishSortItems, setWishSortItems] = useState([]);
    const allBookDatas = useLoaderData();
    useEffect(() => {
        const readBookDatas = getStoredData();
        if (allBookDatas.length > 0) {
            const readBooks = [];
            for (const id of readBookDatas) {
                const readBook = allBookDatas.find(book => book.bookId === id);
                if (readBook) {
                    readBooks.push(readBook);
                }
            }
            setReadItems(readBooks);
            setNothing(readBooks);
        }
    }, [allBookDatas]);
    const sortingItems = (filter) => {
        const filting = [...readItems];
        const wishing = [...wishItems]
        if (filter === 'rating') {
            const rating = filting.sort((item1, item2)=> item2.rating - item1.rating);
            setNothing(rating);
            const wishRating = wishing.sort((item1, item2)=> item2.rating - item1.rating)
            setWishSortItems(wishRating);
        }
        else if (filter === 'pages') {
            const pages = filting.sort((item1, item2) => item2.totalPages - item1.totalPages);
            setNothing(pages);
            const wishPages = wishing.sort((item1, item2)=> item2.totalPages - item1.totalPages)
            setWishSortItems(wishPages);
        }
        else if (filter === 'year') {
            const years = filting.sort((item1, item2) => item1.yearOfPublishing - item2.yearOfPublishing);
            setNothing(years);
            const wishYears = wishing.sort((item1, item2)=> item2.yearOfPublishing - item1.yearOfPublishing);
            setWishSortItems(wishYears);
        }
    }
    useEffect(() => {
        const wishBookDatas = getWishData();
        if (allBookDatas.length > 0) {
            const wishBooks = [];
            for (const id of wishBookDatas) {
                const wishBook = allBookDatas.find(book => book.bookId === id);
                if (wishBook) {
                    wishBooks.push(wishBook);
                }
            }
            setWishItems(wishBooks);
            setWishSortItems(wishBooks);
        }
    }, [allBookDatas]);
    return (
        <div className="mt-5">
            <h2 className="work-sans text-center font-bold py-6 mr-2 ml-4 rounded-lg bg-base-200 text-2xl">Books</h2>

            <div className="text-center mt-7">
                <details className="dropdown work-sans">
                    <summary className="m-1 btn text-white bg-[#23BE0A] text-base px-7">
                        Sort By <IoIosArrowDown className="text-white text-lg" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-base font-medium">
                        <li onClick={() => sortingItems('rating')}><a>Rating</a></li>
                        <li onClick={() => sortingItems('pages')}><a>Number of pages</a></li>
                        <li onClick={() => sortingItems('year')}><a>Published year</a></li>
                    </ul>
                </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted work-sans mt-12">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        nothing.map(readItem => <ReadBook
                            key={readItem.bookId}
                            readItem={readItem}></ReadBook>)
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishSortItems.map(wishItem => <WishItems
                            key={wishItem.bookId}
                            wishItem={wishItem}></WishItems>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;