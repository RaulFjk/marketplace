import React, { useState, useEffect } from 'react';
import data from '../assets/data.json';
import JobBoardComponent from './JobBoardComponent';
import FilterBar from './FilterBar';

const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => setJobs(data), []);

    const filterFunc = ({ role, level, tools, languages }) => {
        if (filters.length === 0){
        return true;
        }
        const tags = [role, level];
        
        if (tools) {
        tags.push(...tools);
        }

        if (languages) {
        tags.push(...languages);
        }
    // macar un tag sa fie in anunt
        // return tags.some((tag) => filters.includes(tag));
        // returneaza doar cele care au toate tagurile din filtru
        return filters.every((filter) => tags.includes(filter));
    };

    const handleTagClick = (tag) => {
        // avoid re-adding the tag
        if(filters.includes(tag)) return;
        
        setFilters([...filters, tag]);
    }

    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter((f) => f !== passedFilter ));

    }

    const clearFilters = () => {
        setFilters([]);
    }

    const filteredJobs = jobs.filter(filterFunc);
    return(
        <div>
        <div >
        <FilterBar />
        </div>
        <div className='flex ml-10'>
        <span className='text-3xl text-red-500 py-4 mr-1'>All</span>
        <span className='text-3xl text-gray-700 py-4 '>posts</span>
        </div>
        { filters.length > 0 && (
            <div className= 'flex bg-white shadow-md my-16 mx-10 p-6 rounded '>
                {filters.length > 0 && filters.map(
                    (filter) => (
                    <span
                    className='cursor-pointer mr-4 mb-4
                    p-2 rounded text-green-500
                    bg-green-100 font-bold sm:mb-0'
                    onClick={() => handleFilterClick(filter)}>
                        ×{filter}
                        </span>
                        ))}
                        <button onClick={clearFilters} className='font-bold text-gray-700 ml-auto'>Clear</button>
            </div>
            )}
            {jobs.length === 0 ? (
            <p>Jobs are loading...</p>
            ) : (
            filteredJobs.map( job => (
                <JobBoardComponent
                job={job}
                key={job.id}
                handleTagClick={handleTagClick} />
            ))
            )
        }
        </div>
         );
}
export default Home;

