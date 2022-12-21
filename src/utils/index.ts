export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() / 1000).toFixed(0));
