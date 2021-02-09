declare global {
  interface Window {
    __iff_VALUES__: any;
  }
}
export default function iff(flagName: string) {
  const flags = window.__iff_VALUES__;
  if (typeof flagName !== 'string') {
    throw new TypeError('flagName must be a string');
  }
  if (flags === undefined) {
    throw new Error('feature flags were not populated');
  }

  if (flags[flagName] === undefined) {
    return null;
  }

  return flags[flagName];
}
