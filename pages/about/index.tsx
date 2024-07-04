import Image from "next/image";
import PageLayout from "@/components/common/PageLayout";
import GeneralInput from "@/components/common/GeneralInput";
import GeneralTextArea from "@/components/common/GeneralTextarea";

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="w-full h-[135px] md:h-[225px]">
        <Image
          src="/about/aboutus_hero.png"
          alt="about"
          width={540}
          height={360}
          className="w-full h-full rounded-md object-cover object-center md:hidden"
        ></Image>
        <Image
          src="/about/aboutus_hero_desktop.png"
          alt="about"
          width={1280}
          height={800}
          className="hidden md:w-full md:h-full md:block md:rounded-md object-cover object-center"
        ></Image>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <p className="">
            {" "}
            Welcome to The Cafe, your ultimate relaxation destination in the
            heart of the city. Our charming tea and coffee shop offers a
            tranquil haven where you can unwind and savor exceptional beverages.
            Whether you’re seeking the perfect espresso or a soothing herbal
            tea, our carefully curated menu has something for everyone. With a
            cozy, inviting atmosphere, comfortable seating, free Wi-Fi, and
            delicious pastries, The Cafe is ideal for catching up with friends,
            reading a book, or enjoying a peaceful moment alone. Experience the
            serenity and excellent drinks that await you at The Cafe.
          </p>
          <ul className="[&>li]:before:mr-1 [&>li]:before:content-['・']">
            <li className="flex">
              <span className="font-medium">Address:</span> 123 Maple Street
              Springfield, IL 62704 USA
            </li>
            <li className="flex">
              <span className="font-medium">Phone:</span> 12345678
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-olive font-italiana text-xl text-center md:text-2xl">
            We love to here from you...
          </h4>
          <div className="flex flex-col gap-4">
            <GeneralInput
              label="Name"
              id="name"
              name="name"
              placeholder="Cafe Lover"
            />
            <GeneralInput
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="cafe@example.com"
            />
            <GeneralTextArea
              label="Feedback"
              id="feedback"
              name="feedback"
              placeholder="Enter your feedback here..."
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
