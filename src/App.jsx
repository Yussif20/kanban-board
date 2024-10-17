import Button from './components/Button';
import DropdownPrimitive from './components/DropdownPrimitive';
import TextField from './components/TextField';

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
    </div>
  );
}

export default App;
