import hero from './illustration-hero.svg';
import icon from './icon-music.svg';
import React, { useState } from 'react';
import ImageCard from './components/ImageCard';

const App = () => {

  const [images] = useState( [{hero: hero, icon: icon}] );
  console.log(images);

  return (
    <div className="bg-container-background bg-contain bg-no-repeat">
      {images.map( (image, index) => (
          <ImageCard key={index}
          image={image} />
      ))}
      <div className="attribution object-bottom p-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Laura Salinas</a>.
      </div>
    </div>
  );

}

export default App;
