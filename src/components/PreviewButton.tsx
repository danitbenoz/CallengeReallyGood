// import React from 'react';

// interface PreviewButtonProps {
//   onClick?: () => void;
// }

// const HexagonIcon = () => (
//   <svg width="25" height="25" viewBox="0 0 24 24">
//     <path 
//       fill="white" 
//       d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 0L4 7v10l8 5 8-5V7l-8-5z"
//     />
//   </svg>
// );

// const PreviewButton: React.FC<PreviewButtonProps> = ({ onClick }) => {
//   return (
//     <div 
//       className="relative inline-block"
//       style={{
//         filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
//         borderRadius:"8px",
//         border:"3px solid #3B0C5D",
//         width:"85%",
//       }}

//     >
//       <button
//         onClick={onClick}
//         style={{
//             width:"100%",
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '40px',
//             padding:"5px 10px",
//             background: 'linear-gradient(180deg, #282499 0%, #4437A5 50%, #7152AA 100%)',
//             border: '2px solid white',
//             borderRadius: '5px',
//             boxShadow: `
//               inset 0 6px 4px rgba(0, 0, 0, 0.3),
//                       inset 5px 0px 5px -5px rgba(0, 0, 0, 0.9)   

  
//             `,
//             cursor: 'pointer',
//         }}
//       >
//         <HexagonIcon />
//         <span className="tracking-wider" 
//         style={{
//             fontFamily: 'Roboto Slab',
//             fontSize:"23px",
//             color:"white",
//             textShadow: '2px 3px 4px rgba(0, 0, 0, 0.3)' 
//             }}>
//           Preview
//         </span>
//         <HexagonIcon />
//       </button>
//     </div>
//   );
// };

// PreviewButton.displayName = 'PreviewButton';

// export default PreviewButton;


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
