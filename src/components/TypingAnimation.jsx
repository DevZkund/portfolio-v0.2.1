import React from 'react';
import TypingEffect from 'react-typing-effect';

const TypingAnimation = () => {
  return (
    <span className="text-yellow-400">
      <TypingEffect
        text={['Flutter', 'MERN', 'Full Stack']}
        speed={100} // Adjust typing speed
        eraseSpeed={50} // Adjust deleting speed
        eraseDelay={2000} // Delay before deleting
        typingDelay={500} // Delay before starting typing
        cursorRenderer={cursor =><span className="typing-cursor hidden">{cursor}</span>}
        displayTextRenderer={(text, i) => (
          <span>
            {text}
          </span>
        )}
      />
    </span>
  );
};

export default TypingAnimation;
