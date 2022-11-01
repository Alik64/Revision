import React from "react";

type SkillsProps = {
  skills: string[];
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
