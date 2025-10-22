import React, { useState, useRef } from 'react';
import { afformationsList, affirmationsList } from '../../constants/tools';

interface AffirmationsLibraryProps {
  customAfformations: string[];
  onCustomAfformationsChange: (newAfformations: string[]) => void;
}

const AffirmationsLibrary: React.FC<AffirmationsLibraryProps> = ({
  customAfformations,
  onCustomAfformationsChange,
}) => {
    const customAfformationRef = useRef<HTMLTextAreaElement>(null);

    const handleAddCustomAfformation = () => {
        const value = customAfformationRef.current?.value || '';
        if (value.trim()) {
            onCustomAfformationsChange([...customAfformations, value.trim()]);
            if (customAfformationRef.current) {
                customAfformationRef.current.value = '';
            }
        } else {
            alert('내용을 입력해주세요!');
        }
    }

    const handleRemoveCustomAfformation = (index: number) => {
        onCustomAfformationsChange(customAfformations.filter((_, i) => i !== index));
    }

    return (
      <div className="space-y-8">
        {/* Afformations Section */}
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white mb-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-2">어포메이션 (질문)</h2>
                <p className="text-purple-100">질문하고, 증거를 찾고, 납득시키세요</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md mb-6 border border-slate-200">
                <h3 className="font-bold mb-4 text-lg text-slate-800">어포메이션 사용법</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>질문을 천천히 소리내어 읽기</li>
                    <li>1분간 멈춰서 실제 증거 찾기</li>
                    <li>의식이 납득할 때까지 증거 생각하기</li>
                    <li>"그렇구나!"라는 느낌이 들면 성공</li>
                </ol>
            </div>

            <div className="space-y-3">
                {afformationsList.map((afformation, index) => (
                    <div key={`default-${index}`} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                        <p className="text-lg font-medium text-slate-800">{afformation}</p>
                        <p className="text-sm text-slate-500 mt-2">→ 증거를 찾아보세요</p>
                    </div>
                ))}
                
                {customAfformations.map((afformation, index) => (
                    <div key={`custom-${index}`} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-sky-500">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                                <p className="text-lg font-medium text-slate-800">{afformation}</p>
                                <p className="text-sm text-sky-500 mt-2">→ 나만의 어포메이션</p>
                            </div>
                            <button
                                onClick={() => handleRemoveCustomAfformation(index)}
                                className="text-red-500 hover:text-red-700 text-sm px-2"
                                aria-label="삭제"
                            >
                                삭제
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6 border border-blue-200">
                <h3 className="font-bold text-slate-800 mb-3">나만의 어포메이션 추가</h3>
                <textarea
                    ref={customAfformationRef}
                    placeholder="예: 왜 나는 고객과 자연스럽게 소통하는가?"
                    className="w-full p-3 border border-slate-300 rounded-lg mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                    rows={3}
                />
                <button 
                    onClick={handleAddCustomAfformation}
                    className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors"
                >
                    추가하기
                </button>
            </div>
        </div>

        {/* Affirmations Section */}
        <div>
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white mb-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-2">확언 (선언)</h2>
                <p className="text-green-100">이미 의식이 납득했으니 반복하세요</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md mb-6 border border-slate-200">
                <h3 className="font-bold mb-4 text-lg text-slate-800">확언 사용법</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>어포메이션으로 먼저 납득시키기</li>
                    <li>납득된 상태에서 확언 반복하기</li>
                    <li>각 확언을 10-20회 반복</li>
                    <li>느낌을 담아서 말하기</li>
                </ol>
            </div>

            <div className="space-y-3">
                {affirmationsList.map((affirmation, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                    <p className="text-lg font-medium text-slate-800">{affirmation}</p>
                </div>
                ))}
            </div>
        </div>
      </div>
    );
};

export default AffirmationsLibrary;
