'use client';

import { useRef, useState } from 'react';

import { CvDefaultSelector } from './CvDefaultSelector';
import { CV_VARIANTS, CvVariantId } from './CvVariants';
import { CvViewer } from './CvViewer';

export function CvBase() {
  const [activeVariantId, setActiveVariantId] = useState<CvVariantId>('default');

  const activeVariant = CV_VARIANTS.find((v) => v.id === activeVariantId)!;

  function handleDownloadPdf() {
    const previousTitle = document.title;
    document.title = `${activeVariant.cv.personalInformation.name.replace(/\s+/g, '-')}-cv`;
    window.print();
    document.title = previousTitle;
  }

  return (
    <div className="grid md:grid-cols-[1fr_3fr] gap-4">
      <div className="print:hidden">
        <CvDefaultSelector activeVariantId={activeVariantId} onChange={setActiveVariantId} />
      </div>
      <div className="max-w-full print:max-w-none print:w-full">
        <div className="flex flex-col gap-2 mb-4 print:hidden">
          <div className="flex gap-2">
            <button
              onClick={handleDownloadPdf}
              className="px-3 py-2 text-sm rounded bg-emerald-600 text-white cursor-pointer"
            >
              Download PDF
            </button>
          </div>
          <p className="text-xs text-gray-500 m-0">
            In the print dialog: uncheck <strong>Headers and footers</strong> to remove the URL and timestamp.
          </p>
        </div>

        <CvViewer
          personalInformation={activeVariant.cv.personalInformation}
          skills={activeVariant.cv.skills}
          employmentHistory={activeVariant.cv.employmentHistory}
        />
      </div>
    </div>
  );
}
