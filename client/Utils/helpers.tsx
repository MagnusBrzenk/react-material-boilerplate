import React, { useState, useEffect } from 'react';

export function slowImport(value: any, ms = 1000): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

export function fakeImportComponent(value: any, ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ default: value }), ms);
  });
}

export const ShowTimer = ({ countTime = false }) => {
  const [timeElapsed, setTime] = useState(0);
  useEffect(() => {
    let intervalId: any;
    if (countTime) {
      const started = Date.now();
      setTime(0);
      intervalId = setInterval(() => {
        setTime(Date.now() - started);
      }, 1);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [countTime]);
  return <span>Time Elapsed: {timeElapsed}</span>;
};

export const Fallback = ({ children, onAdded, onRemoved }: any) => {
  useEffect(() => {
    onAdded();
    return () => {
      onRemoved();
    };
  }, []);
  return children;
};
