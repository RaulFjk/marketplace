import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, paginateNext, paginatePrevious }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
	        <ul className="flex w-full justify-center list-none rounded my-2">
            <li><a onClick={() => paginatePrevious()} className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 shadow-md text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200" >Previous</a></li>
                {pageNumbers.map(number => (
                    <li key={number} className="relative block px-1 py-2 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                        <a onClick={() => paginate(number)} className="page-link py-5 px-5">
                            {number}
                        </a>
                    </li>
                ))}
                <li><a onClick={() => paginateNext(totalPosts)} className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 shadow-md text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200" >Next</a></li>
	        </ul>
        </div>
    );
}

export default Pagination;