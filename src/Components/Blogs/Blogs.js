import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData();
    const { category_id, title, details, img } = blogs;
    return (
        <div className='md:flex md:gap-4 mx-auto md:my-10 justify-center'>
            <div class="carousel rounded-box">
                <div class="carousel-item">
                    <img src={img} className="w-96" />
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-orange-400'>{title}</h2>
                <br />
                <h4 className='text-xl text-yellow-400'>
                    {details}
                </h4>
            </div>
        </div>
    );
};

export default Blogs;