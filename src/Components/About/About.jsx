import { FaRegUserCircle } from "react-icons/fa";
const About = () => {
    const post = () => {
        const inputText = document.getElementById('input');
        const inputValue = inputText.value;
        const commentContainer = document.getElementById('comment-container');
        const div = document.createElement('div');
        div.classList = `flex work-sans ml-4 my-4 justify-end mr-3`;
        div.innerHTML = `
        <p class="ml-1 p-3 bg-base-300 rounded-full">${inputValue}</p>
        `
        if (inputValue) {
            commentContainer.appendChild(div);
        }
        inputText.value = '';
    }
    return (
        <div className="mt-5">
            <h2 className="text-center bg-base-200 text-2xl py-7 work-sans font-bold ml-5 mr-2 rounded-xl">About Us</h2>
            <div id="something-gorgious" className="ml-5 mr-2 work-sans font-medium mt-7">
                <h3 className="font-semibold underline">Welcome to Book Vibe:</h3>
                <p className="mb-3 mt-1">At <b>Book Vibe</b>, we believe in the magic of books. Founded in <b>1992</b>, our mission is to bring the joy of reading to everyone, one book at a time.</p>

                <h3 className="font-semibold underline">Our Mission:</h3>
                <p className="mb-3">Our mission is simple: to foster a love of reading in our community by offering a diverse selection of books and personalized service.</p>

                <h3 className="font-semibold underline">Our Story:</h3>
                <p className="mb-3"><b>Book Vibe</b> was born out of a passion for literature. Our founder, <b>Gengis Khan</b>, started this journey because his <b>thoughts</b>. Since then, we have grown into a beloved local bookstore with a global reach.</p>

                <h3 className="font-semibold underline">What Makes Us Unique:</h3>
                <p className="mb-3"> At <b>Book Vibe</b>, we pride ourselves on offering <b>Various types of books</b>, whether it is rare first editions, a wide selection of genres, or our cozy reading nook where you can relax with a cup of coffee and a good book.</p>

                <h3 className="font-semibold underline">Our Community</h3>
                <p>We believe in giving back to our community. That is why we alyaws try to offer the best prints. We host regular events such as book signings, reading clubs, and literary workshops to foster a vibrant community of book lovers.</p>
            </div>
            <div id="comment-container" className="ml-5 mr-2 border rounded-xl mt-7">
                <div className="flex work-sans ml-4 my-4">
                    <FaRegUserCircle className="text-2xl mt-3 text-[#767676]" />
                    <p className="ml-1 p-3 bg-base-300 rounded-full">Thanks for your such support</p>
                </div>
                <div className="flex work-sans ml-4 my-4">
                    <FaRegUserCircle className="text-2xl mt-5 text-[#767676]" />
                    <p className="ml-1 p-3 bg-base-300 rounded-full">I found the rare book I had been searching for at Book Vibe. <br /> The staff was incredibly helpful and knowledgeable</p>
                </div>
            </div>
            <div className="text-right mr-4 mt-4 work-sans relative">
                <input id="input" type="text" placeholder="Type your comment" className="input  rounded-full input-bordered w-full py-[30px] max-w-sm" />
                <button onClick={post} className="btn btn-accent rounded-full absolute top-1.5 right-3">Send</button>
            </div>
        </div>
    );
};

export default About;