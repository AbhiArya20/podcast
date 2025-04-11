import { useEffect, useState } from 'react';
import {
  addTermsConditionsOtherPoints,
  deleteTermsConditionsOtherPoints,
  getSingleTermsConditions,
  updateTermsConditionsOtherPoints,
  updateTermsConditionsPoints
} from '@/http/terms-conditions-service';
import { errorHandler } from '@/lib/utils';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const useTermsConditions = (termsConditionsId) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [termAndCondition, setTermAndCondition] = useState(null);
  const [openCreateSection, setOpenCreateSection] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getSingleTermsConditions(termsConditionsId);
        const termsConditions = response.data;
        console.log(termsConditions);
        setTermAndCondition(termsConditions);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [termsConditionsId]);

  const onCreateSection = async (section) => {
    const response = await addTermsConditionsOtherPoints(termsConditionsId, section);
    setTermAndCondition(response.data);
    setOpenCreateSection(false);
  };

  const onDeleteSection = async (pointId) => {
    const response = await deleteTermsConditionsOtherPoints(termsConditionsId, pointId);
    setTermAndCondition(response.data);
  };

  const onUpdateSection = async (section, pointId) => {
    const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, section);
    setTermAndCondition(response.data);
  };

  const onOrderChange = async (result) => {
    const reorderedList = reorder(termAndCondition.otherPoints, result.source.index, result.destination.index);
    setTermAndCondition((prev) => ({
      ...prev,
      otherPoints: reorderedList
    }));
    try {
      await updateTermsConditionsPoints(termsConditionsId, { otherPoints: reorderedList });
    } catch (error) {
      errorHandler(error);
    }
  };

  const createNewPoint = async (point, pointId) => {
    const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
    points.push(point);
    const formData = new FormData();
    points.forEach((value, index) => {
      formData.append(`points[${index}]`, value);
    });
    const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
    setTermAndCondition(response.data);
  };

  const updatePoint = async (point, pointId, index) => {
    const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
    points[index] = point;
    const formData = new FormData();
    points.forEach((value, index) => {
      formData.append(`points[${index}]`, value);
    });
    const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
    setTermAndCondition(response.data);
  };

  const deletePoint = async (pointId, index) => {
    console.log(pointId, index);
    const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
    points.splice(index, 1);
    console.log(points);
    const formData = new FormData();
    if (points.length === 0) {
      formData.append('points', '[]');
    } else {
      points.forEach((value, index) => {
        formData.append(`points[${index}]`, value);
      });
    }
    const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
    setTermAndCondition(response.data);
  };

  const onPointOrderChange = async (result, pointId) => {
    const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
    const reorderedList = reorder(points, result.source.index, result.destination.index);
    const formData = new FormData();
    reorderedList.forEach((value, index) => {
      formData.append(`points[${index}]`, value);
    });
    const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
    setTermAndCondition(response.data);
  };

  return {
    error,
    loading,
    termAndCondition,
    openCreateSection,
    setOpenCreateSection,
    onCreateSection,
    onDeleteSection,
    onUpdateSection,
    onOrderChange,
    createNewPoint,
    updatePoint,
    deletePoint,
    onPointOrderChange
  };
};
