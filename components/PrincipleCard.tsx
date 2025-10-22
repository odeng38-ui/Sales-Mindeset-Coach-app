
import React, { useState } from 'react';

interface PrincipleCardProps {
    front: string[];
    back: {
        title: string;
        steps: string[];
    };
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-full max-w-md mx-auto my-8 perspective-1000">
            <div
                className={`relative w-full h-64 transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Front of the card */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">핵심 원칙 (앞면)</h3>
                    <div className="space-y-3">
                        {front.map((line, index) => (
                            <p key={index} className="text-xl font-medium text-sky-600 italic">
                                {line}
                            </p>
                        ))}
                    </div>
                     <span className="absolute bottom-4 text-xs text-slate-400">카드를 클릭하여 뒷면 보기</span>
                </div>

                {/* Back of the card */}
                <div className="absolute w-full h-full backface-hidden bg-sky-500 text-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center cursor-pointer rotate-y-180">
                     <h3 className="text-lg font-semibold text-sky-100 mb-4">{back.title}</h3>
                    <div className="space-y-2">
                        {back.steps.map((step, index) => (
                            <p key={index} className="text-xl font-medium">
                                {step}
                            </p>
                        ))}
                    </div>
                    <span className="absolute bottom-4 text-xs text-sky-200">카드를 클릭하여 앞면 보기</span>
                </div>
            </div>
            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
            `}</style>
        </div>
    );
};

export default PrincipleCard;
