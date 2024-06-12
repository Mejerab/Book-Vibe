import { useNavigate, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const goBack = () =>{
        navigate('/');
    }
    console.error(error);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="mb-3 text-xl">Oops!!!</h2>
            <h4 className="text-2xl font-semibold mb-3"><i className="mr-2">{error.status}</i>{error.statusText || error.message}</h4>
            <button onClick={goBack} className="btn">Go back</button>
        </div>
    );
};

export default Errorpage;