import React, { useState, useEffect, useRef } from 'react';
import image from '../Assets/image.jpg'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        services: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API or email service)
        console.log('Form submitted:', formData);
    };
    const contactDivRef = useRef(null);

    const handleScroll = () => {
      if (contactDivRef.current) {
        const scrollPosition = window.scrollY;
        const maxScrollPosition = window.innerHeight;
        let newPosition = scrollPosition > maxScrollPosition ? maxScrollPosition : scrollPosition;
        contactDivRef.current.style.transform = `translateX(${newPosition}px)`;
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

    return (
        <div className='bg-slate-700'>
            <div className='flex justify-between p-12 px-52'>
                <div className="max-w-md p-6 w-3/5">
                    <h2 className="text-4xl font-bold mb-16">Let's work <br /> together!</h2>
                    <hr className='mb-4' />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Amaka Ade'
                                className="mt-1 p-6 block w-full  border-b bg-amber-50 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='amamka@ade.com'
                                className="mt-1 p-6 block w-full  border-b bg-amber-50 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="services" className="block text-sm font-medium text-gray-700">What services are you looking for?</label>
                            <input
                                type="services"
                                id="services"
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                placeholder='Web development'
                                className="mt-1 p-6 block w-full  border-b bg-amber-50 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Hi Wura, can you help me with...'

                                className="mt-1 p-6 block w-full  border-b bg-amber-50 sm:text-sm"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="text-right ">
                            <button
                                type="submit"
                                className=" w-24 h-24 ml-24 -mt-8 m-4 bg-amber-400 border-2 rounded-full"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='info ml-2'>
                    <img className='w-24 h-24 rounded-full m-10 object-cover' src={image} alt="" />
                    <p className='text-2xl mb-2'>&darr;</p>
                    <div className='mb-8'>
                        <p className='text-xs'>CONTACT DETAILS</p>
                        <p className='text-sm'>babalolawuraola321@gmail.com</p>
                        <p className='text-sm'>+2349025794716</p>
                    </div>
                    <div className='mb-8'>
                        <p className='text-xs'>Business details</p>
                        <p className='text-sm'>Location: Yaba Lagos</p>
                    </div>
                    <div>
                        <p className='text-xs'>Socials</p> <br />
                        <a href='#github' className='text-sm'>Github</a> <br />
                        <a href='#linkedin' className='text-sm'>LinkedIn</a> <br />
                        <a href='#instagram' className='text-sm'>Instagram</a> <br />
                        <a href='#twitter'className='text-sm'>Twitter</a>

                    </div>


                </div>
            </div>
        </div>


    );
};

export default ContactForm;
