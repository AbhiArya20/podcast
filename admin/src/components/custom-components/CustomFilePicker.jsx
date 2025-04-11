import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CustomFilePicker({ label, id, accept, onChange, inputRef }) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5 cursor-pointer'>
      <Label className='mb-1 text-black dark:text-white cursor-pointer' htmlFor={id}>
        {label}
      </Label>
      <Input id={id} type='file' accept={accept} onChange={onChange} ref={inputRef} className='text-black dark:text-white dark:bg-slate-900 cursor-pointer' />
    </div>
  );
}
