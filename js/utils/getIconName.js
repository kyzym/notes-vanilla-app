import { icons } from '../constants/icons.js';

export const getIconName = (category) => {
  switch (category) {
    case 'Task':
      return icons.cart;
    case 'Random Thought':
      return icons.idea;
    case 'Idea':
      return icons.bulb;
    default:
      return icons.bulb;
  }
};
