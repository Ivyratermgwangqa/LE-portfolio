import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Lerato Mgwangqa. All rights reserved.</p>
                <p>
                    <a href="https://github.com/Ivyratermgwangqa" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://linkedin.com/in/lerato-mgwangqa-941344238" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;