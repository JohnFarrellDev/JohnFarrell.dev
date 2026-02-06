'use client';

import { useRef, useState } from 'react';

import { CvDefaultSelector } from './CvDefaultSelector';
import { CV_VARIANTS, CvVariantId } from './CvVariants';
import { CvViewer } from './CvViewer';

export function CvBase() {
  const [activeVariantId, setActiveVariantId] = useState<CvVariantId>('default');
  const cvRef = useRef<HTMLDivElement | null>(null);

  const activeVariant = CV_VARIANTS.find((v) => v.id === activeVariantId)!;

  async function handleDownloadPdf() {
    if (!cvRef.current) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const options = {
      margin: 6,
      filename: 'cv-john-farrell.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      },
    };

    // @ts-ignore – html2pdf types are imperfect
    html2pdf().set(options).from(cvRef.current).save();
  }

  return (
    <div className="grid md:grid-cols-[1fr_3fr] gap-4">
      <div>
        <CvDefaultSelector activeVariantId={activeVariantId} onChange={setActiveVariantId} />
      </div>
      <div className="max-w-full">
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleDownloadPdf}
            className="px-3 py-2 text-sm rounded bg-emerald-600 text-white cursor-pointer"
          >
            Download PDF
          </button>
        </div>

        <CvViewer
          ref={cvRef}
          personalInformation={activeVariant.cv.personalInformation}
          skills={activeVariant.cv.skills}
          employmentHistory={activeVariant.cv.employmentHistory}
        />
      </div>
    </div>
  );
}
