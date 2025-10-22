import React from 'react';
import { AlertCircleIcon, ZapIcon, PhoneIcon, UsersIcon, HeartIcon, TrendingUpIcon, CoffeeIcon, MoonIcon, CheckCircleIcon } from './icons';

export const afformationsList = [
    "왜 사람들은 나를 신뢰하는가?",
    "왜 나는 고객에게 도움이 되는가?",
    "왜 오늘 좋은 고객을 만나게 되는가?",
    "왜 거절은 나에게 더 나은 기회로 이어지는가?",
    "왜 세상은 나를 보살펴주고 있는가?",
    "왜 중요성을 내려놓으면 쉽게 풀리는가?",
    "왜 나는 완벽한 타이밍에 완벽한 고객을 만나는가?",
];

export const affirmationsList = [
    "세상은 나를 보살펴준다",
    "모든 일에는 나를 위한 숨겨진 선물이 있다",
    "나는 흐름을 타고 원하는 곳으로 자연스럽게 이동한다",
    "중요성을 내려놓으니 모든 것이 쉽게 풀린다",
];

export const morningRoutineSteps = [
    {
      type: "afformation",
      title: "어포메이션 1: 신뢰",
      question: "왜 사람들은 나를 신뢰하는가?",
      guide: "과거 작은 경험들 떠올리기",
      examples: ["친구의 신뢰", "가족의 믿음", "약속을 지킨 경험", "진심으로 도운 순간"],
      conclusion: "아, 나는 신뢰할 만한 사람이구나"
    },
    {
      type: "afformation",
      title: "어포메이션 2: 가치",
      question: "왜 나는 고객에게 도움이 되는가?",
      guide: "보험의 실제 가치 떠올리기",
      examples: ["가족 보호", "위기 대비", "경제적 안정", "마음의 평화"],
      conclusion: "내가 하는 일은 정말 중요하구나"
    },
    {
      type: "afformation",
      title: "어포메이션 3: 오늘의 만남",
      question: "왜 오늘 좋은 고객을 만나게 되는가?",
      guide: "세상이 나를 보살펴준다는 믿음 활성화",
      examples: ["우연한 좋은 만남들", "타이밍이 맞았던 경험", "자연스럽게 이어진 인연"],
      conclusion: "우연이 아니라 흐름이 있다"
    },
    {
      type: "afformation",
      title: "어포메이션 4: 거절의 의미",
      question: "왜 거절은 나에게 더 나은 기회로 이어지는가?",
      guide: "과거 거절 후 더 좋은 일 있었던 경험 떠올리기",
      examples: ["거절 후 더 좋은 계약", "안 맞는 고객 거른 것", "배운 점", "더 성장한 나"],
      conclusion: "거절도 나를 위한 것이구나"
    },
    {
      type: "affirmation",
      title: "확언 반복",
      affirmations: [
        "세상은 나를 보살펴준다",
        "나는 고객에게 진정한 도움을 준다",
        "완벽한 타이밍에 완벽한 고객을 만난다"
      ],
      guide: "각 확언을 10회씩 소리내어 반복하세요"
    },
    {
      type: "visualization",
      title: "목표 슬라이드 심상화",
      guide: "눈을 감고 2분간 상상하세요",
      steps: [
        "계약서에 서명하는 순간",
        "고객이 감사하며 미소짓는 모습",
        "목표 달성 후 편안하고 뿌듯한 나의 모습",
        "이미 이루어진 느낌으로"
      ]
    },
    {
      type: "release",
      title: "중요성 내려놓기",
      guide: "오늘 하루 마음에 새기기",
      mantras: [
        "계약에 집착하지 않는다",
        "나는 정보를 제공하고, 선택은 고객의 몫",
        "거절도 나를 맞는 고객에게 가까이 가게 하는 과정",
        "세상이 나를 보살펴주니 괜찮다"
      ]
    }
];

export const emergencyTools = {
    rejection: {
      title: "거절 받았을 때",
      // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
      icon: React.createElement(AlertCircleIcon, { className: "w-8 h-8" }),
      color: "bg-red-500",
      steps: [
        { type: "breath", text: "심호흡 3번 (천천히)" },
        { type: "question", text: "왜 이 거절이 나를 위한 것인가?" },
        { type: "evidence", text: "증거 찾기: 이 거절로 내가 얻은 것은?" },
        { type: "affirmation", text: "세상은 나를 보살펴준다 (3번)" },
        { type: "next", text: "다음 고객이 더 좋은 이유는?" },
      ]
    },
    anxiety: {
      title: "불안할 때",
      // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
      icon: React.createElement(ZapIcon, { className: "w-8 h-8" }),
      color: "bg-yellow-500",
      steps: [
        { type: "breath", text: "심호흡 3번" },
        { type: "question", text: "무엇에 중요성을 두고 있는가?" },
        { type: "release", text: "중요성 내려놓기" },
        { type: "affirmation", text: "세상은 나를 보살펴준다" },
        { type: "flow", text: "흐름에 맡긴다" },
      ]
    },
    beforeCall: {
      title: "전화하기 전",
      // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
      icon: React.createElement(PhoneIcon, { className: "w-8 h-8" }),
      color: "bg-blue-500",
      steps: [
        { type: "question", text: "왜 이 분은 나의 전화를 기다렸을까?" },
        { type: "affirmation", text: "세상은 나를 보살펴준다" },
        { type: "release", text: "결과에 대한 집착 내려놓기" },
        { type: "breath", text: "심호흡 1번 후 힘 빼고 전화" },
      ]
    },
    beforeMeeting: {
      title: "고객 만나기 전",
      // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
      icon: React.createElement(UsersIcon, { className: "w-8 h-8" }),
      color: "bg-green-500",
      steps: [
        { type: "question", text: "왜 이 분과 연결되었을까?" },
        { type: "question", text: "내가 이 분에게 줄 수 있는 가치는?" },
        { type: "release", text: "계약 집착 내려놓기" },
        { type: "affirmation", text: "완벽한 타이밍이다" },
        { type: "breath", text: "심호흡 3번 후 자연스럽게" },
      ]
    }
};