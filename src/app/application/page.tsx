import Breadcrumb from "@/components/breadcrumb";
import PageHeader from "@/components/page-header";
import SiteHeader from "@/components/site-header";

export default function Application() {
  return (
    <>
      <SiteHeader pageName="院生募集" />
      <Breadcrumb pageName="院生募集" />
      <PageHeader pageName="院生募集" />
      <ContentArea />
    </>
  );
}

function ContentArea() {
  return (
    <main className="text-center py-[100px] text-label-primary body-md">
      <div className="inline-block text-left">
        当研究室では現在大学院生を募集しておりません。
        <br />
        ご了承のほど何卒よろしくお願いいたします。
      </div>
    </main>
  );
}
