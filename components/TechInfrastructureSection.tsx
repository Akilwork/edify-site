import ScrollAdventure from "@/components/ui/animated-scroll";
import { techInfraSteps } from "@/constants/storytelling";

const TechInfrastructureSection = () => {
  return (
    <section id="technology-infrastructure" className="w-full">
      <ScrollAdventure steps={techInfraSteps} id="tech-infra" />
    </section>
  );
};

export default TechInfrastructureSection;
