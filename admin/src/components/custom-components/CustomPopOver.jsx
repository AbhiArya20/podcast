import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function CustomPopOver({ trigger, children, open, onOpenChange, ...props }) {
  return (
    <Popover open={open} onOpenChange={onOpenChange} {...props}>
      <PopoverTrigger asChild>{trigger ?? <Button variant='outline'>Dialog</Button>}</PopoverTrigger>
      <PopoverContent className={`relative w-[100vw] max-w-full sm:w-[30rem] p-0 mt-2 shadow-2xl sm:mr-10 select-none`}>{children}</PopoverContent>
    </Popover>
  );
}
