import { CSSProperties } from 'react';

interface Styles {
  [key: string]: CSSProperties;
}

export const styles: Styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
    borderRadius: '8px',
    border: '3px solid #3B0C5D',
    width: '85%',
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    padding: '5px 10px',
    background: 'linear-gradient(180deg, #282499 0%, #4437A5 50%, #7152AA 100%)',
    border: '2px solid white',
    borderRadius: '5px',
    boxShadow: `
      inset 0 6px 4px rgba(0, 0, 0, 0.3),
      inset 5px 0px 5px -5px rgba(0, 0, 0, 0.9)
    `,
    cursor: 'pointer',
  },
  icon: {
    width: '25px',
    height: '25px',
    fill: 'white',
  },
  text: {
    fontFamily: 'Roboto Slab',
    fontSize: '23px',
    color: 'white',
    textShadow: '2px 3px 4px rgba(0, 0, 0, 0.3)',
  },
};
