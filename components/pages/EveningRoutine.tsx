import React from 'react';
import { HeartIcon } from '../../constants/icons';

interface EveningRoutineProps {
  gratitudeList: string[];
  onGratitudeChange: (newList: string[]) => void;
  onUpdateEveningDone: (done: boolean) => void;
}

const EveningRoutine: React.FC<EveningRoutineProps> = ({ 
  gratitudeList, 
  onGratitudeChange,
  onUpdateEveningDone
}) => {
  const handleTextChange = (index: number, value: string) => {
    const newList = [...gratitudeList];
    newList[index] = value;
    onGratitudeChange(newList);
  };
  
  const handleSave = () => {
    // A simple alert for now. Could be a more sophisticated toast notification.
    alert("감사일기가 저장되었습니다!");
    onUpdateEveningDone(true);
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <HeartIcon className="w-6 h-6" />
          오늘의 감사
        </h2>
        <p className="text-pink-100">세상이 나를 도운 3가지를 찾으세요</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-slate-800 mb-4">오늘 세상이 나를 어떻게 도왔나요?</h3>
        <div className="space-y-4">
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {index + 1}. 
              </label>
              <textarea
                value={gratitudeList[index]}
                onChange={(e) => handleTextChange(index, e.target.value)}
                placeholder="예: 고객과 좋은 대화를 나눴다"
                className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-sky-400"
                rows={2}
              />
            </div>
          ))}
        </div>
        <button 
          onClick={handleSave}
          className="w-full mt-4 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 font-medium transition-colors"
        >
          저장하고 완료하기
        </button>
      </div>

      <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
        <h3 className="font-bold text-slate-800 mb-3">💡 찾기 힌트</h3>
        <ul className="space-y-2 text-slate-700 text-sm list-disc list-inside">
          <li>잘 통했던 고객과의 대화</li>
          <li>우연한 좋은 타이밍</li>
          <li>동료의 작은 도움</li>
          <li>거절했지만 좋은 태도로 대해준 분</li>
          <li>배운 점, 깨달은 점</li>
          <li>건강, 날씨, 작은 행운</li>
        </ul>
      </div>
    </div>
  );
};

export default EveningRoutine;
