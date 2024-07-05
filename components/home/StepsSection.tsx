import StepsCard from "./StepsCard";
import PageLayout from "../common/PageLayout";
import { stepsData } from "@/data/others/steps_list";

const StepsSection = () => {
  return (
    <section className="" id="steps">
      <PageLayout title="How It Works?">
        <div className="flex gap-12 md:gap-8 flex-col pt-10 md:w-4/5 md:mx-auto">
          {stepsData.map((item, index) => {
            return <StepsCard index={index} {...item} key={item.title} />;
          })}
        </div>
      </PageLayout>
    </section>
  );
};
export default StepsSection;
