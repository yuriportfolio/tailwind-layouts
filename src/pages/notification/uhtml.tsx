import { html, render } from 'https://cdn.skypack.dev/uhtml';

function Notification() {
  return html`
    <div class="m-2 flex flex-col">
      <div class="m-2 border border-gray-400 dark:border-gray-500 rounded-lg relative bg-gray-200 dark:bg-gray-700">
        <div class="p-4 text-sm text-gray-700 dark:text-gray-200 font-semibold">
          Neutral notification
        </div>
      </div>
      <div class="m-2 border border-blue-500 rounded-lg relative bg-blue-700">
        <div class="p-4 text-sm text-blue-200 font-semibold">
          Informative notification
        </div>
      </div>
      <div class="m-2 border border-green-500 rounded-lg relative bg-green-700">
        <div class="p-4 text-sm text-green-200 font-semibold">
          Positive notification
        </div>
      </div>
      <div class="m-2 border border-yellow-500 rounded-lg relative bg-yellow-700">
        <div class="p-4 text-sm text-yellow-200 font-semibold">
          Warning notification
        </div>
      </div>
      <div class="m-2 border border-red-500 rounded-lg relative bg-red-700">
        <div class="p-4 text-sm text-red-200 font-semibold">
          Negative notification
        </div>
      </div>
    </div>
  `;
}

export default function renderApp(root: HTMLDivElement): void {
  render(root, Notification());
}
