import React, { Component } from 'react';


class HomePage extends Component {

    componentDidMount () {

    }

    render() {

        return(
            <div className="container">
                <div>
                    <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' />
                </div>
            </div>
        );
    }
}

export default (HomePage);