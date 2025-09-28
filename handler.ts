import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { html } from 'lit';
import './simple-greeting.ts';

const name = 'Bun';
const template = (name: string) => html`
  <simple-greeting name="${name}"></simple-greeting>
`;

const ssrResult = render(template(name));
console.log({ ssrResult });

const ssrContents = await collectResult(ssrResult);
console.log({ ssrContents });