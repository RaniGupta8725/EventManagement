export interface EventItem {
  id: number;
  title: string;
  description?: string;
  date: string;        // ISO string
  mediaName?: string;
  mediaType?: string;
  mediaDataUrl?: string; // data URL or asset path
}