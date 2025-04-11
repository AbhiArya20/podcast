import { IconButton, Skeleton, Stack, keyframes } from '@mui/material';
import { useRef, useState } from 'react';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';

import { ListItemText, Menu, MenuItem, MenuList, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFileMenu, setUploadingLoader } from '../../redux/reducers/misc';
import { AudioFile as AudioFileIcon, Image as ImageIcon, UploadFile as UploadFileIcon, VideoFile as VideoFileIcon } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { useSendAttachmentsMutation } from '../../redux/api/api.js';
import styled from 'styled-components';
import { SmileIcon } from 'lucide-react';
import CustomMessageComponent from './CustomMessageComponent';

const FileMenu = ({ anchorE1, chatId }) => {
  const { isFileMenu } = useSelector((state) => state.misc);

  const dispatch = useDispatch();

  const imageRef = useRef(null);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const fileRef = useRef(null);

  const [sendAttachments] = useSendAttachmentsMutation();

  const closeFileMenu = () => dispatch(setIsFileMenu(false));

  const selectImage = () => imageRef.current?.click();
  const selectAudio = () => audioRef.current?.click();
  const selectVideo = () => videoRef.current?.click();
  const selectFile = () => fileRef.current?.click();

  const fileChangeHandler = async (e, key) => {
    const files = Array.from(e.target.files);
    if (files.length <= 0) return;
    if (files.length > 5) return toast.error(`You can only send 5 ${key} at a time`);
    dispatch(setUploadingLoader(true));
    const toastId = toast.loading(`Sending ${key}...`);
    closeFileMenu();
    try {
      const myForm = new FormData();
      myForm.append('chatId', chatId);
      files.forEach((file) => myForm.append('files', file));
      const res = await sendAttachments(myForm);
      if (res.data) toast.success(`${key} sent successfully`, { id: toastId });
      else toast.error(`Failed to send ${key}`, { id: toastId });
    } catch (error) {
      toast.error(error, { id: toastId });
    } finally {
      dispatch(setUploadingLoader(false));
    }
  };

  return (
    <Menu
      anchorEl={anchorE1}
      open={isFileMenu}
      onClose={closeFileMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <div
        style={{
          width: '10rem'
        }}
      >
        <MenuList>
          <MenuItem onClick={selectImage}>
            <Tooltip title='Image'>
              <ImageIcon />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Image</ListItemText>
            <input type='file' multiple accept='image/png, image/jpeg, image/gif' style={{ display: 'none' }} onChange={(e) => fileChangeHandler(e, 'Images')} ref={imageRef} />
          </MenuItem>

          <MenuItem onClick={selectAudio}>
            <Tooltip title='Audio'>
              <AudioFileIcon />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Audio</ListItemText>
            <input type='file' multiple accept='audio/mpeg, audio/wav' style={{ display: 'none' }} onChange={(e) => fileChangeHandler(e, 'Audios')} ref={audioRef} />
          </MenuItem>

          <MenuItem onClick={selectVideo}>
            <Tooltip title='Video'>
              <VideoFileIcon />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Video</ListItemText>
            <input type='file' multiple accept='video/mp4, video/webm, video/ogg' style={{ display: 'none' }} onChange={(e) => fileChangeHandler(e, 'Videos')} ref={videoRef} />
          </MenuItem>

          <MenuItem onClick={selectFile}>
            <Tooltip title='File'>
              <UploadFileIcon />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>File</ListItemText>
            <input type='file' multiple accept='*' style={{ display: 'none' }} onChange={(e) => fileChangeHandler(e, 'Files')} ref={fileRef} />
          </MenuItem>
        </MenuList>
      </div>
    </Menu>
  );
};

const bounceAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.5); }
100% { transform: scale(1); }
`;

const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`
}));

const TypingLoader = () => {
  return (
    <Stack spacing={'0.5rem'} direction={'row'} padding={'0.5rem'} justifyContent={'center'}>
      <BouncingSkeleton
        variant='circular'
        width={15}
        height={15}
        style={{
          animationDelay: '0.1s'
        }}
      />
      <BouncingSkeleton
        variant='circular'
        width={15}
        height={15}
        style={{
          animationDelay: '0.2s'
        }}
      />
      <BouncingSkeleton
        variant='circular'
        width={15}
        height={15}
        style={{
          animationDelay: '0.4s'
        }}
      />
      <BouncingSkeleton
        variant='circular'
        width={15}
        height={15}
        style={{
          animationDelay: '0.6s'
        }}
      />
    </Stack>
  );
};

const InputBox = styled('input')`
  width: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${'rgba(247,247,247,1)'};
`;

export default function CustomChat() {
  const isDarkMode = useSelector((state) => state.globalSetting.isDarkMode);
  const dispatch = useDispatch();

  const userTyping = true;

  const allMessages = [
    {
      sender: {
        _id: 1,
        name: 'user'
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-28T07:39:51.414Z'),
      attachments: [
        {
          url: 'https://edudoor.s3.ap-south-1.amazonaws.com/admin/profilePic/662b4a57e84d679e8d4d9338-1714289990480-403-ada87842-e40f-43bb-b1c1-373e82e3ab4e.png'
        },
        {
          url: 'https://edudoor.s3.ap-south-1.amazonaws.com/admin/profilePic/662b4a57e84d679e8d4d9338-1714289990480-403-ada87842-e40f-43bb-b1c1-373e82e3ab4e.png'
        },
        {
          url: 'https://edudoor.s3.ap-south-1.amazonaws.com/admin/profilePic/662b4a57e84d679e8d4d9338-1714289990480-403-ada87842-e40f-43bb-b1c1-373e82e3ab4e.png'
        }
      ]
    },
    {
      sender: {
        _id: 2,
        name: 'user'
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-29T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    },
    {
      sender: {
        _id: 2
      },
      content: 'This is a message',
      createdAt: new Date('2024-04-30T07:39:51.414Z')
    }
  ];

  const handleFileOpen = (e) => {
    dispatch(setIsFileMenu(true));
    setFileMenuAnchor(e.currentTarget);
  };
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);
  return (
    <div>
      <Stack
        boxSizing={'border-box'}
        bgcolor={'rgba(247,247,247,1)'}
        height={'60vh'}
        padding={'1rem'}
        marginTop={'.5rem'}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
          borderRadius: '1rem',
          gap: '.5rem'
        }}
      >
        {allMessages.map((message, idx) => {
          let notEqual = false;
          if (idx > 0) {
            notEqual = message.createdAt.getDate() !== allMessages[idx - 1].createdAt.getDate();
          }
          return (
            <>
              {/* {notEqual && 'notEqual'} */}
              <CustomMessageComponent key={message._id} message={message} />
            </>
          );
        })}

        {userTyping && <TypingLoader />}
      </Stack>

      <Stack
        direction={'row'}
        gap={'.5rem'}
        sx={{
          position: 'sticky',
          bottom: 0,
          paddingY: '.5rem'
        }}
      >
        <IconButton onClick={handleFileOpen}>
          <AttachFileIcon />
        </IconButton>

        <IconButton
          sx={{
            position: 'absolute',
            left: '3rem'
          }}
          onClick={handleFileOpen}
        >
          <SmileIcon />
        </IconButton>

        <InputBox placeholder='Type Message Here...' />

        <IconButton
          type='submit'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#02a17f',
            color: 'white',
            marginLeft: '2px',
            '&:hover': {
              bgcolor: '#028166'
            }
          }}
        >
          <SendIcon />
        </IconButton>
      </Stack>

      <FileMenu anchorE1={fileMenuAnchor} chatId={'chatId'} />
    </div>
  );
}
