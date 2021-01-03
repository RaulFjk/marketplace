import React from 'react';
import backG from '../try.jpg';

export default class FilterBar extends React.Component {




render() {
    return (
        <div classname='bg-cover bg-center ...' style= {{ backgroundImage: `url('${backG}')` }}>
        <div className='py-44 bg-blue-600 bg-transparent bg-opacity-60' >
            {/* Div for text upon filter input fields */}
            <div className='flex justify-center mr-72 mb-10'>
                <span className='mr-1 text-4xl text-red-700 mb-1'>3,000+</span>
                <span className='text-4xl text-white mb-1'>Browse Jobs, Projects, Conferences</span>
            </div>
            <div className='flex justify-center mr-2'>
                <div className='px-3'>
                    <input className='input border border-gray-400 appearance-none rounded w-80 px-3 py-3 pt-2 pb-2
                     focus focus:border-indigo-600 focus:outline-none
                      active:outline-none active:border-indigo-600'
                      placeholder='Search...'/>
                </div>
                <div  className='px-3'>
                    <input className='input border border-gray-400 appearance-none
                     rounded w-60 px-3 py-3 pt-2 pb-2 focus focus:border-indigo-600
                    focus:outline-none active:outline-none active:border-indigo-600'>
                    </input>
                </div >
                <div  className='px-3'>
                    <input className='input border border-gray-400 appearance-none rounded
                     w-60 px-3 py-3 pt-2 pb-2 focus focus:border-indigo-600 focus:outline-none
                     active:outline-none active:border-indigo-600'/>
                </div>
                <div>
                    <button className="bg-blue-800 text-white my-1  px-4 py-1 rounded border border-gray-300  mx-2 -2 hover:bg-gray-100 hover:text-gray-700">Search</button>
                </div>
            </div>
        </div>
        </div>
        
    );
}

}

