/// <reference types="vite/client" />
declare module '*.png';
declare module '*.sass' {
  const content: {[className: string]: string};
  export = content;
}