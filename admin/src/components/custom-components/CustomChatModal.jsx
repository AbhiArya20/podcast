import CustomListChatTile from './CustomListChatTile';

import CustomChat from './CustomChat';

export default function ChatModal() {
  const data = [];
  return (
    <>
      <div className='p-2 w-full min-h-[60vh]'>
        <div className={`flex items-center bg-transparentjustify-start gap-2`}>
          <CustomListChatTile
            id={'this is id'}
            avatar={'https://edudoor-jobseeker.s3.ap-south-1.amazonaws.com/profileImg/undefined/1717870023418-2fe31a17-3ac8-4b64-b3ee-b281e26e9f06.png'}
            title={'Abhishek Kumar'}
            subtitle={'hello@gmail.com'}
          />
        </div>
        <CustomChat chat={data} />
      </div>
    </>
  );
}
