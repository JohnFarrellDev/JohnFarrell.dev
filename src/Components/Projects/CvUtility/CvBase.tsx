'use client';

import { useState } from 'react';

import { CvDefaultSelector } from './CvDefaultSelector';
import { CV_VARIANTS, CvVariantId } from './CvVariants';
import { CvViewer } from './CvViewer';

export function CvBase() {
  const [activeVariantId, setActiveVariantId] = useState<CvVariantId>('default');

  const activeVariant = CV_VARIANTS.find((v) => v.id === activeVariantId)!;

  return (
    <div className="grid md:grid-cols-[1fr_3fr] gap-4">
      <div>
        <CvDefaultSelector activeVariantId={activeVariantId} onChange={setActiveVariantId} />
      </div>
      <div>
        <CvViewer personalInformation={activeVariant.cv.personalInformation} skills={activeVariant.cv.skills} />
      </div>
    </div>
  );
}
