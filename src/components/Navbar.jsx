import React from 'react';
import Resume from '../assets/resume.pdf';
import {Link} from 'react-router-dom';
// projects, contact
import { AiOutlineFundProjectionScreen, AiOutlinePhone} from "react-icons/ai";

// resume
import { CgFileDocument } from "react-icons/cg";

function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-purple-700 bg-opacity-10 text-gray-100 md:text-xl">

            <nav>
                <ul className="flex justify-end py-4">
                    <li className="mr-auto ml-4">
                        <Link to="/">
                            <h1 className="font-bold md:text-3xl"> JX </h1>
                        </Link>
                    </li>
                    <li className="ml-4 md:ml-12">
                        <a href="https://github.com/josephxu1234" className="inline-flex items-center gap-x-1">
                        <AiOutlineFundProjectionScreen/>
                        Projects
                        </a>
                    </li>
                    <li className="ml-4 md:ml-12">
                        <a href={Resume} target="_blank" className="inline-flex items-center gap-x-1">
                            <CgFileDocument/>
                            Resume
                        </a>
                    </li>
                    <li className="ml-4 mr-4 md:ml-12">
                        <a href="mailto:josephxu1234@gmail.com" className="inline-flex items-center gap-x-1">
                            <AiOutlinePhone/>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;