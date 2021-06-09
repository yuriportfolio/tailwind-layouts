import { html, render, svg } from 'https://cdn.skypack.dev/uhtml';

function Lock() {
  return svg`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  `;
}

function Refresh() {
  return svg`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  `;
}

function BrowserWindow() {
  return html`
    <div class="p-8 w-full h-full flex items-center justify-center">
      <div class="w-full h-full overflow-hidden shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg">
        <div class="w-full flex items-center justify-start relative p-1 border-b dark:border-gray-800">
          <div class="p-1 flex items-center justify-center">
            <div class="bg-red-500 m-1 w-3 h-3 rounded-full"></div>
            <div class="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
            <div class="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
          </div>
          <div class="w-full flex items-center justify-center absolute left-0">
            <a
              href="https://tailwindcss.com"
              class="text-xs bg-gray-100 dark:bg-gray-900 w-1/2 rounded-lg py-1 flex justify-between items-center"
            >
              <div class="flex items-center justify-center pl-4">
                <span class="text-green-500 w-4 h-4 mr-2">${Lock()}</span>
                <span class="">tailwindcss.com</span>
              </div>
              <div class="flex pr-4">
                <span class="text-gray-500 w-4 h-4">${Refresh()}</span>
              </div>
            </a>
          </div>
        </div>
        <div class="w-full h-full relative">
          <iframe
            title="TaildwindCSS"
            src="https://tailwindcss.com"
            class="w-full h-full transition-opacity duration-200 opacity-0"
          >
          </iframe>
        </div>
      </div>
    </div>
  `;
}

function Fallback() {
  return html`
    <div class="absolute w-full h-full top-0 left-0 animate-pulse bg-gray-100 dark:bg-gray-900">
    </div>
  `;
}

function renderFallback(root: HTMLDivElement) {
  root.querySelectorAll('iframe').forEach((el) => {
    const parent = el.parentElement;
    if (parent) {
      const fallback = document.createElement('div');

      render(fallback, Fallback());

      parent.appendChild(fallback);

      el.addEventListener('load', () => {
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');

        parent.removeChild(fallback);
      });
    } else {
      el.classList.remove('opacity-0');
      el.classList.add('opacity-100');
    }
  });
}

export default function renderApp(root: HTMLDivElement): void {
  render(root, BrowserWindow());
  renderFallback(root);
}
