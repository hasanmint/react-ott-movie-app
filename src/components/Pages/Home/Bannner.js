import React from 'react';
import banner1 from '../../../assets/images/home/banner/banner1.png'
const Bannner = () => {
    return (
        <>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold">Thor: Love and Thunder</h1>
                        <p class="py-6">Thor: Love and Thunder is an upcoming American superhero
                            film based on the Marvel Comics character Thor, produced by
                            Marvel Studios and distributed by Walt Disney Studios Motion
                            Pictures. It is intended to be the direct sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.</p>
                        <h2 class="text-3xl font-normal">COMING SOON</h2>

                        <div className='mt-3'>
                            <button class="btn btn-primary text-white lowercase ">Watch Now</button>
                            <button class="btn btn-outline btn-white ml-3 lowercase">Add to Watchlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bannner;