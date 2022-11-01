export function getFuncName(): string {
  return getFuncName.caller.name;
}
