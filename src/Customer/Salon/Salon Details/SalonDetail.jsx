import React from 'react';

const SalonDetail= () => {
    return(
        <div className='space-y-5 mb-20'>
            <section className='grid grid-cols-2 gap-3'>
                <div className='col-span-2'>
                    <img className='w-full rounded-md h-[15rem] object-cover' src='https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto/services/fash/backgrounds/hair-salon.jpg' alt=''/>
                </div>
                <div className='col-span-1'>
                    <img className='w-full rounded-md h-[15rem] object-cover' src='https://media.istockphoto.com/id/1380542384/photo/hairstylists-working-with-customers-at-the-hair-salon.jpg?s=612x612&w=0&k=20&c=GnXoJkI-mgGBipnlUent9CFjftq2DJ5ZQxs_DPOfi6I=' alt=''/>
                </div>
                <div className='col-span-1'>
                    <img className='w-full rounded-md h-[15rem] object-cover' src='https://i.pinimg.com/originals/6b/2c/6d/6b2c6df56a4ec752985a6be7e8cc1bca.jpg' alt=''/>
                </div>
                
            </section>
        </div>
    )
}

export default SalonDetail;