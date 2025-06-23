export const getSlotColor = (startTime: number): 'green' | 'yellow' | 'red' => {
  const elapsed = (Date.now() - startTime) / (1000 * 60 * 60);
  if (elapsed < 1) return 'yellow';
  return 'red';
};
