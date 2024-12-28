import { CSSProperties } from 'react';

interface Styles {
  [key: string]: CSSProperties;
}

export const styles: Styles = {
  container: {
    marginTop: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    height: '260px',
    width: '260px',
    padding: '16px',
  },
  canvas: {
    border: '1px solid #ccc',
    cursor: 'crosshair',
  },
  previewContainer: {
    display: 'flex',
    gap: '7px',
    alignItems: 'center',
  },
  preview: {
    border: '1px solid #ccc',
  },
  colorText: {
    width: '70%',
    height: '33px',
    paddingLeft: '10px',
    alignContent: 'center',
    backgroundColor: '#f5f5f5',
    border: '1px solid',
    fontFamily: 'Roboto Slab',
    fontSize: '16px',
    userSelect: 'none',
  },
};
