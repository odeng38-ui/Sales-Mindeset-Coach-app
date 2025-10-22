import React, { useState } from 'react';
import type { SuccessEntry } from '../../types';
import { TrophyIcon, TrashIcon } from '../../constants/icons';

interface SuccessLogProps {
  successLog: SuccessEntry[];
  onSetSuccessLog: (log: SuccessEntry[]) => void;
}

const SuccessLog: React.FC<SuccessLogProps> = ({ successLog, onSetSuccessLog }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleAddSuccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('성공 제목을 입력해주세요.');
      return;
    }

    const newEntry: SuccessEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('ko-KR'),
      title: title.trim(),
      details: details.trim(),
    };

    onSetSuccessLog([newEntry, ...successLog]);
    setTitle('');
    setDetails('');
  };

  const handleDeleteSuccess = (id: number) => {
    if (window.confirm('정말로 이 기록을 삭제하시겠습니까?')) {
      onSetSuccessLog(successLog.filter(entry => entry.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrophyIcon className="w-6 h-6" />
          나의 성공 일지
        </h2>
        <p className="text-amber-100">작은 성공이 모여 큰 성취를 이룹니다.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <form onSubmit={handleAddSuccess} className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">새로운 성공 기록하기</h3>
          <div>
            <label htmlFor="success-title" className="block text-sm font-medium text-slate-700 mb-1">
              성공 제목
            </label>
            <input
              id="success-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 까다로운 고객과 긍정적 대화"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div>
            <label htmlFor="success-details" className="block text-sm font-medium text-slate-700 mb-1">
              상세 내용 (선택)
            </label>
            <textarea
              id="success-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="어떤 상황이었고, 어떻게 해결했는지, 무엇을 느꼈는지 자유롭게 적어보세요."
              className="w-full p-3 border border-slate-300 rounded-lg resize-y focus:ring-2 focus:ring-sky-400"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-600 transition-colors"
          >
            추가하기
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-700">기록 목록</h3>
        {successLog.length === 0 ? (
          <div className="text-center text-slate-500 bg-slate-50 p-8 rounded-lg">
            <p>아직 기록된 성공이 없습니다.</p>
            <p>오늘의 작은 성공부터 기록해보세요!</p>
          </div>
        ) : (
          successLog.map(entry => (
            <div key={entry.id} className="bg-white p-5 rounded-lg shadow-md border-l-4 border-amber-400 relative group">
              <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-500">{entry.date}</p>
                    <h4 className="font-bold text-slate-800 text-lg mt-1">{entry.title}</h4>
                  </div>
                  <button
                    onClick={() => handleDeleteSuccess(entry.id)}
                    className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:bg-red-100 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="삭제"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
              </div>
              {entry.details && (
                <p className="text-slate-600 mt-2 whitespace-pre-wrap">{entry.details}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuccessLog;
