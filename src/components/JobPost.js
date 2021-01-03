import React from 'react';
import background from '../jobBack.jpg';
import jobLogo from '../insure.svg'

export default class JobPost extends React.Component {

    render() {
        return(
            <div>
                {/* Job title and description div */}
                <div className='bg-cover bg-center' style= {{ backgroundImage: `url('${background}')` }}>
                    <div className='bg-blue-600 bg-transparent bg-opacity-30'>
                        <div className='ml-44 py-20' >
                            <span className='text-4xl fond-bold'>IOS Developer - IOS, Git, API</span>
                        </div>
                    </div>
                </div>
                {/* Grid layout under job title, divided in 3 cols where text ocupies 2 cols and 1 col is for key information div on the right side */}
                <div className='grid grid-cols-3 gap-4'>
                    <div class='col-span-2 ... shadow-2xl border-2 ml-44 mb-4 mt-16 rounded-lg'>
                        <div className='px-6 py-8'>
                        <h1 className='text-2xl py-6 font-semibold'>Description</h1>
                        <p>Google is and always will be an engineering company. We hire people with a broad set of ical skills who are ready to tackle
                             some of technology’s greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only
                              revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and rely new platforms
                             for developers around the world.
                             From AdWords to Chrome, Android to Ye, Social to Local, Google engineers are changing the world.
                        </p>
                        <h1 className='text-2xl py-6 font-semibold'>Responsabilities</h1>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                             Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit.
                        Build next-generation web applications with a focus on the client side.
                        Redesign UI’s, implement new UI’s, and pick up Java as necessary.
                        Explore and design dynamic and compelling consumer experiences.
                        Design and build scalable framework for web applications.
                        </p>
                        <h1 className='text-2xl py-6 font-semibold'>How to apply?</h1>
                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                             Curabitur aliquet quam id dui posuere blandit.
                             Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit 
                             amet nisl tempus convallis quis ac lectus.</p>
                        </div>
                    </div>
                    {/* Job Overview card on the right side with Job Description tags */}
                    <div class='shadow-xl ml-10 mr-20 rounded-lg border-2 h-auto mb-4 mt-16'>
                        <div className='border-b-2' >
                            <div className='py-4 ml-6'>
                                <span className='text-xl font-semibold'>Job Overview</span>
                            </div>
                        </div>
                        {/*Image div with Company Logo  */}
                        <div className='border-b-2 py-4'>
                            <img className='my-8 mx-32' src={jobLogo}/>
                            <span className='font-semibold ml-28 px-2'> MHP Consulting </span>
                        </div>
                        <div className='ml-6'>
                            {/* Posted on heading with icon */}
                            <div className='my-6'>
                                <div className='flex'>
                                <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5">
						        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
					            </svg>
                               <h1 className='ml-2 font-semibold'>Posted on</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>3 years ago</span>
                            </div>
                            {/* Location div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                    <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <h1 className='ml-2 font-semibold'>Location</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>Cluj-Napoca</span>
                            </div>
                            {/* Title div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    <h1 className='ml-2 font-semibold'>Title</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>IOS Developer</span>
                            </div>
                            {/* Category div with header */}
                            <div className='my-6'>
                                <div className='flex'>
                                    <svg viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0
                                     01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <h1 className='ml-2 font-semibold'>Category</h1>
                                </div>
                                <span className='ml-7 text-gray-400'>Front End Development</span>
                            </div>
                            <div className='mb-6'>
                                <button type="submit" className="w-64 mx-8 py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-blue-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                                Apply now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}