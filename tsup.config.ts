import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: [/*'cjs', 'esm',*/ 'iife'],
  splitting: true,
  cjsInterop: true,
  globalName: 'AudioRecorder',
  external: ['js-audio-recorder'],
  dts: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
