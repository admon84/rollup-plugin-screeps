import clear from 'rollup-plugin-clear';
import typescript from '@rollup/plugin-typescript';

const watchMode = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    clear({
      targets: ['dist'],
      watch: watchMode
    }),
    typescript()
  ],
  external: ['fs', 'path', 'git-rev-sync', '@admon-dev/screeps-api']
};
