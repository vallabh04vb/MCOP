import { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import TestimonialCarousel from '../../components/Testimonials/TestimonialCarousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">About Our MUN</h2>
              <p className="text-gray-600 mb-6">
                Experience the world of international diplomacy through our Model United Nations conferences. 
                Develop crucial skills in public speaking, negotiation, and leadership while addressing global challenges.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
                alt="MUN Conference"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p>Delegates</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p>Countries</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p>Committees</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add EventCard components here */}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-gray-50">
        <Gallery />
      </section>
      
      {/* Testimonials Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            What Delegates Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Join Our Next Conference?
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
            Register now and be part of the global diplomatic community.
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 