import React from 'react';
import backG from '../try.jpg';
import logo from '../eyecam-co.svg';
import moment from 'moment';

const JobBoardComponent = ({ post: {
    company,
    featured,
    title,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
},
id,
handleTagClick
 }) => {
    const tags = [role, level];

    if (tools) {
        tags.push(...tools);
    }

    if (languages) {
        tags.push(...languages);
    }

    const isNew = true;

    

    return ( 
        // If job is featured then it should have a blue margin on the left border side
        <div className={`flex flex-col bg-white shadow-xl border-gray-200 my-16 mx-10 p-6 rounded 
        ${featured && 'border-l-4 border-blue-500 border-solid'} sm:flex-row sm:my-4`} >
            <div>
                {/* sm: -> is a breakpoint which says that mt should pe 0 when desktop version is encountered */}
                <img className="-mt-16 mb-4 w-20 h-20 s sm:h-24 sm:w-24 sm:my-0" src={logo} alt={company}/>
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h3 className='font-bold text-blue-500'>
                    {company}
                    {/* if isNew and featured property exists than create a little span for each one of them */}
                    {isNew && (<span className='text-blue-100 bg-blue-500 font-bold 
                 m-2  rounded-full py-1 px-2'>New</span>)}
                    {featured && (<span className='text-white bg-gray-800 font-bold 
                py-1 px-2 rounded-full'>Featured</span>)}
                </h3>
                <h2 className='font-bold text-xl my-2 '>{title}</h2>
                <p className='text-gray-700'>
                   {moment(postedAt.toDate()).calendar()} · {contract} · {location}
                </p>
            </div>
            <div className='flex flex-wrap 
            items-center mt-4 mx-4 pt-4 border-t 
            border-gray-300 border-solid
            sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
                { tags ? tags.map((tag)=> 
                <span
                onClick={() => handleTagClick(tag)}
                 className='cursor-pointer text-blue-100
                  bg-blue-500 font-bold
                   mr-2 mb-4
                p-2 rounded sm:mb-0'>{tag}</span>) : '' }
            </div>
        </div>
    );
}

export default JobBoardComponent;