import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  build: {
    minify: true,
    outDir: 'build',
  },
};
