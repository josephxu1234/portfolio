import React from 'react';

function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-purple-700 bg-opacity-10 text-gray-100">

            <nav>
                <ul className="flex justify-end py-2">
                    <li className="mr-auto ml-4">
                        <a href="">
                            <h1 className="font-bold text-xl"> Jx. </h1>
                        </a>
                    </li>
                    <li className="ml-4 md:ml-12">
                        <a href="">
                            Projects
                        </a>
                    </li>
                    <li className="ml-4 md:ml-12">
                        <a href="">
                            Resume
                        </a>
                    </li>
                    <li className="ml-4 mr-4 md:ml-12">
                        <a href="">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;