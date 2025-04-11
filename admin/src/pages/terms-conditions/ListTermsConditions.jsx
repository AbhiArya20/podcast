import { CustomMessageCardType1 } from '@/components/custom-components/CustomMessageCardType1';
import { getTermsConditions } from '@/http/terms-conditions-service';
import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
import { useEffect, useState } from 'react';
import SimpleCard from '../../components/SimpleCard';
import SimpleCardLoading from '../../components/SimpleCardLoading';
import { useNavigate } from 'react-router';
import { colorData } from '@/lib/constants';
import SimpleCardIcons from '../../components/SimpleCardIcons';
import { capitalizeWords } from '@/lib/utils';

export default function ListTermsConditions() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [termAndConditions, setTermAndConditions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await getTermsConditions();
        const termsConditions = response.data.termsConditions;
        setTermAndConditions([...termsConditions]);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const navigate = useNavigate();
  const handleCardClick = (e, id, idx) => {
    e.stopPropagation();
    navigate(`/terms-conditions-privacy-policy/${id}?idx=${idx}`);
  };

  return (
    <PrivatePageWrapper>
      <div className='flex flex-col h-full p-4 gap-4'>
        <h1 className='font-bold leading-none tracking-tight text-gray-600 text-base sm:text-xl dark:text-white'>Terms and Conditions OR Privacy Policy</h1>
        {error ? (
          <div className='w-full h-full items-center justify-center'>
            <CustomMessageCardType1 message={'No Internet Connection'} description={'Please check your internet connection and try again.'} />
          </div>
        ) : (
          <>
            {loading ? (
              <div className='flex flex-wrap gap-4 justify-center'>
                <SimpleCardLoading />
                <SimpleCardLoading />
                <SimpleCardLoading />
                <SimpleCardLoading />
                <SimpleCardLoading />
                <SimpleCardLoading />
              </div>
            ) : (
              <div className='flex flex-wrap gap-4 justify-center'>
                {termAndConditions.map((termAndCondition, idx) => (
                  <SimpleCard
                    key={termAndCondition._id}
                    onClick={(e) => handleCardClick(e, termAndCondition._id, idx)}
                    title={capitalizeWords(termAndCondition.termsConditionsName)}
                    icon={<SimpleCardIcons color1={colorData[idx % colorData.length].iconColor} color2={colorData[idx % colorData.length].iconHoverColor} />}
                    bgColor={colorData[idx % colorData.length].bgColor}
                    hoverColor={colorData[idx % colorData.length].hoverColor}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </PrivatePageWrapper>
  );
}
