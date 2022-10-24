import React from 'react';
import { Link } from 'react-router-dom';

const CarouselCard = ({ scene }) => {
    const { img, title, id } = scene;
    return (
        <Link to={`/${id}`}>
            <div class="card w-96 mb-5 bg-base-100 shadow-xl image-full">
                <figure><img src={img} className='h-72' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CarouselCard;