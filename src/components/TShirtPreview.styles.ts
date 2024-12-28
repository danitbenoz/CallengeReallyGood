import { CSSProperties } from 'react';

interface Styles {
  [key: string]: CSSProperties;
}

export const styles: Styles = {
  container: {
    position: 'relative',
  },
  checkerboardBackground: {
    padding: '40px',
    backgroundImage: `url(${require('../assets/checkerboard.svg')})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '16px 16px',
    display: 'flex',
    border: '20px solid #D8D8D8',
    boxShadow: `
      inset 0px 5px 5px -5px rgba(0, 0, 0, 0.5), 
      inset 5px 0px 5px -5px rgba(0, 0, 0, 0.5)
    `,
  },
  shirtImage: {
    width: '331px',
    height: '303px',
    objectFit: 'contain',
  },
  logo: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
