import {execSync} from 'node:child_process';
try {
  execSync('npx vitest run', {stdio: 'inherit'});
} catch (err) {
  process.exitCode = 1;
}
