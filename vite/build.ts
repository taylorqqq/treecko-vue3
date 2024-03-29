const build = {
  target: "es2015",
  outDir: "dist",
  rollupOptions: {
    emptyOutDir: true, // 清空输出目录
    output: {
      manualChunks(id: string) {
        if (id.includes("node_modules")) {
          return id
            .toString()
            .split("node_modules/")[1]
            .split("/")[0]
            .toString();
        }
        // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
        // if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
        //   return 'vendor'
        // }
      },
    },
  },
};

export default build;
