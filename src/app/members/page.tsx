import Breadcrumb from "@/components/breadcrumb";
import Heading from "@/components/heading";
import PageHeader from "@/components/page-header";
import SiteHeader from "@/components/site-header";

import * as members from "../../../public/members.json";

export default function Members() {
  const pageName = "メンバー";
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
    <main className="flex flex-col gap-[126px] px-[200px] py-[120px]">
      <StaffAndStudents />
    </main>
  );
}

/*
function PrincipalInvestigator() {
  return (
    <section>
      <Heading title="主任研究者" />
    </section>
  );
}
*/

function StaffAndStudents() {
  return (
    <section className="flex flex-col gap-[80px]">
      <Heading title="スタッフ・学生" />
      <div className="flex justify-center gap-[120px] py-[80px] bg-surface-secondary">
        <section className="flex flex-col w-[160px] gap-[48px]">
          <h4 className="font-serif text-[40px]">秘書</h4>
          <ul className="flex flex-col gap-[60px] body-lg">
            {members.staff_and_students.administrative_staff.map((v) => (
              <li key={v.id}>{v.name}</li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col w-[160px] gap-[48px]">
          <h4 className="font-serif text-[40px]">大学院生</h4>
          <ul className="flex flex-col gap-[60px] body-lg">
            {members.staff_and_students.graduate_students.map((v) => (
              <li key={v.id}>{v.name}</li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col w-[160px] gap-[48px]">
          <h4 className="font-serif text-[40px]">学部学生</h4>
          <ul className="flex flex-col gap-[60px] body-lg">
            {members.staff_and_students.undergraduate_students.map((v) => (
              <li key={v.id}>{v.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
