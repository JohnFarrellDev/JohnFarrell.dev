'use client';

import { DEFAULT_CV } from './CvVariants';

export function DownloadPdf() {
  function handleDownloadPdf() {
    const previousTitle = document.title;
    document.title = `${DEFAULT_CV.personalInformation.name.replace(/\s+/g, '-')}-cv`.toLowerCase();
    window.print();
    document.title = previousTitle;
  }

  return (
    <button onClick={handleDownloadPdf} className="px-3 py-2 text-sm rounded bg-emerald-600 text-white cursor-pointer">
      Download PDF
    </button>
  );
}
