import React from 'react';
import { useEffect, useState } from 'react';
import DestinationsCards from '../Home/DestinationsCards';
import CarouselCard from './CarouselCard';


const Home = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://travelly-server.vercel.app/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const [scenes, setScences] = useState([]);
    useEffect(() => {
        fetch('https://travelly-server.vercel.app/scences')
            .then(res => res.json())
            .then(data => setScences(data))
    })
    return (
        <div>
            <div className='mt-7 mb-7'>
                <h2 className='text-3xl text-blue-300 text-center'>Welcome to travelly</h2>
                <p className='text-xl text-blue-300 text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officiis aliquid. Obcaecati molestias quos aliquid nemo iste numquam omnis mollitia perspiciatis delectus repellendus dicta reprehenderit ipsam incidunt, non doloremque dolor!</p>
            </div>
            <div className='md:flex gap-3 mx-5 my-10'>
                {
                    places.map(place => <DestinationsCards
                        key={place.id}
                        place={place}></DestinationsCards>)
                }
            </div>
            <div className='md:flex justify-around'>
                {
                    scenes.map(scene => <CarouselCard
                        key={scene.id}
                        scene={scene}></CarouselCard>)
                }
            </div>
        </div>
    );
};

export default Home;