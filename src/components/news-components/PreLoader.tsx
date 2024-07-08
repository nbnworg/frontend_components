import React from 'react';
import '../../styles/preloader.css';

interface PreLoaderProps {
  logo: string;
}

const PreLoader: React.FC<PreLoaderProps> = ({ logo }) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <img className='fade-in-image h-40' src={logo} alt='Preloader' />
      </div>
    </div>
  );
};

export default PreLoader;
