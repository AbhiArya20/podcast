import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
const lightBlue = '#2694ab';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';
const transformImage = (url = '', width = 100) => {
  const newUrl = url.replace('upload/', `upload/dpr_auto/w_${width}/`);

  return newUrl;
};

const RenderAttachment = (file, url) => {
  switch (file) {
    case 'video':
      return <video src={url} preload='none' width={'200px'} controls />;

    case 'image':
      return (
        <></>
        // <img
        //   src={transformImage(url, 200)}
        //   alt="Attachement"
        //   width={"200px"}
        //   height={"150px"}
        //   style={{
        //     objectFit: "contain",
        //   }}
        // />
      );

    case 'audio':
      return <audio src={url} preload='none' controls />;

    default:
      return <FileOpenIcon />;
  }
};
const fileFormat = (url = '') => {
  const fileExt = url.split('.').pop();

  if (fileExt === 'mp4' || fileExt === 'webm' || fileExt === 'ogg') return 'video';

  if (fileExt === 'mp3' || fileExt === 'wav') return 'audio';
  if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'gif') return 'image';

  return 'file';
};

const CustomMessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? 'flex-end' : 'flex-start',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '5px',
        padding: '0.5rem',
        width: 'fit-content'
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={'600'} variant='caption'>
          {sender.name}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <>
              <Box key={index}>
                <a
                  href={url}
                  target='_blank'
                  download
                  style={{
                    color: 'black',
                    margin: '10px',
                    backgroundColor: 'red'
                  }}
                >
                  {RenderAttachment(file, url)}
                </a>
              </Box>
            </>
          );
        })}

      {content && <Typography>{content}</Typography>}

      <Typography variant='caption' color={'text.secondary'}>
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(CustomMessageComponent);
