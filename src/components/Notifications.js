import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Notifications = (props) => {
    const { notifications } = props;
    if(notifications.length === 0){
    return(
        <div class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 mr-20">
        <div  class="block bg-gradient-to-r from-green-400 to-blue-500 ... text-white text-center font-bold py-2 px-4">Latest Posts</div>
       <div class="py-2">
         <span className="ml-3">No activity</span>
       </div>
   </div> 
    ); }
    return(
        <div class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 mr-20">
             <div  class="block bg-gradient-to-r from-green-400 to-blue-500 ... text-white text-center font-bold py-2">Latest Posts</div>
            <div class="py-2">
                {notifications && notifications.map(item => {
                    return (
                        <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                            <p class="text-gray-600 text-sm mx-2">
                            <span class="font-bold" >{item.user}({item.company})</span> added <Link to={'/post/' + item.postId}><span class="font-bold text-blue-500" >{item.title}</span> </Link>
                            </p>
                        </a>
                    );
                } )}
            </div>
        </div> 
        );
}

export default Notifications;