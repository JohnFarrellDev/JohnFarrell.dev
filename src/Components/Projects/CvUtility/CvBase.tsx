import { DEFAULT_CV } from './CvVariants';
import { CvViewer } from './CvViewer';
import { DownloadPdf } from './DownloadPdf';

export function CvBase() {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-4 print:hidden">
        <div className="flex gap-2"></div>
        <p className="text-xs text-gray-500 m-0">
          In the print dialog: uncheck <strong>Headers and footers</strong> to remove the URL and timestamp. The CV will
          also look better in chrome.
        </p>
        <DownloadPdf />
      </div>

      <CvViewer
        personalInformation={DEFAULT_CV.personalInformation}
        skills={DEFAULT_CV.skills}
        employmentHistory={DEFAULT_CV.employmentHistory}
      />
    </div>
  );
}
