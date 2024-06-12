const getStoredData = () =>{
    const getStoredData = localStorage.getItem('read-books');
    if (getStoredData) {
        return JSON.parse(getStoredData);
    }
    else{
        return [];
    }
}
const storedData = (id) =>{
    const storedCart = getStoredData();
    const exist = storedCart.find(jobId=> jobId === id);
    if (!exist) {
        storedCart.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedCart))
    }
}

export {storedData, getStoredData};