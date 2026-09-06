export type ContentStatus =
  | 'confirmed'
  | 'target'
  | 'proposed'
  | 'comingSoon'
  | 'subjectToConfirmation';

export const STATUS_LABELS: Record<ContentStatus, string> = {
  confirmed: 'Confirmed',
  target: 'Target',
  proposed: 'Proposed',
  comingSoon: 'To be announced',
  subjectToConfirmation: 'Subject to confirmation',
};

export interface StatusMeta {
  status: ContentStatus;
  note?: string;
}
