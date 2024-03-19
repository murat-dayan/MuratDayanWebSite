import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const handleDownloadCV = () => {
    // CV dosyanızın URL'ini buraya ekleyin
    const cvUrl = 'https://drive.google.com/file/d/16waiJRlj125c1j4IkeNR9uEgjqo0Fmb2/view?usp=sharing';
    // Yeni sekmede açılacak bir a etiketi oluşturun
    const link = document.createElement('a');
    link.href = cvUrl;
    // Dosya adını ayarlayın
    link.download = 'muratdayancv.pdf';
    // Yeni sekmede açılması için target özelliğini belirtin
    link.target = '_blank';
    // A etiketini tıklayınca indirme işlemi başlatılır
    link.click();
  };
  

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>WELCOME</h1>
      <p>I'm an android developer </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleDownloadCV}
        >
          GET MY CV
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;