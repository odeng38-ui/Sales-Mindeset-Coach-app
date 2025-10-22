import React, { useState } from 'react';
import { morningRoutineSteps } from '../../constants/tools';
import { CoffeeIcon } from '../../constants/icons';

interface MorningRoutineProps {
  onComplete: () => void;
}

const MorningRoutine: React.FC<MorningRoutineProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showExamples, setShowExamples] = useState(false);

    const goToNextStep = () => {
      if (currentStep < morningRoutineSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowExamples(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onComplete();
      }
    };

    const goToPrevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        setShowExamples(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const currentRoutine = morningRoutineSteps[currentStep];

    const renderStepContent = () => {
      if (currentRoutine.type === "afformation") {
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {currentRoutine.question}
              </h3>
              <p className="text-purple-700 mb-4">
                💡 {currentRoutine.guide}
              </p>
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="text-purple-600 hover:underline text-sm"
              >
                {showExamples ? "힌트 숨기기" : "힌트 보기"}
              </button>
              {showExamples && (
                <div className="mt-4 space-y-2">
                  {currentRoutine.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-purple-700">
                      <span className="text-purple-400">•</span>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-slate-200">
              <p className="text-slate-600 mb-3">1분간 실제 증거를 떠올려보세요...</p>
              <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                조용히 생각하는 시간
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <p className="text-sm text-green-600 mb-2">의식이 납득했나요?</p>
              <p className="text-xl font-bold text-green-800">
                "{currentRoutine.conclusion}"
              </p>
            </div>
          </div>
        );
      }

      if (currentRoutine.type === "affirmation") {
        return (
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <p className="text-green-700 mb-4">{currentRoutine.guide}</p>
              {currentRoutine.affirmations.map((aff, idx) => (
                <div key={idx} className="mb-4 bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-lg font-medium text-slate-800 mb-2">{aff}</p>
                  <p className="text-sm text-slate-500">→ 10회 반복</p>
                </div>
              ))}
            </div>
          </div>
        );
      }

      if (currentRoutine.type === "visualization") {
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <p className="text-blue-700 mb-4 font-medium">{currentRoutine.guide}</p>
              <div className="space-y-3">
                {currentRoutine.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <span className="text-blue-500 font-bold">{idx + 1}.</span>
                    <span className="text-slate-800">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center">
                <p className="text-blue-800">타이머: 2분</p>
              </div>
            </div>
          </div>
        );
      }

      if (currentRoutine.type === "release") {
        return (
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
              <p className="text-yellow-800 mb-4 font-medium">{currentRoutine.guide}</p>
              {currentRoutine.mantras.map((mantra, idx) => (
                <div key={idx} className="mb-3 bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="text-slate-800">✓ {mantra}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return null;
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <CoffeeIcon className="w-8 h-8" />
            <h2 className="text-2xl font-bold">아침 루틴</h2>
          </div>
          <p className="text-orange-100">출근 전 5분, 하루를 준비하세요</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center justify-between mb-1 text-sm text-slate-500">
            <span>진행도</span>
            <span>{currentStep + 1} / {morningRoutineSteps.length}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div 
              className="bg-sky-500 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${((currentStep + 1) / morningRoutineSteps.length) * 100}%` }}>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-slate-800 mb-1">
            {currentRoutine.title}
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-6"></div>
          
          {renderStepContent()}

          <div className="flex gap-3 mt-6">
            {currentStep > 0 && (
              <button
                onClick={goToPrevStep}
                className="flex-1 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50"
              >
                이전
              </button>
            )}
            <button
              onClick={goToNextStep}
              className="flex-1 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600"
            >
              {currentStep < morningRoutineSteps.length - 1 ? '다음' : '완료! ✓'}
            </button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>💡 팁:</strong> 각 단계를 서두르지 마세요. 
            의식이 진짜로 납득할 때까지 증거를 찾는 것이 핵심입니다.
          </p>
        </div>
      </div>
    );
};

export default MorningRoutine;
