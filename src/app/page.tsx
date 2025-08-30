import NewsArea from "@/components/news-area";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-[880px] m-auto">
        <NewsArea />
      </main>
    </>
  );
}

/*
function HeroArea() {
  return;
}
*/
