const { src, dest, parallel, series } = require('gulp');
const { exec } = require('child_process');
const path = require('path');

function copyGraphql(cb) {
  src(path.resolve(__dirname, 'src', '**', '*.graphql'))
    .pipe(dest(path.resolve(__dirname, 'dist', 'src')))
    .on('end', cb);
}

function compireTypeScript(cb) {
  console.log('>>> 开始构建 NestJs 代码');
  exec('nest build', (err, stdout, stderr) => {
    if (err) {
      cb(err);
    } else {
      cb();
    }
  });
}

function copyEnvFile(cb) {
  return src([
    path.resolve(__dirname, 'configs', '.env.base'),
    path.resolve(__dirname, 'configs', '.env.dev'),
    path.resolve(__dirname, 'configs', '.env.test'),
    path.resolve(__dirname, 'configs', '.env.prod'),
  ], { allowEmpty: true }).pipe(dest(path.resolve(__dirname, 'dist', 'configs')));
}

exports.build = series(
  compireTypeScript,
  parallel(copyGraphql, copyEnvFile),
);

exports.buildStaticFiles = series(
  parallel(copyGraphql, copyEnvFile)
)