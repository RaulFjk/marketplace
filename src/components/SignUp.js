import React from 'react';
import backG from '../header-wall.jpg';

export default class SignUp extends React.Component {

render() {
    return(
        <div className="grid min-h-screen place-items-center bg-fixed  bg-center bg-cover bg-no-repeat" style= {{ backgroundImage: `url('${backG}')` }}>
            <div className="leading-loose bg-blue-600 rounded-lg shadow-xl bg-transparent bg-opacity-60">
                <form className="max-w-xl m-4 p-10 ">
                    <p className="text-gray-800 font-medium mb-4 text-xl">Sign Up</p>
                    <div className="">
                    <label className="block text-base font-semibold text-dark" for="cus_name">Name</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
                    </div>
                    <div className="mt-2">
                    <label className="block text-base text-dark font-semibold" for="cus_email">Email</label>
                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                    </div>
                    <div className="mt-2">
                    <label className="block text-base font-semibold text-dark" for="cus_email">Address</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                    </div>
                    <div className="mt-2">
                    <label className="hidden  text-sm text-dark block" for="cus_email">City</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
                    </div>
                    <div className="">
                    <label className="block text-base font-semibold text-dark" for="cus_name">Role</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Ex: Student/Collaborator" aria-label="Name"/>
                    </div>
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

}