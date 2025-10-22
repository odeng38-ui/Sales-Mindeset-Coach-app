import React from 'react';
import { emergencyTools } from '../../constants/tools';
import { 
    CheckCircleIcon, CoffeeIcon, MoonIcon, HeartIcon, UsersIcon, PhoneIcon, ZapIcon, AlertCircleIcon
} from '../../constants/icons';

interface DashboardProps {
  contractCount: number;
  rejectionCount: number;
  morningDone: boolean;
  eveningDone: boolean;
  onIncrementContract: () => void;
  onIncrementRejection: () => void;
  onUpdateMorningDone: (done: boolean) => void;
  onUpdateEveningDone: (done: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  contractCount,
  rejectionCount,
  morningDone,
  eveningDone,
  onIncrementContract,
  onIncrementRejection,
  onUpdateMorningDone,
  onUpdateEveningDone,
  onNavigate,
}) => {
  
  const toolIcons: Record<string, React.ReactNode> = {
    rejection: <AlertCircleIcon className="w-6 h-6" />,
    anxiety: <ZapIcon className="w-6 h-6" />,
    beforeCall: <PhoneIcon className="w-6 h-6" />,
    beforeMeeting: <UsersIcon className="w-6 h-6" />,
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">오늘도 흐름을 타고 있습니다</h2>
        <p className="text-blue-100">세상은 당신을 보살펴주고 있습니다</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
          <div className="text-sm text-gray-600 mb-1">오늘의 계약</div>
          <div className="text-3xl font-bold text-green-600">{contractCount}</div>
          <button 
            onClick={onIncrementContract}
            className="mt-2 text-sm text-green-600 hover:underline"
          >
            + 추가
          </button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
          <div className="text-sm text-gray-600 mb-1">오늘의 거절</div>
          <div className="text-3xl font-bold text-blue-600">{rejectionCount}</div>
          <button 
            onClick={onIncrementRejection}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            + 추가
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <CheckCircleIcon className="w-5 h-5 text-sky-500" />
          오늘의 루틴
        </h3>
        <div className="space-y-3">
          <div className={`p-4 rounded-lg border-2 transition-colors ${morningDone ? 'bg-green-50 border-green-500' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={morningDone}
                  onChange={(e) => onUpdateMorningDone(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                />
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <CoffeeIcon className="w-4 h-4 text-orange-500" />
                    아침 루틴 (5분)
                  </div>
                  <div className="text-sm text-gray-600">어포메이션 + 확언 + 심상화</div>
                </div>
              </div>
              {!morningDone && (
                <button
                  onClick={() => onNavigate('morning-routine')}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                >
                  시작
                </button>
              )}
            </div>
          </div>
          <div className={`p-4 rounded-lg border-2 transition-colors ${eveningDone ? 'bg-green-50 border-green-500' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={eveningDone}
                      onChange={(e) => onUpdateEveningDone(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                    />
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        <MoonIcon className="w-4 h-4 text-indigo-500" />
                        저녁 루틴 (5분)
                      </div>
                      <div className="text-sm text-gray-600">감사 일기 + 복습</div>
                    </div>
                </div>
                {!eveningDone && (
                  <button
                    onClick={() => onNavigate('evening-routine')}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600"
                  >
                    시작
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold mb-4">긴급 상황 도구</h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(emergencyTools).map(([key, tool]) => (
            <button
              key={key}
              onClick={() => onNavigate(`emergency-${key}`)}
              className={`${tool.color} text-white p-4 rounded-lg font-medium flex items-center gap-2 justify-center hover:opacity-90 transition-opacity`}
            >
              {toolIcons[key]}
              <span className="text-sm">{tool.title}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
        <h3 className="text-lg font-bold mb-4">💎 오늘의 핵심 원칙</h3>
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur rounded-lg p-3">
            <p className="font-medium">"세상은 나를 보살펴준다"</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-3">
            <p className="font-medium">"중요성을 내려놓으면 쉽게 풀린다"</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-3">
            <p className="font-medium">"모든 거절에는 숨겨진 선물이 있다"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
