import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import Header from './components/Header';
import AIAssistant from './components/AIAssistant';
import { sections, corePrinciples } from './constants/content';
import type { Section, SuccessEntry } from './types';
import PrincipleCard from './components/PrincipleCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // State from TransurfingSalesCoach
  const [morningDone, setMorningDone] = useState(false);
  const [eveningDone, setEveningDone] = useState(false);
  const [todayGratitude, setTodayGratitude] = useState(['', '', '']);
  const [rejectionCount, setRejectionCount] = useState(0);
  const [contractCount, setContractCount] = useState(0);
  const [customAfformations, setCustomAfformations] = useState([]);
  const [successLog, setSuccessLog] = useState<SuccessEntry[]>([]);

  const handleNavigate = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      setActiveSection(section);
      setSidebarOpen(false); // Close sidebar on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const selectSection = (section: Section) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderContent = () => {
    const Component = activeSection.component;
    if (Component) {
      const props = {
        // Dashboard props
        morningDone, eveningDone, contractCount, rejectionCount,
        onUpdateMorningDone: setMorningDone,
        onUpdateEveningDone: setEveningDone,
        onIncrementContract: () => setContractCount(c => c + 1),
        onIncrementRejection: () => setRejectionCount(c => c + 1),
        onNavigate: handleNavigate,
        // Morning Routine props
        onComplete: () => {
          setMorningDone(true);
          handleNavigate('dashboard');
        },
        // Evening Routine props
        gratitudeList: todayGratitude,
        onGratitudeChange: setTodayGratitude,
        // Affirmations Library props
        customAfformations,
        onCustomAfformationsChange: setCustomAfformations,
        // Success Log props
        successLog,
        onSetSuccessLog: setSuccessLog,
        // Emergency tool props
        ...activeSection.props,
      };
      return <Component {...props} />;
    }
    
    // Static content
    return (
      <>
        <ContentDisplay section={activeSection} />
        {activeSection.id === 'core-principles' && (
          <PrincipleCard front={corePrinciples.front} back={corePrinciples.back} />
        )}
      </>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar 
        sections={sections} 
        activeSectionId={activeSection.id}
        onSelectSection={selectSection}
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1">
        <Header 
            title={activeSection.title} 
            icon={activeSection.icon} 
            onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
            <div className="mt-12 pt-8 border-t-2 border-slate-200">
              <AIAssistant />
            </div>
          </div>
        </main>
      </div>
       {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;
