import { Link } from "react-router-dom";
import LogoText from "../../Components/sharedComponents/LogoText";


const Footer = () => {
    return (
        <div>
            
<footer className="bg-white mt-auto rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0">
                <LogoText/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PRINTMAMA</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' className="hover:underline">PrintMAMA™</Link>. All Rights Reserved.</span>
    </div>
</footer>


        </div>
    );
};

export default Footer;