import hero from './illustration-hero.svg';
import React, { useState } from 'react';
import ImageCard from './components/ImageCard';

const App = () => {

  const [images] = useState([hero]);

  return (

    <div className='bg-container-background bg-contain'>
      
      {images.map(image => (
          <ImageCard key={image.id} image={image} />
      ))}
      
      <div className="attribution object-bottom">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Laura Salinas</a>.
      </div>
      
    </div>

  );
}

export default App;
