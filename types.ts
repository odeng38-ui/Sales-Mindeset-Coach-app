import React from 'react';

export interface ContentBlock {
  type: 'h2' | 'h3' | 'p' | 'list' | 'quote' | 'checklist' | 'scenario';
  content: string | string[];
  title?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  group: string;
  content?: ContentBlock[];
  component?: React.ComponentType<any>;
  props?: Record<string, any>;
}

export interface SuccessEntry {
  id: number;
  date: string;
  title: string;
  details: string;
}
