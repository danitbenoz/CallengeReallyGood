import React, { useEffect, useRef, useState } from 'react';
import '@fontsource/roboto-slab';
import { styles } from './ColorPicker.styles';

interface ColorPickerProps {
  onColorSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState('hsl(260, 50%, 50%)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawColorGradient(ctx, canvas.width, canvas.height);
  }, []);

  const drawColorGradient = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const saturation = (x / width) * 100;
        const lightness = 100 - (y / height) * 100;
        ctx.fillStyle = `hsl(260, ${saturation}%, ${lightness}%)`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const saturation = Math.round((x / canvas.width) * 100);
    const lightness = Math.round(100 - (y / canvas.height) * 100);

    const color = `hsl(260, ${saturation}%, ${lightness}%)`;
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <form style={styles.container}>
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        onClick={handleCanvasClick}
        style={styles.canvas}
      />
      <div style={styles.previewContainer}>
        <div
          style={{
            ...styles.preview,
            width: '30%',
            height: '33px',
            backgroundColor: selectedColor,
          }}
        />
        <output style={styles.colorText}>{selectedColor}</output>
      </div>
    </form>
  );
};

export default ColorPicker;
