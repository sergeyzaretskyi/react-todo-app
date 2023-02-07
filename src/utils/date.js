export const getNewDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const formatDueDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const daysLeft = (targetDateString) => {
  if (!targetDateString) {
    return '';
  }

  const currentDate = new Date();
  const targetDate = new Date(targetDateString);

  const timeDifference = targetDate - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'today';
  } else if (daysDifference === -1) {
    return 'yesterday';
  } else if (daysDifference === 1) {
    return 'tomorrow';
  } else if (daysDifference < 0) {
    return `${-daysDifference} days ago`;
  } else {
    return `in ${daysDifference} days`;
  }
};
