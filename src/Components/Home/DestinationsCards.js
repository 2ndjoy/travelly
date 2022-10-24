import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsCards = ({ place }) => {
    const { name, img } = place;
    return (
        <div>
            <div class="card w-96 mb-5 glass">
                <figure><img src={img} className='h-72 fluid' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>We provide all the facilities you need</p>
                    <div class="card-actions justify-end">
                        <Link to='/rooms'>  <button class="btn btn-primary">Explore now!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationsCards;