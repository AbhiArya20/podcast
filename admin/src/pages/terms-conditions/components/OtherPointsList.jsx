// import CustomDragDrop from '@/components/custom-components/CustomDragDrop';
import PointSectionCard from './PointSectionCard';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { WidthProvider, Responsive } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const OtherPointsList = ({ points, onUpdate, onDelete, onOrderChange, createNewPoint, onUpdatePoint, onDeletePoint, onPointOrderChange }) => {
  return (
    <>
      <div className='w-full'>
        {/* <ResponsiveReactGridLayout
          className='layout'
          isDroppable={true}
          draggableCancel='.non-draggable'
          cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
          onDragStop={(layout, oldItem, newItem) => {
            console.log('layout', layout);
            console.log('oldItem', oldItem);
            console.log('newItem', newItem);
          }}
          isResizable={true}
        > */}
        {points.map((point, idx) => (
          <div
            key={point._id}
            data-grid={{ w: 1, h: 2, x: idx % 4, y: Math.floor(idx / 4), minW: 1, minH: 1 }}
            className='flex bg-gray-100 dark:bg-slate-900 rounded shadow relative overflow-hidden pointer-events-auto'
          >
            <PointSectionCard
              point={point}
              onDelete={onDelete}
              onUpdate={onUpdate}
              createNewPoint={createNewPoint}
              onUpdatePoint={onUpdatePoint}
              onDeletePoint={onDeletePoint}
              onPointOrderChange={onPointOrderChange}
            />
          </div>
        ))}
        {/* </ResponsiveReactGridLayout> */}
      </div>
    </>
  );
};

export default OtherPointsList;
