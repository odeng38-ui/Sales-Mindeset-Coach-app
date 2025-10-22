import React, { useState } from 'react';
import { emergencyTools } from '../../constants/tools';
import { CheckCircleIcon } from '../../constants/icons';

interface EmergencyToolProps {
  toolKey: 'rejection' | 'anxiety' | 'beforeCall' | 'beforeMeeting';
  onNavigate: (sectionId: string) => void;
}

const EmergencyTool: React.FC<EmergencyToolProps> = ({ toolKey, onNavigate }) => {
    const tool = emergencyTools[toolKey];
    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
      if (currentStep < tool.steps.length) {
        setCurrentStep(currentStep + 1);
      }
    };

    if (!tool) {
        return (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p className="font-bold">오류</p>
                <p>요청한 도구를 찾을 수 없습니다.</p>
            </div>
        );
    }
    
    const isCompleted = currentStep >= tool.steps.length;

    return (
      <div className="space-y-6">
        <div className={`${tool.color} text-white rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center gap-3 mb-2">
            {tool.icon}
            <h2 className="text-2xl font-bold">{tool.title}</h2>
          </div>
          <p className="text-white/90">차근차근 따라하세요</p>
        </div>

        <div className="space-y-4">
          {tool.steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md border-l-4 transition-all duration-300 ${
                index === currentStep && !isCompleted
                  ? 'border-sky-500 ring-2 ring-sky-200' 
                  : index < currentStep 
                    ? 'border-green-500 opacity-60' 
                    : 'border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  index < currentStep ? 'bg-green-500' : 'bg-slate-300 text-slate-600'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-slate-800 mb-2">{step.text}</p>
                  {index === currentStep && !isCompleted && (
                    <button
                      onClick={goToNextStep}
                      className="mt-3 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      {index === tool.steps.length - 1 ? '완료' : '다음 단계'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isCompleted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
            <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-700 mb-2">완료!</h3>
            <p className="text-green-600 mb-4">이제 다시 흐름 속으로 들어가세요</p>
            <button
              onClick={() => onNavigate('dashboard')}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              홈으로 돌아가기
            </button>
          </div>
        )}
      </div>
    );
};

export default EmergencyTool;
