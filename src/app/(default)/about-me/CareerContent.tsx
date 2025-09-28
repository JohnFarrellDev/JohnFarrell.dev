import { Modal } from '@/Components/Modal';
import { Button } from '@/Components/Button';
import { Chevron } from '@/Components/icons/Chevron';

interface CareerContentProps {
  dialogIndex: number | null;
  setDialogIndex: (index: number) => void;
  closeDialog: () => void;
}

interface CareerSection {
  title: string;
  startDate: string;
  endDate: string;
}

const careerSections = [
  {
    title: 'BSc in Biomedical Science',
  },
  {
    title: 'Self Teaching Code',
  },
  {
    title: 'MSc in Computer Science',
  },
];

export function CareerContent({ dialogIndex, setDialogIndex, closeDialog }: CareerContentProps) {
  const dialogContent = careerSections.at(dialogIndex ?? -1);

  //   if (!dialogIndex) return;

  const atFirstSection = dialogIndex === 0;
  const atLastSection = careerSections.length - 1 === dialogIndex;

  return (
    <Modal isOpen={typeof dialogIndex === 'number'} onClose={closeDialog}>
      <Modal.Title title={dialogContent?.title ?? ''} />
      <Modal.Content>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
      </Modal.Content>

      <Modal.Footer className="flex justify-between">
        <button
          className="text-primary-300 disabled:text-gray-500"
          disabled={atFirstSection}
          aria-disabled={atFirstSection}
          type="button"
          onClick={() => dialogIndex !== null && setDialogIndex(dialogIndex - 1)}
          aria-label={atFirstSection ? 'Disabled - no section before this' : 'Go to previous career item'}
          title={atFirstSection ? 'Disabled - no section before this' : 'Go to previous career item'}
        >
          <Chevron className="h-[60px] w-[60px]" aria-hidden={true} />
        </button>
        <Button type="submit">Close</Button>
        <button
          className="text-primary-300 disabled:cursor-not-allowed disabled:text-gray-500"
          disabled={atLastSection}
          aria-disabled={atLastSection}
          type="button"
          onClick={() => dialogIndex !== null && setDialogIndex(dialogIndex + 1)}
          aria-label={atLastSection ? 'Disabled - no section after this' : 'Go to next career item'}
          title={atLastSection ? 'Disabled - no section after this' : 'Go to next career item'}
        >
          <Chevron className="h-[60px] w-[60px] rotate-180" aria-hidden={true} />
        </button>
      </Modal.Footer>
    </Modal>
  );
}
