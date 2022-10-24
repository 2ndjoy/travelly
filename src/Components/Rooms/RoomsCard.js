import React from 'react';
import { Link } from 'react-router-dom';

const RoomsCard = ({ room }) => {
    const { title, detail, ratings, total_reviews, price, room_image } = room;
    return (
        <div class="card w-80 bg-base-100 shadow-xl image-full mb-10">
            <figure><img src={room_image} /></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{title}</h2>
                <p className=' text-white'>{detail}</p>
                <div class="card-actions justify-end">
                    <Link to="/bookings"><button class="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;