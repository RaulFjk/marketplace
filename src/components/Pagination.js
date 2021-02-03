import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
	        <ul className="flex w-full justify-center list-none rounded my-2">
                {pageNumbers.map(number => (
                    <li key={number} className="relative block px-1 py-2 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                        <a onClick={() => paginate(number)} className="page-link py-5 px-5" href="#">
                            {number}
                        </a>
                    </li>
                ))}
	        </ul>
        </div>
    );
}

export default Pagination;