import type { Section } from '../types';
import { 
    BrainIcon, HeartIcon, UsersIcon, PhoneIcon, BookOpenIcon, 
    RocketLaunchIcon, ShieldCheckIcon, BeakerIcon, ClipboardDocumentCheckIcon, 
    IdentificationIcon, TrendingUpIcon, CoffeeIcon, MoonIcon, AlertCircleIcon, 
    ZapIcon, SparklesIcon, CheckCircleIcon
} from './icons';

import Dashboard from '../components/pages/Dashboard';
import MorningRoutine from '../components/pages/MorningRoutine';
import EveningRoutine from '../components/pages/EveningRoutine';
import EmergencyTool from '../components/pages/EmergencyTool';
import AffirmationsLibrary from '../components/pages/AffirmationsLibrary';

export const sections: Section[] = [
  // Group: Daily Tools
  {
    id: 'dashboard',
    title: '홈 (대시보드)',
    icon: TrendingUpIcon,
    group: '매일의 도구',
    component: Dashboard,
  },
  {
    id: 'morning-routine',
    title: '아침 루틴',
    icon: CoffeeIcon,
    group: '매일의 도구',
    component: MorningRoutine,
  },
  {
    id: 'evening-routine',
    title: '저녁 루틴 (감사일기)',
    icon: MoonIcon,
    group: '매일의 도구',
    component: EveningRoutine,
  },
  
  // Group: Emergency Kit
  { 
    id: 'emergency-rejection', 
    title: '거절 받았을 때', 
    icon: AlertCircleIcon, 
    component: EmergencyTool, 
    props: { toolKey: 'rejection' }, 
    group: '긴급 상황 도구',
  },
  { 
    id: 'emergency-anxiety', 
    title: '불안할 때', 
    icon: ZapIcon, 
    component: EmergencyTool, 
    props: { toolKey: 'anxiety' }, 
    group: '긴급 상황 도구'
  },
  { 
    id: 'emergency-before-call', 
    title: '전화하기 전', 
    icon: PhoneIcon, 
    component: EmergencyTool, 
    props: { toolKey: 'beforeCall' }, 
    group: '긴급 상황 도구'
  },
  { 
    id: 'emergency-before-meeting', 
    title: '고객 만나기 전', 
    icon: UsersIcon, 
    component: EmergencyTool, 
    props: { toolKey: 'beforeMeeting' }, 
    group: '긴급 상황 도구'
  },
  
  // Group: Mindset Library
  {
    id: 'affirmations-library',
    title: '어포메이션 & 확언',
    icon: SparklesIcon,
    group: '마인드셋 원칙',
    component: AffirmationsLibrary,
  },
  {
    id: 'importance',
    title: '중요성 내려놓기',
    icon: HeartIcon,
    group: '마인드셋 원칙',
    content: [
      { type: 'h2', content: '문제: 중요성이 높으면 균형력이 작동' },
      { type: 'h3', content: '❌ 중요성 높은 상태 (막힘):' },
      { type: 'list', content: ['"이 계약 꼭 성사시켜야 해!" → 고객이 압박감 느낌', '"이번 달 목표 달성해야 해!" → 불안 → 어색한 태도', '"거절당하면 어쩌지?" → 두려움이 고객에게 전달됨'] },
      { type: 'h3', content: '✓ 중요성 낮은 상태 (흐름):' },
      { type: 'list', content: ['"이 분에게 맞으면 좋고, 아니면 더 맞는 분이 있겠지"', '"나는 정보를 제공하고, 선택은 고객의 몫"', '"거절도 나를 맞는 고객에게 가까이 가게 하는 과정"'] },
      { type: 'quote', title: '실천법: 고객 만나기 전 (30초 의식)', content: ['심호흡 3번', '"이 계약의 중요성을 내려놓는다"', '"세상이 나를 보살펴주니 괜찮다"', '"흐름을 타자" (힘 빼기)'] }
    ]
  },
  {
    id: 'meeting',
    title: '고객 미팅 중 적용',
    icon: UsersIcon,
    group: '마인드셋 원칙',
    content: [
      { type: 'h2', content: 'A. 고객과의 대화' },
      { type: 'h3', content: '억지로 설득하지 않기 (내부 의도 ❌):' },
      { type: 'list', content: ['"보험 꼭 드셔야 합니다!" → 저항 생김'] },
      { type: 'h3', content: '흐름 타기 (외부 의도 ✓):' },
      { type: 'list', content: ['"보험에 대해 어떻게 생각하세요?"', '"현재 가장 걱정되는 부분이 있으세요?"', '"가족 중에 아프신 분 계셨나요?"', '→ 고객이 스스로 필요성 느끼게'] },
      { type: 'h2', content: 'B. 거절 받았을 때 (가장 중요!)' },
      { type: 'quote', title: '즉시 어포메이션 활용:', content: [
          '거절 순간:',
          '1. "왜 이 거절이 나를 위한 것인가?"',
          '   → 의식: "이 분과는 안 맞았나보다"',
          '   → 의식: "더 맞는 고객이 기다리고 있다"',
          '   → 잠재의식: 거절 = 나쁜 것 ❌, 거절 = 안내판 ✓',
          '2. 심호흡 후: "세상은 나를 보살펴준다"',
          '   → 감정 리셋',
          '3. "다음 고객은 왜 더 좋은 인연인가?"',
          '   → 기대감으로 전환'
        ] },
      { type: 'p', content: '이렇게 하면 거절이 쌓여도 멘탈이 무너지지 않습니다.'}
    ]
  },
  {
    id: 'goal-setting',
    title: '목표 설정 방식',
    icon: RocketLaunchIcon,
    group: '마인드셋 원칙',
    content: [
      { type: 'h2', content: '기존 목표 (중요성 높음 = 압박):' },
      { type: 'p', content: '"이번 달 10건 계약해야 해!" → 불안 → 부자연스러움 → 역효과' },
      { type: 'h2', content: '트랜서핑 목표 (흐름):' },
      { type: 'h3', content: '슬라이드 만들기 (목표 심상화):' },
      { type: 'list', content: [
          '눈 감고 상상: "10건 계약이 자연스럽게 이루어진 나"', 
          '과정이 아니라 결과 상태 느끼기', 
          '"이미 이루어졌다"는 느낌 갖기',
          '어떻게 이루어질지는 세상에 맡기기'
        ] 
      },
      { 
        type: 'quote', 
        title: '✨ 시각화 도우미: 더 생생하게 느끼는 법', 
        content: [
          '아래 가이드를 따라 오감을 활용하여 성공 장면을 영화처럼 만들어보세요.',
          '',
          '1. 계약서에 서명하는 장면',
          '  - 시각: 계약서의 글씨, 내 이름이 적힐 빈 칸, 펜의 모양과 색깔을 선명하게 보세요.',
          '  - 촉각: 손에 쥔 펜의 매끄러운 감촉, 종이 위를 미끄러지는 펜촉의 느낌, 책상의 단단함을 느껴보세요.',
          '  - 청각: 펜이 종이에 사각거리는 소리, 주변의 조용한 분위기나 만족스러운 한숨 소리를 들어보세요.',
          '',
          '2. 고객과 악수하는 장면',
          '  - 시각: 진심으로 기뻐하는 고객의 표정, 눈맞춤, 만족스러운 미소를 보세요.',
          '  - 촉각: 상대방의 손을 잡았을 때의 단단함과 따뜻한 온도를 느껴보세요.',
          '  - 청각: 고객의 목소리로 "정말 감사합니다. 덕분에 든든하네요" 라고 말하는 소리를 생생하게 들어보세요.',
          '',
          '3. 성공의 순간을 느끼는 장면',
          '  - 감정: 계약이 성사된 후 밀려오는 안도감, 가슴 벅찬 기쁨, 스스로에 대한 뿌듯함을 온몸으로 느껴보세요.',
          '  - 신체 반응: 입가에 저절로 번지는 미소, 가슴이 따뜻해지는 느낌, 가벼운 흥분으로 심장이 살짝 빠르게 뛰는 것을 느껴보세요.'
        ] 
      },
      { type: 'h3', content: '매일 2분씩 심상화:' },
      { type: 'list', content: [
          '위에서 만든 생생한 슬라이드 장면을 떠올리세요.',
          '계약서에 서명하는 순간', 
          '고객이 감사하는 모습', 
          '목표 달성 후 편안한 나의 모습'
        ] 
      },
      { type: 'quote', content: ['핵심: 과정에 집착하지 않고 결과만 의도하기'] }
    ]
  },
  {
    id: 'rejection-immunity',
    title: '거절 면역력 키우기',
    icon: ShieldCheckIcon,
    group: '마인드셋 원칙',
    content: [
      { type: 'h2', content: '거절을 재정의하는 어포메이션' },
      { type: 'h3', content: '기존 프레임: "거절 = 실패 = 내가 부족해"' },
      { type: 'h3', content: '새 프레임 (어포메이션):' },
      { type: 'quote', content: [
        '"왜 거절은 나를 성공으로 이끄는 단계인가?"',
        '→ 답 찾기:',
        '   - 통계적으로 10번 중 1-2번 성사',
        '   - 거절마다 스킬 향상',
        '   - 안 맞는 고객 거르는 과정',
        '   - 맞는 고객에게 가까워지는 것',
        '의식 납득: "아, 거절은 필수 과정이구나!"',
        '잠재의식: 거절에 대한 두려움 소멸'
      ]},
      { type: 'h2', content: '거절 카운트를 목표로 (역발상)' },
      { type: 'list', content: ['"오늘 거절 10번 받기"를 목표로', '거절을 받으면: "좋아, 목표 달성!"', '중요성 완전히 내려놓음', '역설적으로 성약률 올라감'] }
    ]
  },
  {
    id: 'scenarios',
    title: '실전 시나리오',
    icon: BeakerIcon,
    group: '마인드셋 원칙',
    content: [
      {
        type: 'scenario',
        title: '시나리오 1: 첫 고객 방문 전',
        content: [
          '불안한 마음 → 심호흡 3번',
          '어포메이션:',
          '  "왜 이 분은 지금 나를 필요로 하는가?"',
          '  "왜 세상은 우리를 연결시켰는가?"',
          '  "내가 이 분에게 줄 수 있는 가치는 무엇인가?"',
          '확언:',
          '  "세상은 나를 보살펴준다"',
          '  "완벽한 타이밍이다"',
          '중요성 내려놓기:',
          '  "계약되면 좋고, 안 되면 더 맞는 분이 있다"',
          '→ 자연스럽고 진정성 있는 태도로 만남'
        ]
      },
      {
        type: 'scenario',
        title: '시나리오 2: 연속 거절 후',
        content: [
            '멘탈 흔들림 → 즉시 멈추기',
            '어포메이션:',
            '  "왜 이 거절들이 나를 더 큰 성공으로 이끄는가?"',
            '  "이 과정에서 내가 배우는 것은 무엇인가?"',
            '  "왜 다음 만남이 더 좋은 결과를 가져올까?"',
            '증거 찾기:',
            '  - 대화 스킬 향상됨',
            '  - 고객 유형 파악 능력 생김',
            '  - 불필요한 고객 걸러짐',
            '확언:',
            '  "모든 일에는 숨겨진 선물이 있다"',
            '  "나는 흐름을 타고 있다"',
            '→ 다시 평정심 회복'
        ]
      },
      {
        type: 'scenario',
        title: '시나리오 3: 월말 목표 압박',
        content: [
            '불안감 증가 → 중요성 경보!',
            '즉시 어포메이션:',
            '  "왜 목표를 내려놓으면 오히려 달성될까?"',
            '  "왜 긴장을 풀면 고객이 더 편안해할까?"',
            '  "왜 세상은 나에게 필요한 것을 주는가?"',
            '의식 납득시키기:',
            '  - 과거 편안할 때 성과 좋았던 경험 떠올리기',
            '  - 압박감 있을 때 오히려 안 된 경험 떠올리기',
            '확언:',
            '  "중요성을 내려놓으니 모든 것이 쉽게 풀린다"',
            '  "나는 그저 최선을 다하고, 결과는 세상에 맡긴다"',
            '→ 자연스러운 영업으로 돌아감'
        ]
      }
    ]
  },
  {
    id: 'daily-routine-summary',
    title: '매일 루틴 요약',
    icon: ClipboardDocumentCheckIcon,
    group: '마인드셋 원칙',
    content: [
      { type: 'checklist', title: '아침 (5분)', content: ['어포메이션 3개 (Why 질문 + 증거 찾기)', '"세상은 나를 보살펴준다" 10회', '오늘의 슬라이드 심상화 2분'] },
      { type: 'checklist', title: '고객 만나기 전 (30초)', content: ['심호흡 3번', '중요성 내려놓기', '"흐름을 탄다" 의도'] },
      { type: 'checklist', title: '거절 받은 직후 (1분)', content: ['"왜 이것이 나를 위한 것인가?" 질문', '"세상은 나를 보살펴준다" 3회', '다음 기회에 대한 기대감'] },
      { type: 'checklist', title: '저녁 (5분)', content: ['감사 일기: 오늘 받은 도움 3가지', '배운 점 정리', '내일의 의도 설정'] }
    ]
  },
  {
    id: 'core-principles',
    title: '핵심 원칙 카드',
    icon: IdentificationIcon,
    group: '마인드셋 원칙',
    content: [
      {type: 'p', content: '지갑에 넣고 다닐 수 있는 핵심 원칙 카드입니다. 카드를 클릭하여 뒷면을 확인해보세요.'}
    ]
  }
];

export const corePrinciples = {
    front: [
        '"세상은 나를 보살펴준다"',
        '"중요성을 내려놓으면 쉽게 풀린다"',
        '"모든 거절에는 숨겨진 선물이 있다"'
    ],
    back: {
        title: '불안할 때:',
        steps: [
            '1. 심호흡 3번',
            '2. "왜?" 질문하기',
            '3. 증거 찾기',
            '4. 힘 빼고 흐름 타기'
        ]
    }
}