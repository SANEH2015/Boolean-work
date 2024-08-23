import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [color, setColor] = useState('red');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let intervalId;
    switch (color) {
      case 'red':
        intervalId = setTimeout(() => setColor('yellow'), 4000);
        break;
      case 'yellow':
        intervalId = setTimeout(() => setColor('green'), 500);
        break;
      case 'green':
        intervalId = setTimeout(() => setColor('red'), 3000);
        break;
      default:
        break;
    }
    return () => clearInterval(intervalId);
  }, [color]);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
          marginBottom: '10px',
        }}
        onClick={handleClick}
      />
      {showText && (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {color === 'red' ? 'STOP' : color === 'yellow' ? 'CAUTION' : 'GO'}
        </div>
      )}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color === 'yellow' ? 'yellow' : 'gray',
          marginBottom: '10px',
        }}
        onClick={handleClick}
      />
      {showText && (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {color === 'yellow' ? 'CAUTION' : 'WAIT'}
        </div>
      )}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color === 'green' ? 'green' : 'gray',
        }}
        onClick={handleClick}
      />
      {showText && (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {color === 'green' ? 'GO' : 'STOP'}
        </div>
      )}
    </div>
  );
}

export default TrafficLight;