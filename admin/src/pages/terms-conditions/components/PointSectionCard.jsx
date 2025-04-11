import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';
import { PlusIcon } from 'lucide-react';

import CustomSectionLoading from '@/components/custom-components/CustomSectionLoading';
import CustomImg from '@/components/custom-components/CustomImg';
import TermsConditionIcon from '../../../components/SimpleCardIcons';
import { colorData } from '@/lib/constants';
import { capitalizeWords, errorHandler } from '@/lib/utils';
import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
import CreatePoint from './CreatePoint';
import CreateOrUpdatePointSectionCard from './CreateOrUpdatePointSectionCard';
import CustomAlertDialog from '@/components/custom-components/CustomAlertDialog';
import CustomDragDrop from '@/components/custom-components/CustomDragDrop';

function LoadingOverlay({ loading }) {
  if (!loading) return null;

  return (
    <div className='absolute w-full h-full z-30'>
      <CustomSectionLoading />
    </div>
  );
}

function SectionHeader({ image, imageBlurHash, title, idx }) {
  return (
    <div className='flex items-center sm:items-start space-x-4 w-full flex-wrap'>
      {image ? (
        <div className='w-24 h-24 rounded-full overflow-hidden'>
          <CustomImg src={image} blurHash={imageBlurHash} alt={title} className='w-24 h-24' />
        </div>
      ) : (
        <TermsConditionIcon className='w-16 h-16 rounded-full' color1={colorData[idx % colorData.length].iconColor} color2={colorData[idx % colorData.length].iconHoverColor} />
      )}
      <div className='sm:mt-4'>
        <h2 className='text-base sm:text-xl dark:text-white font-semibold'>{capitalizeWords(title)}</h2>
      </div>
    </div>
  );
}

function PointItem({ point, onUpdatePoint, onDeletePoint }) {
  const [openUpdateSection, setOpenUpdateSection] = useState(false);

  return (
    <div className='flex items-center w-full justify-between bg-gray-200 dark:bg-slate-800 p-4 rounded-2xl shadow dark:text-white non-draggable'>
      <span>{point}</span>
      <div className='flex space-x-2 right-2 top-2'>
        <CustomDialogBox
          open={openUpdateSection}
          onOpenChange={setOpenUpdateSection}
          trigger={
            <IconButton aria-label='edit' className='non-draggable'>
              <MdEdit className='text-blue-500' />
            </IconButton>
          }
          title={'Update Point'}
        >
          <CreatePoint
            currentPoint={point}
            createNewPoint={async (data) => {
              const response = await onUpdatePoint(data);
              setOpenUpdateSection(false);
              return response;
            }}
          />
        </CustomDialogBox>
        <CustomAlertDialog
          trigger={
            <IconButton aria-label='delete' className='non-draggable'>
              <MdDelete className='text-red-500' />
            </IconButton>
          }
          onAction={() => onDeletePoint()}
        />
      </div>
    </div>
  );
}

function PointsList({ points, onUpdatePoint, onDeletePoint, onPointOrderChange }) {
  if (points.length === 0) return <p className='text-gray-500'>No points available</p>;

  return (
    <CustomDragDrop
      list={points}
      className={'flex flex-col'}
      onOrderChange={(result) => {
        console.log(result);
      }}
    >
      {(item, index) => <PointItem point={item} onUpdatePoint={(data) => onUpdatePoint(data, index)} onDeletePoint={() => onDeletePoint(index)} />}
    </CustomDragDrop>
  );
}

function DialogTriggers({ openCreatePoint, setOpenCreatePoint, point, createNewPoint }) {
  return (
    <CustomDialogBox
      open={openCreatePoint}
      onOpenChange={setOpenCreatePoint}
      title={'Create Point'}
      description={`Use this form to create a new point for the ${capitalizeWords(point.title)}`}
      trigger={
        <div className='non-draggable flex flex-wrap gap-2 items-center justify-center min-h-12 w-36 bg-gray-200 dark:bg-slate-800 dark:text-white rounded-2xl cursor-pointer mt-3'>
          <PlusIcon className='w-8 h-8 text-gray-500 dark:text-white' />
          <span>Add Point</span>
        </div>
      }
    >
      <CreatePoint
        createNewPoint={async (newPoint) => {
          const response = await createNewPoint(newPoint, point._id);
          setOpenCreatePoint(false);
          return response;
        }}
      />
    </CustomDialogBox>
  );
}

export default function PointSectionCard({ point, onDelete, onUpdate, createNewPoint, onUpdatePoint, onDeletePoint, onPointOrderChange }) {
  const [searchParams] = useSearchParams();
  const idxParams = searchParams.get('idx') ?? '1';
  const idx = parseInt(idxParams);
  const [loading, setLoading] = useState(false);
  const [openUpdateSection, setOpenUpdateSection] = useState(false);
  const [openCreatePoint, setOpenCreatePoint] = useState(false);

  const deleteSection = async (pointId) => {
    try {
      setLoading(true);
      await onDelete(pointId);
      toast.success('Section deleted successfully');
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const updateSection = async (data, pointId) => {
    try {
      setOpenUpdateSection(false);
      setLoading(true);
      await onUpdate(data, pointId);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full relative cursor-grab'>
      <LoadingOverlay loading={loading} />
      <div className='flex flex-col items-start p-4 space-y-4'>
        <SectionHeader image={point.image} imageBlurHash={point.imageBlurHash} title={point.title} idx={idx} />
        <div className='flex flex-col w-full items-end justify-start'>
          <PointsList
            points={point.points}
            onUpdatePoint={(data, index) => onUpdatePoint(data, point._id, index)}
            onDeletePoint={(index) => onDeletePoint(point._id, index)}
            onPointOrderChange={onPointOrderChange}
          />
          <DialogTriggers openCreatePoint={openCreatePoint} setOpenCreatePoint={setOpenCreatePoint} point={point} createNewPoint={createNewPoint} />
        </div>
      </div>
      <div className='absolute flex right-2 top-2'>
        <CustomDialogBox
          open={openUpdateSection}
          onOpenChange={setOpenUpdateSection}
          trigger={
            <IconButton aria-label='edit' className='non-draggable'>
              <MdEdit className='text-blue-500' />
            </IconButton>
          }
          title={'Update Section'}
          description={`Use this form to update ${capitalizeWords(point.title)} section`}
        >
          <CreateOrUpdatePointSectionCard sectionTitle={point.title} onCreateOrUpdateSection={async (data) => await updateSection(data, point._id)} sectionId={point._id} />
        </CustomDialogBox>
        <CustomAlertDialog
          trigger={
            <IconButton aria-label='delete' className='non-draggable'>
              <MdDelete className='text-red-500' />
            </IconButton>
          }
          onAction={() => deleteSection(point._id)}
        />
      </div>
    </div>
  );
}
