import Breadcrumb from "@/components/breadcrumb";
import Heading from "@/components/heading";
import PageHeader from "@/components/page-header";
import Profile from "@/components/profile";
import SiteHeader from "@/components/site-header";

import * as members from "../../../public/members.json";
import * as profile from "../../../public/profile.json";

import Image from "next/image";

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
    <main className="flex flex-col gap-[200px] py-[120px] w-[880px] m-auto">
      <PrincipalInvestigator />
      <StaffAndStudents />
    </main>
  );
}

function PrincipalInvestigator() {
  return (
    <section>
      <Heading title="主任研究者" />
      <div className="flex gap-[20px] px-[80px] pt-[80px] py-[120px] mt-[80px] bg-surface-secondary">
        {
          // todo: /publicにpi_photo.pngを配置
        }
        <Image
          src="/pi_photo.png"
          alt="主任研究者の画像"
          width={200}
          height={200}
        />
        <div className="flex-1 flex flex-col gap-[10px] px-[40px]">
          <div className="text-label-primary font-serif text-[32px]">
            {
              // positionはただの職位であってカテゴリの見出しではないためh4タグは使用しない
              members.principal_investigator.position
            }
          </div>
          <div className="text-center text-label-primary font-serif text-[64px]">
            {members.principal_investigator.name}
          </div>
          <div className="border-separator-secondary border-b-[1px]" />
          <div className="flex justify-end items-end gap-[10px] text-label-secondary body-lg">
            <div className="w-[24px] h-[24px]">
              <MailIcon />
            </div>
            {members.principal_investigator.email}
          </div>
        </div>
      </div>
      <div className="w-3/4 mt-[-80px] ml-auto mr-[20px]">
        <Profile bio={profile.bio} award={profile.award} />
      </div>
    </section>
  );
}

function StaffAndStudents() {
  return (
    // ここでは秘書や大学院生といった肩書きはカテゴリを形成するのでh4タグを当てる
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

function MailIcon() {
  // <?xml version="1.0" encoding="utf-8"?>
  // <!-- Generator: Adobe Illustrator 15.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      // width="24px"
      // height="24px"
      viewBox="0 0 512 512"
      // style="enable-background:new 0 0 512 512;"
      fill="#df5656"
      xmlSpace="preserve"
    >
      {/*
      <style type="text/css">
        <![CDATA[
        .st0{fill:#4B4B4B;}
        ]]>
      </style>
      */}
      <g>
        <path
          className="st0"
          d="M496.563,68.828H15.438C6.922,68.828,0,75.75,0,84.281v30.391l256,171.547l256-171.563V84.281
		C512,75.75,505.078,68.828,496.563,68.828z"
        />
        <path
          className="st0"
          d="M0,178.016v203.391c0,34.125,27.641,61.766,61.781,61.766h388.438c34.141,0,61.781-27.641,61.781-61.766V178
		L256,349.563L0,178.016z"
        />
      </g>
    </svg>
  );
}
