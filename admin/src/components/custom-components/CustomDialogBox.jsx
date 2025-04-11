import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
export default function CustomDialogBox({ trigger, title, description, children, open, onOpenChange, ...props }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} {...props}>
      <DialogTrigger asChild>{trigger ?? <Button variant='outline'>Dialog</Button>}</DialogTrigger>
      <DialogContent className='sm:max-w-[625px] max-h[95vh] overflow-y-auto' {...props}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
