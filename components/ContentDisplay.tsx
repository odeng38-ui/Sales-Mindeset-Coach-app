
import React, { useState } from 'react';
import type { Section, ContentBlock } from '../types';

const Checklist: React.FC<{ items: string[]; title: string }> = ({ items, title }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleCheckboxChange = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200/80 mb-6">
      <h3 className="text-lg font-semibold text-slate-700 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`${title}-item-${index}`}
              checked={!!checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
              className="h-5 w-5 rounded border-slate-300 text-sky-500 focus:ring-sky-500 cursor-pointer"
            />
            <label 
              htmlFor={`${title}-item-${index}`}
              className={`ml-3 text-slate-600 cursor-pointer transition-colors ${checkedItems[index] ? 'line-through text-slate-400' : ''}`}
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContentDisplay: React.FC<{ section: Section }> = ({ section }) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    const content = Array.isArray(block.content) ? block.content : [block.content];
    switch (block.type) {
      case 'h2':
        return <h2 key={index} className="text-2xl font-bold text-slate-700 mt-8 mb-4">{content[0]}</h2>;
      case 'h3':
        return <h3 key={index} className="text-xl font-semibold text-slate-600 mt-6 mb-3">{content[0]}</h3>;
      case 'p':
        return <p key={index} className="text-slate-600 leading-relaxed mb-4">{content[0]}</p>;
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 pl-4 text-slate-600">
            {content.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-sky-400 bg-sky-50 p-4 my-6 rounded-r-lg">
            {block.title && <p className="font-semibold text-sky-800 mb-2">{block.title}</p>}
            <div className="text-sky-700 italic space-y-2">
              {content.map((line, i) => <p key={i}>{line.startsWith(' ') ? <span className="ml-4">{line.trim()}</span> : line}</p>)}
            </div>
          </blockquote>
        );
      case 'checklist':
        return <Checklist key={index} title={block.title || ''} items={content} />;
      case 'scenario':
        return (
           <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200/80 mb-6">
                <h3 className="text-lg font-semibold text-slate-700 mb-4">{block.title}</h3>
                <div className="text-slate-600 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {content.join('\n')}
                </div>
           </div>
        )
      default:
        return null;
    }
  };

  return (
    <div>
      {section.content.map(renderBlock)}
    </div>
  );
};

export default ContentDisplay;
