import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="CP Corporation"
          subTitle="Manage workforce operations and Develop HR policies 2023 - present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Unilever Corporation"
          subTitle="Oversee project lifecycle from planning to closure and Lead teams 2023 - present"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="VUS the English "
          subTitle="English Teacher "
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fluent in three languages"
          subTitle="English, Chinese, Vietnamese"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
