import React, { useEffect, useState } from "react";

const Clock = ({ render }) => {
  const [time, setTime] = useState(Date.now());
  const tick = () => setTime(Date.now());
  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return <>{render(time)}</>;
};

const PreviewClock = () => {
  return (
    <Clock
      render={(time) => (
        <div id="rendered">
          Rendered time: {new Date(time).toLocaleTimeString()}
        </div>
      )}
    />
  );
};

export default PreviewClock;
