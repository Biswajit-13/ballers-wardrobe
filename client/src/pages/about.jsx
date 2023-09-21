import React from 'react';
import aboutIcon from "../../public/aboutIcon.png"
const About = () => {
  return (

    <div className=" py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-hd items-center justify-center flex">About Us</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Left Column: Image */}
        <div className="md:w-1/2 mb-6">
          <img
            src={aboutIcon}
            alt="About Us"
            className="mx-auto w-64 md:w-96"
          />
        </div>

        {/* Right Column: Text */}
        <div className="md:w-1/2">
          <p className="text-sm mb-4 text-subhd">
            At BallersWardrobe, we are more than just an online store; we're the embodiment of soccer passion and style. With a deep-rooted love for the beautiful game, we've curated a collection of European football jerseys that not only represent the heritage and excellence of the sport but also elevate your game-day style to new heights. Our mission is simple: to provide football enthusiasts, players, and fans alike with the opportunity to express their unwavering love for their favorite teams with high-quality, authentic jerseys that resonate with their passion.
          </p>
          <p className="text-sm mb-4 text-subhd">
          From iconic classics to the latest designs, our catalog features an extensive range of jerseys that tell a story, ignite memories, and make a statement. Join us in celebrating the spirit of soccer through fashion, and let BallersWardrobe be your trusted source for top-notch soccer apparel that's as stylish as it is legendary.
          </p>
        </div>
      </div>
    </div>




  );
}

export default About;
