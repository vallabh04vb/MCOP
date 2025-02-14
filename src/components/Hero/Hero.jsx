import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107')",
          transform: 'translateZ(-1px) scale(2)'
        }}
      />
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Model United Nations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Shaping Tomorrow's Leaders Today
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 