import MenuPage from "@/modules/Menu/MenuPage";
import News from "@/modules/Home/News";

export default function Menu() {
  return (
    <>
      <div className="relative">
        <MenuPage />
        <News />

      </div>
    </>
  );
}