declare const particlesJS: {
  (elementId: string, config: any): void;
  load: (elementId: string, path: string, callback: () => void) => void;
}