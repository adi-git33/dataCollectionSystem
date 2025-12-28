import type { ClickEvent } from "./clickEvent";

export interface ExperimentSession {
  id: string;
  page1FirstClick: string | null;
  page1Clicks: ClickEvent[];
  page2FirstClick: string | null;
  page2BucketClicks: string[]; 
  page2SubmitTime: string | null;
  page2TotalDuration: number | null; // in milliseconds
}