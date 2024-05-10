module.exports = {
 apps: [
  {
   name: 'photo', // 应用程序名称
   script: 'yarn',
   args: 'start',
   // 应用程序的入口点
   instances: 1, // 要运行的应用程序实例数
   autorestart: true, // 在出现错误时自动重启应用程序
   watch: true, // 监视文件更改并自动重启应用程序
   env: {
    NODE_ENV: 'production', // 环境变量
   },
   env_production: {
    NODE_ENV: 'production',
   },
  },
 ],
}
