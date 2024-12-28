import React from 'react';
import { styles } from './PreviewButton.styles';

interface PreviewButtonProps {
  onClick?: () => void;
}

const HexagonIcon: React.FC = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
  </svg>
);

const PreviewButton: React.FC<PreviewButtonProps> = ({ onClick }) => {
  return (
    <div style={styles.container}>
      <button onClick={onClick} style={styles.button}>
        <HexagonIcon />
        <span style={styles.text}>Preview</span>
        <HexagonIcon />
      </button>
    </div>
  );
};

PreviewButton.displayName = 'PreviewButton';

export default PreviewButton;
