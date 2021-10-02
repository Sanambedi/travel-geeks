import React from 'react';
import "./Upcoming.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Upcoming(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div>
            <div className="bg-ground">
                <p>Checkout best promotional tour</p>
                <h1>Upcoming Events</h1>    
            </div>
            <div className="carousel">
                <Carousel
                infinite={true} 
                keyBoardControl={true}
                transitionDuration={500}
                
                responsive={responsive} >
                    <div><img src="https://picsum.photos/300/300" alt=""/></div>
                    <div><img src="https://picsum.photos/300/300" alt=""/></div>
                    <div><img src="https://picsum.photos/300/300" alt=""/></div>
                    <div><img src="https://picsum.photos/300/300" alt=""/></div>
                </Carousel>
            </div>
                
            
        </div>
    )
}