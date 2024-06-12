const getWishData = () => {
    const getStoredWishData = localStorage.getItem('wishlist-books');
    if (getStoredWishData) {
        return JSON.parse(getStoredWishData);
    }
    else {
        return [];
    }
}
const storedWishData = (id) => {
    const wishCart = getWishData();
    const exist = wishCart.find(wishId => wishId === id);
    if (!exist) {
        wishCart.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(wishCart))
    }
}
export { storedWishData, getWishData };