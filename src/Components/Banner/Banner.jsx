import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const goToList = () =>{
        navigate('/listedbooks')
    }
    return (
        <div className="mt-6 bg-base-200 p-12 flex justify-between items-center rounded-2xl ml-4 mr-2">
        <div className="lg:ml-10">
            <h2 className="text-6xl pb-10 font-semibold text-black">Books to freshen up <br /> your bookshelf</h2>
            <button onClick={goToList} className="btn work-sans px-5 text-white bg-[#23BE0A]">View your list</button>
        </div>
        <div className="lg:mr-10 lg:w-auto w-96">
            <img src="/images/pngwing 1.png" alt="" />
        </div>
    </div>
    );
};

export default Banner;