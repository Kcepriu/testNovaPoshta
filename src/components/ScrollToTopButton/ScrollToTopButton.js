import { useState, useEffect } from 'react';
import { Button } from './ScrollToTopButton.styled';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsVisible(false);
      }}
    >
      ^
    </Button>
  );
}
export default ScrollToTopButton;
