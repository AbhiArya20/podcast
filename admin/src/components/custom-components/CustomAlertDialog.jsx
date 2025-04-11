import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import CustomButton from './CustomButton';

export default function CustomAlertDialog({ trigger, title, description, actionText = 'Continue', cancelText = 'Cancel', onAction, loading }) {
  return (
    <AlertDialog open={loading ? loading : undefined}>
      <AlertDialogTrigger asChild>{trigger || <Button variant='outline'>Show Dialog</Button>}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title || 'Are you absolutely sure?'}</AlertDialogTitle>
          <AlertDialogDescription>{description || 'This action cannot be undone. This will permanently delete your account.'}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <CustomButton
              btnText={actionText}
              onClick={() => {
                onAction();
              }}
              className={'sm:max-w-32'}
              loading={loading}
            ></CustomButton>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
