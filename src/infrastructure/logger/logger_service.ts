export function logError(
  message: string,
  funcName: string,
  screenName?: string
): void {
  console.error(message, {
    funcName,
    screenName,
    createdAt: new Date(),
  });
}
