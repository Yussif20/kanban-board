import Button from '@components/Button';
import DropdownPrimitive from '@components/DropdownPrimitive';
import TextField from '@components/TextField';
import DialogPrimitive from '@components/DialogPrimitive';

function App() {
  return (
    <div className="text-main-purple font-plus-jakarta text-heading-xl">
      <Button>Hello</Button>
      <TextField />
      <DropdownPrimitive
        items={{
          delete: {
            label: 'Delete',
            onClick: () => console.log('Delete'),
          },
          edit: {
            label: 'Edit',
            onClick: () => console.log('Delete'),
          },
        }}
        triggerComponent={() => <button>Actions</button>}
      />
      <DialogPrimitive isOpen={true}>Hello</DialogPrimitive>
    </div>
  );
}

export default App;
