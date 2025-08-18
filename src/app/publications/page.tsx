import Breadcrumb from "@/components/breadcrumb";
import Heading from "@/components/heading";
import PageHeader from "@/components/page-header";
import PublicationItem from "@/components/publication-item";
import SiteHeader from "@/components/site-header";

import * as publications from "../../../public/publications.json";

export default function Publications() {
  const pageName = "発表論文";
  return (
    <>
      <SiteHeader pageName={pageName} />
      <Breadcrumb pageName={pageName} />
      <PageHeader pageName={pageName} />
      <ContentArea />
    </>
  );
}

function ContentArea() {
  return (
    <main className="flex flex-col gap-[120px] py-[120px] w-[880px] m-auto">
      <Articles />
      <Reviews />
      <Patents />
    </main>
  );
}

// 以下の各リストではmapに付与すべきkeyをjsonに用意できていないので一旦値が一意になる適当なプロパティを割り当てている

function Articles() {
  return (
    <section>
      <ol>
        {publications.articles.map((v) => (
          <li key={v.title}>
            <PublicationItem
              authors={v.authors}
              title={v.title}
              journal={v.journal}
              doi={v.doi}
              year={v.year}
              additional={v.additional}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Reviews() {
  return (
    <section className="flex flex-col gap-[40px]">
      <Heading title="総説" />
      <ol>
        {publications.reviews.map((v) => (
          <li key={v.title}>
            <PublicationItem
              authors={v.authors}
              title={v.title}
              journal={v.journal}
              year={v.year}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Patents() {
  return (
    <section className="flex flex-col gap-[40px]">
      <Heading title="特許" />
      <ol>
        {publications.patents.map((v) => (
          <li key={v}>
            <div className="py-[20px] border-separator-secondary border-b-[1px] text-label-secondary text-[16px] leading-[24px]">
              {v}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
