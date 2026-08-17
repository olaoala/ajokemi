import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_1b7b5ws';
const EMAILJS_TEMPLATE_ID = 'template_oe93584';
const EMAILJS_PUBLIC_KEY = '7bxW7F4SqSFMhaG_Y';

const googleUrl = 'https://calendar.app.google/3zc3FoXq1RtMsLVB8';

const fieldClass = "mt-1 p-3 block w-full border-b border-gray-600 bg-white/5 text-white placeholder-gray-500 sm:text-sm";
const labelClass = "block text-sm font-medium text-gray-200";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        services: ''
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    services: formData.services,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', services: '' });
            })
            .catch((error) => {
                console.error('EmailJS send failed:', error);
                setStatus('error');
            });
    };

    return (
        <div id="contact" className='bg-navyDark'>
            <motion.div
                className="px-6 md:px-12 max-w-3xl mx-auto py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-bold text-white mb-8">Let's work together</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className={labelClass}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Amaka Ade'
                                className={fieldClass}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={labelClass}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='amamka@ade.com'
                                className={fieldClass}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="services" className={labelClass}>What services are you looking for?</label>
                        <input
                            type="text"
                            id="services"
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            placeholder='Web development'
                            className={fieldClass}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={labelClass}>Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Hi Wura, can you help me with...'
                            className={fieldClass}
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {status === 'success' && (
                        <p className="text-sm text-green-400">Message sent — thanks! I'll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                        <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
                    )}

                    <div className="flex flex-wrap gap-3 mt-2">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-accent text-accentOn px-6 py-3 rounded-lg font-bold disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send message'}
                        </button>
                        <a
                            href={googleUrl}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='border border-accent text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-accent hover:text-accentOn transition-colors'
                        >
                            Schedule a call
                        </a>
                    </div>
                </form>

                <p className="text-gray-400 text-xs mt-10">
                    <a href="mailto:babalolawuraola321@gmail.com" className="hover:text-white">babalolawuraola321@gmail.com</a>
                    {' '}&middot; +2349025794716 &middot; Yaba, Lagos
                </p>
            </motion.div>
        </div>
    );
};

export default ContactForm;
