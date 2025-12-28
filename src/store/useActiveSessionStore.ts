import { create } from 'zustand';
import type { ClickEvent } from '../types/clickEvent';
import type { ExperimentSession } from '../types/experimentSession';

interface ActiveSessionState {
  currentSession: ExperimentSession | null;
  
  startNewExperiment: () => void;
  clearSession: () => void;
  recordPage1FirstClick: () => void;
  addPage1Click: (click: ClickEvent) => void;
  recordPage2FirstClick: () => void;
  addBucketClick: () => void;
  finalizePage2: () => void;
}

export const useActiveSessionStore = create<ActiveSessionState>((set) => ({
  currentSession: null,

  startNewExperiment: () => set({
    currentSession: {
      id: crypto.randomUUID(),
      page1FirstClick: null,
      page1Clicks: [],
      page2FirstClick: null,
      page2BucketClicks: [],
      page2SubmitTime: null,
      page2TotalDuration: null,
    }
  }),

  clearSession: () => set({ currentSession: null }),

  recordPage1FirstClick: () => set((state) => {
    if (state.currentSession?.page1FirstClick) return state; // Record time of first click
    return {
      currentSession: { 
        ...state.currentSession!, 
        page1FirstClick: new Date().toISOString() // All measurements in UTC 
      }
    };
  }),

  addPage1Click: (click) => set((state) => ({
    currentSession: {
      ...state.currentSession!,
      page1Clicks: [...state.currentSession!.page1Clicks, click] // Record UTC and value 
    }
  })),

  recordPage2FirstClick: () => set((state) => {
    if (state.currentSession?.page2FirstClick) return state; // Record UTC of first click on Page 2 
    return {
      currentSession: { 
        ...state.currentSession!, 
        page2FirstClick: new Date().toISOString() 
      }
    };
  }),

  addBucketClick: () => set((state) => {
    const now = new Date().toISOString();
    return {
      currentSession: {
        ...state.currentSession!,
        page2BucketClicks: [...state.currentSession!.page2BucketClicks, now] // Store sequence [cite: 45]
      }
    };
  }),

  finalizePage2: () => set((state) => {
    const session = state.currentSession!;
    if (session.page2BucketClicks.length === 0) return state;

    const first = new Date(session.page2BucketClicks[0]).getTime();
    const last = new Date(session.page2BucketClicks[session.page2BucketClicks.length - 1]).getTime();

    return {
      currentSession: {
        ...session,
        page2SubmitTime: new Date().toISOString(), // Record Submit button click 
        page2TotalDuration: last - first // Compute total duration in ms
      }
    };
  }),
}));