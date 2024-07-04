import StepsCard from "./StepsCard";
import { StepsCardProps } from "./StepsCard";
const stepsData = [
  {
    title: "Sign in or sign up to become a member",
    description:
      "Access the platform by logging in or creating a new account to start using the service.",
  },
  {
    title: 'Click "Select Item" to customize your meal',
    description:
      "Choose from the menu and personalize your meal according to your preferences and dietary needs.",
  },
  {
    title: 'Click "Submit Order" and wait for your food to arrive',
    description:
      "Complete the ordering process and await your meal delivery to the specified address.",
  },
];

const StepsSection = () => {
  return (
    <section className="px-4 py-20 max-w-[1280px]" id="steps">
      <h1 className="text-olive font-italiana text-3xl text-center md:text-6xl">
        How It Works?
      </h1>
      <div className="flex gap-12 md:gap-8 flex-col pt-10 md:w-4/5 md:mx-auto">
        {stepsData.map((item, index) => {
          return <StepsCard index={index} {...item} key={item.title} />;
        })}
      </div>
    </section>
  );
};
export default StepsSection;
