
import React, { useState, useMemo } from 'react';
import type { Section } from '../types';
import { IdentificationIcon } from '../constants/icons';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  onSelectSection: (section: Section) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);


const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSelectSection, isOpen }) => {
  const groupedSections = useMemo(() => {
    // FIX: Correctly type the initial value for the reduce function to ensure type inference works as expected.
    return sections.reduce<Record<string, Section[]>>((acc, section) => {
      const group = section.group || 'Other';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(section);
      return acc;
    }, {});
  }, [sections]);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const activeSection = sections.find(s => s.id === activeSectionId);
    const initialState: Record<string, boolean> = {};
    if (activeSection && activeSection.group) {
        initialState[activeSection.group] = true;
    }
    const firstGroup = Object.keys(groupedSections)[0];
    if (firstGroup && !initialState[firstGroup]) {
        initialState[firstGroup] = true;
    }
    return initialState;
  });

  const toggleGroup = (groupName: string) => {
    setOpenGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  const sidebarClasses = `
    fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 p-4 md:p-6 
    flex-shrink-0 z-30 transition-transform duration-300 ease-in-out
    md:static md:translate-x-0
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-sky-500 rounded-lg">
          <IdentificationIcon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-slate-800">Sales Mindset Coach</h1>
      </div>
      <nav className="space-y-4">
        {Object.entries(groupedSections).map(([groupName, groupSections]) => (
          <div key={groupName}>
            <button 
              onClick={() => toggleGroup(groupName)}
              className="w-full flex justify-between items-center py-2 px-3 text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              <span>{groupName}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${openGroups[groupName] ? 'rotate-180' : ''}`} />
            </button>
            {openGroups[groupName] && (
              <ul className="mt-1 space-y-1">
                {groupSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = section.id === activeSectionId;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => onSelectSection(section)}
                        className={`w-full text-left flex items-center gap-3 p-3 my-1 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-sky-100 text-sky-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{section.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;