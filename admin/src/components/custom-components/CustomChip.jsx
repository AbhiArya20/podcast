import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CustomChip({ label, avatar, color }) {
  return (
    <div className='cursor-pointer'>
      <Stack direction='row' spacing={1}>
        <Chip color={color} avatar={<Avatar sx={{ bgcolor: `${color}.dark` }}>{avatar}</Avatar>} label={label} />
      </Stack>
    </div>
  );
}
