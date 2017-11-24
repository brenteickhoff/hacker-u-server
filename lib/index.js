import { initDataSource } from './model';
import { startExpressServer } from './server';

try {
  console.log();
  console.log(`Starting Hacker U...`);
  initDataSource();
  startExpressServer();
  console.log();
}
catch(err) {
  console.error('FATAL ERROR: Application could not start', err)
}
