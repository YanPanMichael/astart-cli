/**
 * @autopack/cpack
 */
module.exports = ({ pkg } = {}) => {
  return {
    // 输入
    input: 'src/index.ts',
    // 输出
    output: {
      // 目录
      directory: 'dist',
      name: 'bundle',
      // 格式
      format: ['cjs', 'es', 'amd', 'iife', 'umd'],
    },
    //  sourceMap: true,
    formatConfig: {
      es: {
        external: [],
        isolateDep: true, // 外部依赖不全部屏蔽
      },
      cjs: {
        external: [],
        isolateDep: true, // 外部依赖不全部屏蔽
      },
      amd: {
        external: [],
        isolateDep: false, // 外部依赖不全部屏蔽
      },
      iife: {
        external: [],
        isolateDep: false, // 外部依赖不全部屏蔽
      },
      umd: {
        // 外部模块
        external: [],
        // 外部依赖不全部屏蔽
        isolateDep: false,
      },
    },
    templateBase: './',
    replaceMaps: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE === 'production' ? 'production' : 'development',
      ),
      'process.env.DEBUG': JSON.stringify(
        process.env.NODE === 'production' ? 'false' : 'true',
      ),
      'process.argv': JSON.stringify(process.argv),
    },
  };
};
