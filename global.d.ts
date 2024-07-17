// global.d.ts
interface Window {
  dataLayer: any[];
}

declare var window: Window;

declare function gtag(...args: any[]): void;
