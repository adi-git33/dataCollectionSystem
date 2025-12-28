import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExperimentSession } from '../types/experimentSession';

interface HistoryState {
  lastSession: ExperimentSession | null;
  completedCount: number; 
  saveSession: (session: ExperimentSession) => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      lastSession: null,
      completedCount: 0,
      
      saveSession: (session) =>
        set((state) => ({
          lastSession: session,
          completedCount: state.completedCount + 1, 
        })),
    }),
    {
      name: 'experiment-history-storage',
    }
  )
);