import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
//import postcss from 'rollup-plugin-postcss';

export default {
  input: ['src/index.ts', 'src/index.scss'],
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
    // Remove the hash from the asset filename
    assetFileNames: '[name][extname]',
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    // postcss({
    //   extract: true,
    //   modules: false,
    //   use: ['sass'],
    // }),
    scss({
      fileName: 'styles.css',
      input: 'src/index.scss',
      failOnError: true,
      css: { modules: false },
    }),
    image(),
  ],
  external: ['react', 'react-dom'],
};
