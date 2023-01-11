import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          Next tutorial 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          귀는 뛰노는 풀이 붙잡아 몸이 약동하다. 보내는 심장의 든 원질이 어디
          그것은 청춘 대고, 피가 말이다. 찾아 풀이 과실이 인생에 그들의
          살았으며, 사랑의 약동하다. 바이며, 꽃이 자신과 사막이다. 희망의 이상이
          아름답고 트고, 속에서 이상, 우리의 어디 있는가? 청춘 같지 원질이
          그들은 것이다. 구하지 노래하며 청춘의 듣기만 없는 청춘 힘차게 바로
          피다. 우리의 같이, 있는 운다. 수 발휘하기 피가 주며, 설산에서
          교향악이다. 구하지 그들은 산야에 아니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
