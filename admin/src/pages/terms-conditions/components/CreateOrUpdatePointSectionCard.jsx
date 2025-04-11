import CustomButton from '@/components/custom-components/CustomButton';
import { CustomFilePicker } from '@/components/custom-components/CustomFilePicker';
import CustomInput from '@/components/custom-components/CustomInput';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { errorHandler } from '@/lib/utils';

export default function CreateOrUpdatePointSectionCard({ sectionTitle = '', onCreateOrUpdateSection }) {
  const [title, setTitle] = useState(sectionTitle);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageRef = useRef();

  const fields = [
    {
      id: 'title',
      type: 'text',
      label: 'Title',
      value: title,
      onChange: (e) => setTitle(e.target.value),
      placeholder: 'Enter title',
      maxlength: 20,
      currentLength: title.length
    }
  ];

  const isValidInput = () => {
    if (!title) {
      toast.error('Title is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidInput()) return;
    try {
      const formData = new FormData();
      formData.append('title', title);
      if (image) {
        formData.append('image', image);
      }
      setLoading(true);
      await onCreateOrUpdateSection(formData);
      toast.success(`Point Section ${sectionTitle ? 'updated' : 'created'} successfully`);
      if (imageRef.current?.value) {
        imageRef.current.value = '';
      }
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
          <div className={`flex flex-col`}>
            <CustomFilePicker
              label='Image'
              id='image'
              accept='image/*'
              inputRef={imageRef}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <span className='text-xs text-red-500 ml-2 font-bold'>It is not recommended to use images in terms and conditions</span>
          </div>
          <CustomButton btnText={sectionTitle ? `Update` : `Create`} handleSubmit={handleSubmit} loading={loading} className={`mt-4 `} />
        </form>
      </div>
    </div>
  );
}
