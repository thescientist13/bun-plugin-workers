import { Worker } from 'node:worker_threads';

const name = 'Bun';

async function runWorker(name: string) {
  const worker = new Worker('./worker.ts', {
    workerData: { name }
  });

  return new Promise((resolve, reject) => {
    worker.on('message', (result: string) => {
      console.log(`Worker finished. Result: ${result}`);
      resolve(result);
    });

    worker.on('error', (err: Error) => {
      console.error(`Worker error: ${err}`);
      reject(err);
    });

    worker.on('exit', (code: number) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  })
};


(async() => {
  await runWorker(name)
})();