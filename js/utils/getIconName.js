export const getIconName = (category) => {
  switch (category) {
    case 'Task':
      return 'cart';
    case 'Random Thought':
      return 'cloud-circle';
    case 'Idea':
      return 'bulb';
    default:
      return 'bulb';
  }
};
