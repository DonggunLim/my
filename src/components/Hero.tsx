import LinkBar from "./LinkBar";

export default function Hero() {
  return (
    <header className="flex gap-4 py-24">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-3xl font-extrabold">im Donggun</p>
          <p className="text-xl font-semibold">Web Frontend Developer</p>
          <p className="text-sm font-semibold my-4">
            포트폴리오 웹사이트입니다.
          </p>
        </div>
        <LinkBar />
      </div>
      <div className="flex-1 flex flex-col gap-y-2 leading-6 text-sm font-semibold">
        <p className="">
          안녕하세요. 프로트엔드 개발자 되기 위해서 공부중인 임동건 입니다.
          개발에 대한 첫 입문은 2022년 3개월간 개발분야에 공부 해볼수있는
          부트캠프에서 프론트엔드 역할이었습니다.
        </p>
        <p>
          많은 것을 배울 수 있었던 부트캠프 이후에 스스로 부족함을 느꼈습니다.
          현재는 혼자서 강의와 도서를 통해서 배운 지식으로 개인 프로젝트와
          취업을 조금씩 준비 하고 있습니다. 요즘은 디자인에 대한 관심이 조금씩
          생겨 피그마에 관심을두고 조금씩 배워보면서 써보고 있습니다.
        </p>
        <p>
          현재 보시는 웹사이트는 저의 포트폴리오 입니다. 많은 부분에서 미흡한
          부분이 있습니다. 부족한 부분 채워가면서 조금씩 발전하는 모습을
          담아보겠습니다.
        </p>
      </div>
    </header>
  );
}
