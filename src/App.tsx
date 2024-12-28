import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import PreviewButton from './components/PreviewButton';
import TShirtPreview from './components/TShirtPreview';

const App: React.FC = () => {
  const [color, setColor] = useState('hsl(260, 50%, 50%)'); // Default color
  const [previewColor, setPreviewColor] = useState(color);

  return (
    <div style={{ display:'flex' , background:'#2F0064', width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      boxSizing: 'border-box',
       gap:'20px',
       alignItems:'center', 
       justifyContent:"center"}}>
      <div 
      style=
      {{
        background: '#D8D8D8',
        height: '423px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:"57px",
        
      }}>
      <ColorPicker onColorSelect={setColor} />
      <PreviewButton onClick={() => setPreviewColor(color)} />
      </div>
      
      <TShirtPreview color={previewColor} />
    </div>
  );
};

export default App;
