import CustomButton from '@/components/custom-components/CustomButton';
import CustomInput from '@/components/custom-components/CustomInput';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { errorHandler } from '@/lib/utils';

export default function CreatePoint({ currentPoint = '', createNewPoint }) {
  const [point, setPoint] = useState(currentPoint);
  const [loading, setLoading] = useState(false);

  const fields = [
    {
      id: 'point',
      type: 'text',
      label: 'point',
      value: point,
      onChange: (e) => setPoint(e.target.value),
      placeholder: 'Enter point',
      maxlength: 200,
      currentLength: point.length
    }
  ];

  const isValidInput = () => {
    if (!point) {
      toast.error('Title is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidInput()) return;
    try {
      setLoading(true);
      await createNewPoint(point);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full sm:px-4 overflow-auto max-h-svh'>
      <div className={`rounded-md`}>
        <form>
          <div>
            {fields.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
                maxLength={field.maxlength}
                currentLength={field.currentLength}
              />
            ))}
          </div>
          <CustomButton btnText={currentPoint ? `Update` : `Create`} handleSubmit={handleSubmit} loading={loading} className={`mt-4 `} />
        </form>
      </div>
    </div>
  );
}
