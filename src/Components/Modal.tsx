import { useEffect, useRef } from 'react';
import { cn } from '@/Utilities/cn';

interface ModalComponent extends React.FC<ModalBaseProps> {
  Title: React.FC<ModalTitleProps>;
  Content: React.FC<ModalContentProps>;
  Footer: React.FC<ModalFooterProps>;
}

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

function ModalBase({ isOpen, onClose, children, className }: ModalBaseProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleClose = () => onClose();

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        onClose();
      }
    };

    if (!dialog) return;

    dialog.addEventListener('cancel', handleClose); // Escape key
    dialog.addEventListener('close', handleClose); // Backdrop click
    dialog.addEventListener('click', handleBackdropClick); // Backdrop click

    return () => {
      dialog.removeEventListener('cancel', handleClose);
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        'fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border-4 border-primary-700 p-6 backdrop:bg-black/75',
        className
      )}
      aria-labelledby="dialog-title"
    >
      <div>{children}</div>
    </dialog>
  );
}

interface ModalTitleProps {
  title: string;
  className?: string;
}

ModalBase.Title = function ModalTitle({ title, className }: ModalTitleProps) {
  return (
    <h2 id="dialog-title" className={cn('mb-4 text-xl font-bold', className)}>
      {title}
    </h2>
  );
};

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

ModalBase.Content = function ModalContent({ children, className }: ModalContentProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
};

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

ModalBase.Footer = function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <form method="dialog" className={className}>
      {children}
    </form>
  );
};

const ModalWithSubcomponents = ModalBase as ModalComponent;
export { ModalWithSubcomponents as Modal };
