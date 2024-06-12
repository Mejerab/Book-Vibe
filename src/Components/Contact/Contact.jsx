import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
const Contact = () => {
    return (
        <div className="mt-4 work-sans">
            <h2 className="text-center font-bold p-7 bg-base-200 rounded-xl text-2xl ml-5 mr-2">contact us</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-6 mt-4 gap-x-6 ml-5 mr-2">
                <div id="location" className="border rounded-2xl bg-base-200 text-center">
                    <FaLocationDot className="text-[#757575] text-6xl border my-3 rounded-full bg-white mx-auto p-3" />
                    <h4 className="text-black text-xl font-semibold">Location</h4>
                    <p className="font-medium">Road No 113/A, Gulshan 2, <br /> Dhaka, Bangladesh</p>
                </div>
                <div id="location" className="border rounded-2xl bg-base-200 text-center">
                    <FaPhoneAlt className="text-[#757575] text-6xl border my-3 rounded-full bg-white mx-auto p-3" />
                    <h4 className="text-black text-xl font-semibold">Contact</h4>
                    <p className="font-medium">+88(0) 555-0108 <br />
                    +88(0) 555-01117</p>
                </div>
                <div id="location" className="border rounded-2xl bg-base-200 text-center">
                    <MdEmail className="text-[#757575] text-6xl border my-3 rounded-full bg-white mx-auto p-3" />
                    <h4 className="text-black text-xl font-semibold">Email</h4>
                    <p className="font-medium">bookvibe1992@gmail.com</p>
                </div>
                <div id="location" className="border rounded-2xl bg-base-200 text-center">
                    <p><HiMiniBuildingOffice2 className="text-[#757575] text-6xl border my-3 rounded-full bg-white mx-auto p-3" /></p>
                    <h4 className="text-black text-xl font-semibold">Location</h4>
                    <p className="font-medium pb-2">Mon - Sat : 8.00-5.00 <br />
                    Sunday : Closed</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;