import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">Lerato&apos;s Portfolio</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;