import { parentPort, workerData } from 'worker_threads';
import { render, html } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js'
import './simple-greeting.ts';

const template = (name: string) => html`
  <simple-greeting .name="${name}"></simple-greeting>
`;

const ssrResult = render(template(workerData.name));
const ssrContents = await collectResult(ssrResult);

console.log({ ssrContents });

parentPort?.postMessage(ssrContents);