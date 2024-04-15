import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Software Development"
        />
        <SkillsInput
          title="Budgeting and Cost Analysis"
        />
        <SkillsInput
          title="Enterprise Resource Planning"
        />
        <SkillsInput
          title="Staff and User Training"
        />
        <SkillsInput
          title="Process Improvement"
        />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput
          title="Adobe Illustrator"
          link="https://www.adobe.com/products/illustrator/free-trial-download.html"
        />
        <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
      </div>
    </div>
  );
};

export default Skills;
