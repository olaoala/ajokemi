import React from 'react';
import { motion } from 'framer-motion';
import reviewsData from '../Reviews.json';

// Add real reviews to src/Reviews.json in this shape:
// { "id": 1, "quote": "...", "name": "Client Name", "role": "Their role, Company", "rating": 5 }

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Reviews = () => {
    const hasReviews = reviewsData && reviewsData.length > 0;

    return (
        <div id="reviews" className='bg-white py-12'>
        <motion.div
            className='px-6 md:px-12 max-w-5xl mx-auto text-gray-600'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h3 className='font-bold text-2xl text-gray-800 mb-6'>What people say</h3>
            {hasReviews ? (
                <motion.div
                    className='grid gap-6 md:grid-cols-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={listVariants}
                >
                    {reviewsData.map((review) => (
                        <motion.div key={review.id} variants={cardVariants} className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col'>
                            <p className='italic mb-4 text-sm'>&ldquo;{review.quote}&rdquo;</p>
                            {review.rating && (
                                <p className='text-accent mb-2' aria-label={`${review.rating} out of 5 stars`}>
                                    {'★'.repeat(review.rating)}
                                </p>
                            )}
                            <p className='font-bold text-gray-800 mt-auto'>{review.name}</p>
                            <p className='text-sm text-gray-500'>{review.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <p className='text-sm text-gray-400'>Testimonials coming soon.</p>
            )}
        </motion.div>
        </div>
    );
};

export default Reviews;
