const priorityScores = {
  none: -1,
  low: 0,
  normal: 1,
  high: 2,
};

export const sortByPriority = (todosToSort, prioritySortMode) => {
  const nonePriorities = todosToSort.filter((todo) => todo.priority === 'none');
  const otherPriorities = todosToSort.filter(
    (todo) => todo.priority !== 'none'
  );

  const sortedPriorities = otherPriorities.sort((a, b) => {
    const aPriority = priorityScores[a.priority];
    const bPriority = priorityScores[b.priority];

    return prioritySortMode === 'desc'
      ? bPriority - aPriority
      : aPriority - bPriority;
  });

  return [...sortedPriorities, ...nonePriorities];
};

export const sortByDueDate = (todosToSort, dateSortMode) =>
  [...todosToSort].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    const isValidDateA = !isNaN(dateA.getTime());
    const isValidDateB = !isNaN(dateB.getTime());

    if (!isValidDateA && !isValidDateB) {
      return 0;
    }
    if (!isValidDateA) {
      return 1;
    }
    if (!isValidDateB) {
      return -1;
    }

    return dateSortMode === 'desc' ? dateA - dateB : dateB - dateA;
  });

export const sortByUrgency = (todosToSort, urgencySortMode) =>
  [...todosToSort].sort((a, b) => {
    const priorityA = priorityScores[a.priority];
    const priorityB = priorityScores[b.priority];
    const hasDueDateA = a.dueDate !== undefined;
    const hasDueDateB = b.dueDate !== undefined;

    if (!hasDueDateA && !hasDueDateB) {
      return 0;
    }
    if (!hasDueDateA) {
      return 1;
    }
    if (!hasDueDateB) {
      return -1;
    }

    const dueDateA = new Date(a.dueDate);
    const dueDateB = new Date(b.dueDate);
    if (priorityA === priorityB) {
      return urgencySortMode === 'desc'
        ? dueDateA - dueDateB
        : dueDateB - dueDateA;
    }
    return urgencySortMode === 'desc'
      ? priorityB - priorityA
      : priorityA - priorityB;
  });
