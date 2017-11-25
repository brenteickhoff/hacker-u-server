import { startExpressServer } from './server';
import { initDataSource } from './model';

console.log();

console.log(`Starting Hacker U Server...`);

try {
  startExpressServer();
  initDataSource();
}
catch(err) {
  console.error('FATAL ERROR: Application could not start', err)
}
