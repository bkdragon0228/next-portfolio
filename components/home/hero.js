import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. Frontend
          <br className="hidden lg:inline-block" />
          개발자 Bkdragon 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          Frontend 개발자를 목표로 공부하고 있습니다. Html, css, Javascript를
          기본으로 React, next.js Typescript 등 성장을 위해 다양한 공부를 하고
          있습니다. 현재 페이지를 통해 저의 블로그나 Github로 이동할 수 있고,
          Notion Database와 연동하여 저장해둔 프로젝트들을 구경할 수 있습니다.
        </p>
        <div className="flex justify-center gap-x-2">
          <Link href="/projects" className="btn-project">
            프로젝트
          </Link>
          <a href="https://velog.io/@bkdragon0228" className="btn-project">
            BLog
          </a>
          <a href="https://github.com/bkdragon0228" className="btn-project">
            Github
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
