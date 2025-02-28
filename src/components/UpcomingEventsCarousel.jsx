import React from 'react';
import Slider from 'react-slick';

const UpcomingEventsCarousel = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="upcoming-events-carousel">
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="event-slide relative p-4">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <p className="text-gray-300">{event.date}</p>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEventsCarousel; 