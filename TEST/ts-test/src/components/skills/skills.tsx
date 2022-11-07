import React, { useState, useEffect } from "react";

type SkillsProps = {
  skills: string[];
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
