import React from "react";
import { skills } from "../../data/content";
import {Container, Wrapper, Title, SkillsContainer, Skill, SkillTitle, SkillList,  SkillItem} from '../Skills/skillsstyle'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                       {/*<SkillImage src={item.image}/> */}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};
export default Skills;
