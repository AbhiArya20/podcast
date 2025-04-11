import { clsx } from 'clsx';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function errorHandler(error) {
  toast.error(error?.response?.data?.message || error.message || 'Something went wrong!');
  console.error(error);
}

// export function customJSONStringify(obj) {
//   return JSON.stringify(obj, function (key, value) {
//     if (typeof value === 'function') {
//       return { __func__: value.name };
//     }
//     return value;
//   });
// }

// export function customJSONParser(str, functionMap) {
//   return JSON.parse(str, function (key, value) {
//     if (value && value.__func__) {
//       return functionMap[value.__func__];
//     }
//     return value;
//   });
// }

// export const handleQueryParamChange = (key, value, location, navigate) => {
//   const searchParams = new URLSearchParams(location.search);
//   if (Array.isArray(key)) {
//     for (const index in key) {
//       searchParams.set(key[index], value[index]);
//     }
//   } else {
//     searchParams.set(key, value);
//   }
//   const newUrl = `${location.pathname}?${searchParams.toString()}`;
//   navigate(newUrl);
// };
// export const handleQueryParamRemove = (key, location, navigate) => {
//   const searchParams = new URLSearchParams(location.search);
//   if (Array.isArray(key)) {
//     for (const index in key) {
//       searchParams.delete(key[index]);
//     }
//   } else {
//     searchParams.delete(key);
//   }
//   const newUrl = `${location.pathname}?${searchParams.toString()}`;
//   navigate(newUrl);
// };

export function formatDateTime(date) {
  if (!date) return '';

  const now = new Date();
  const diffInMinutes = Math.abs(now - date) / (1000 * 60);

  if (diffInMinutes < 1) {
    return 'now';
  } else if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (date.getDate() === now.getDate() - 1 && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
    return 'yesterday';
  } else {
    return date.toLocaleDateString();
  }
}

export function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

export function formatDate(date) {
  if (!date) return '';
  const customOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('en-US', customOptions);
}

// export const getDateFormate = (distance) => {
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   if (days > 365) {
//     return `${Math.floor(days / 365)} Year`;
//   } else if (days > 30) {
//     return `${Math.floor(days / 30)} Month`;
//   } else if (days > 7) {
//     return `${Math.floor(days / 7)} Week`;
//   } else if (days > 0) {
//     return `${days} Days`;
//   } else if (hours > 0) {
//     return `${hours} Hours`;
//   } else if (minutes > 0) {
//     return `${minutes} Minutes`;
//   } else if (seconds > 0) {
//     return `${seconds} Seconds`;
//   } else {
//     return null;
//   }
// };
