const quotes = [
  {
    quote:
      "용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
    author: "키케로",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라.",
    author: "헨리포드",
  },
  {
    quote:
      "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "루소",
  },
  {
    quote:
      "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리포드",
  },
  {
    quote:
      "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote: "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다.",
    author: "소포클레스",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = ` - ${randomQuote.author}`;
