import React, { useEffect, useState } from 'react';
import RoomsCard from './RoomsCard';
import './Rooms.css'

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('https://travelly-server.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='md:flex mx-12'>
            <div className='mx-7 my-4'>
                {
                    rooms.map(room => <RoomsCard
                        key={room._id}
                        room={room}></RoomsCard>)
                }
            </div>
            <div className='my-10 ml-12'>
                <div class="mapouter sm:h-5 sm:w-7">
                    <div class="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=kulaura&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a>
                        <br />
                        <a href="https://www.embedgooglemap.net">google map html code</a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rooms;