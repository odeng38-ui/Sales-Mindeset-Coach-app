import React from 'react';

export const BrainIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75h7.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V9.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a1.5 1.5 0 0 1-3 0V14.25m3 0a1.5 1.5 0 0 0-3 0V15.75" />
  </svg>
);

export const HeartIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

export const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.125-.372M15 19.128v-3.872a3.375 3.375 0 0 0-3.375-3.375H9.375a3.375 3.375 0 0 0-3.375 3.375v3.872m5.25 0a9.337 9.337 0 0 0-4.125-.372M15 19.128a9.38 9.38 0 0 0-2.625.372M9.375 16.128a9.337 9.337 0 0 0-4.125.372M12 3.75c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3Z" />
  </svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.992-.55-1.35l-2.457-2.457a1.5 1.5 0 0 0-2.122 0l-.636.636a.75.75 0 0 1-1.06 0l-4.573-4.573a.75.75 0 0 1 0-1.06l.636-.636a1.5 1.5 0 0 0 0-2.122L7.72 5.28a2.25 2.25 0 0 0-1.35-.55H5.25A2.25 2.25 0 0 0 3 6.75Z" />
  </svg>
);

export const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

export const RocketLaunchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.013 12.013 0 0 0-4.04-4.04m-6.38 6.38a12.013 12.013 0 0 0 4.04 4.04m-8.242-8.242L12 12m0 0 8.242 8.242M12 12 3.758 3.758m8.242 8.242L3.758 12m8.242 8.242L12 12" />
  </svg>
);

export const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.956 11.956 0 0 1 12 2.25c1.121 0 2.206.126 3.22.364m-6.44 0A11.956 11.956 0 0 1 12 2.25c-1.121 0-2.206.126-3.22.364m11.126 11.126a11.956 11.956 0 0 1-.364 3.22m-.364-3.22a11.956 11.956 0 0 1 3.22.364m-3.584.364a11.956 11.956 0 0 1-3.22.364M12 21.75c-1.121 0-2.206-.126-3.22-.364m-6.44 0a11.956 11.956 0 0 1-.364-3.22m.364 3.22a11.956 11.956 0 0 1-3.22-.364m3.584-.364a11.956 11.956 0 0 1 3.22-.364M4.636 12.25a11.956 11.956 0 0 1 .364-3.22m.364 3.22a11.956 11.956 0 0 1-3.22-.364m3.584-.364a11.956 11.956 0 0 1 3.22-.364" />
  </svg>
);

// --- NEWLY ADDED ICONS ---

export const IdentificationIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25h3.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 16.5h3.375" />
  </svg>
);

export const BeakerIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-4.262 4.262a2.25 2.25 0 0 1-1.591.659v4.286m-4.286 0-4.262-4.262a2.25 2.25 0 0 0-1.591-.659v-4.286m0 0L5 14.5m0 0 .659-.659a2.25 2.25 0 0 1 1.591-.659v-5.714m0 0A24.301 24.301 0 0 0 12 3.104m0 0c.861.093 1.703.217 2.5.372" />
  </svg>
);

export const ClipboardDocumentCheckIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25c.621 0 1.125.504 1.125 1.125v3.375c0 .621-.504 1.125-1.125 1.125h-1.5c-.621 0-1.125-.504-1.125-1.125v-3.375c0-.621.504-1.125 1.125-1.125h1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.375 10.875 1.125 1.125 2.25-2.25" />
  </svg>
);

export const TrendingUpIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

export const CoffeeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5c0 1.242-1.008 2.25-2.25 2.25S12 5.742 12 4.5 13.008 2.25 14.25 2.25 16.5 3.258 16.5 4.5Z" />
  </svg>
);

export const MoonIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

export const AlertCircleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const ZapIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const ArrowPathIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001a.75.75 0 0 1 .75.75v3.672a.75.75 0 0 1-.441.693l-7.08 3.54a.75.75 0 0 1-.822-.034l-3.34-3.012a.75.75 0 0 1-.22-1.072L8.51 5.09a.75.75 0 0 1 1.05-.22l3.34 3.012a.75.75 0 0 1 .033 1.072l-1.938 1.938a.75.75 0 0 1-1.06 0L9.938 9.348h-2.29a.75.75 0 0 1-.75-.75V6.307a.75.75 0 0 1 .75-.75h2.29a.75.75 0 0 1 .53 1.28l.94 1.88h.001Z" />
  </svg>
);

export const TrophyIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 0 1.148 4.402l1.01-1.011a.75.75 0 0 1 1.06 0l.94.94a.75.75 0 0 0 1.06 0l.94-.94a.75.75 0 0 1 1.06 0l1.01 1.011a9.75 9.75 0 0 0 1.148-4.402Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a3 3 0 0 0-3 3v3.75a3 3 0 0 0 3 3h.008a3 3 0 0 0 3-3V9.75a3 3 0 0 0-3-3h-.008ZM12 6.75V3m0 3.75a3 3 0 0 1-3 3V3m3 3.75a3 3 0 0 0 3 3V3" />
    </svg>
);

export const TrashIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09.92-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);