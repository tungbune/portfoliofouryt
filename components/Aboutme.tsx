import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Having been rasied in a solid educational foundation, I have been aware of the indispensible role of education
          in the transformational advancement of individuals. 
          Hence, education alignment has been equipped with my personal growth. 
          Throughout this foundation, I will be able to
          share the methods and tips to how I could upgrade myself to conquer the high-educational values,
          standing as large-scale positive messages in community. 
        </p>
        <p>
         As a learning enthusiast in behavioural economics and sustainability, 
          I have always embraced myself in the journey of education and convey 
          valuable lessons to my leaners.
          That triggers me to delve into my major and academic research achievements. 
          This portfolio is a platform for me to remark my educational journey 
          and how I can advance my orientation,
          standing as a recognizable tool with every single milestone of my
          personal development. 
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
