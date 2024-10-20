import * as Dialog from '@radix-ui/react-dialog';

/**
 * @param {Object} props
 * @param {String} props.title
 * @param {JSX.Element} props.triggerComponent
 * @param {JSX.Element} props.children
 * @param {Boolean} props.isOpen
 * @param {Function} props.setOpen
 * @param {String} [props.description] - Optional description for the dialog
 * @returns {JSX.Element}
 */

export const DialogPrimitive = ({
  title,
  triggerComponent,
  children,
  isOpen,
  setOpen,
  description,
}) => {
  const fallbackDescription =
    'This dialog provides information that needs attention.';

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{triggerComponent}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[480px] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-[6px] bg-white p-8 focus:outline-none"
          aria-describedby="dialog-description"
        >
          <Dialog.Title className="text-heading-l">{title}</Dialog.Title>
          <Dialog.Description
            id="dialog-description"
            className="text-sm text-gray-600 mt-2"
          >
            {description || fallbackDescription}
          </Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
