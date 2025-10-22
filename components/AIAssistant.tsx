
import React, { useState } from 'react';
import { getAICoaching } from '../services/geminiService';
import { BrainIcon, ArrowPathIcon } from '../constants/icons';

const AIAssistant: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    const aiResponse = await getAICoaching(userInput);
    setResponse(aiResponse);
    setIsLoading(false);
  };

  return (
    <div id="ai-coach" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200/80">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-sky-500 text-white p-3 rounded-lg shadow-md">
            <BrainIcon className="w-8 h-8"/>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-slate-800">AI 마인드셋 코치</h2>
            <p className="text-slate-500">영업 중 겪는 어려움이나 불안한 점을 이야기해주세요.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="예: '내일 중요한 계약이 있는데 거절당할까봐 너무 불안해요. 월말 실적 압박도 심하고요...'"
          className="w-full h-28 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !userInput.trim()}
          className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-600 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
              <span>코칭 받는 중...</span>
            </>
          ) : (
            'AI 코칭 받기'
          )}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-slate-50 border-t border-slate-200 rounded-b-lg">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">코치의 조언:</h3>
          <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
