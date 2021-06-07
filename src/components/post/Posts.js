import React, {useEffect} from 'react';
import PostCard from './PostCard.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


SwiperCore.use([ Pagination, Scrollbar, A11y]);

export default function Posts (props) {


    useEffect (() => console.log('useEffect Posts'), []);

    return (
      
        <Swiper 
            slidesPerView={3} 
            spaceBetween={10} 
            slidesPerGroup={2} 
            breakpoints={{
                0: {
         
                        slidesPerView: 1,
                        slidesPerGroup: 1, 
                    },
                768: {              
                        slidesPerView: 2,
                        slidesPerGroup: 2, 
                    },


                998: {
                    slidesPerView: 3,
                    slidesPerGroup: 3, 
                }
                
            }}        
            loop={true} 
            loopFillGroupWithBlank={true} 
            pagination={{
                "clickable": true
            }}    
            className="mySwiper"
        >
            { props.posts.map((post) => {
                return <SwiperSlide>
                            <PostCard 
                            key={post.id}
                            post={post} 
                           />
                        </SwiperSlide>
                })
            }
        </Swiper>
       
    )

}