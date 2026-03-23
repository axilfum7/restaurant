import Hero from "@/modules/Home/Hero";
import PopularMeals from "@/modules/Home/PopularMeal";
import WhyUs from "@/modules/Home/WhyUs";
import News from "@/modules/Home/News";
import Booking from "@/modules/Home/Booking";

export default function Home() {
  return (
    <>
    <Hero/>
    <PopularMeals />
      <Booking />
      <WhyUs/>
      <News/>

    </>
  );
}
