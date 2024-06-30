import { ComponentSize } from './componentSize';

export const getPostWidth = (type: ComponentSize): string => {
  switch (type) {
    case ComponentSize.small:
      return 'md:w-1/2 lg:w-1/3';
    case ComponentSize.medium:
      return 'md:w-1/2 lg:w-2/3';
    case ComponentSize.large:
      return 'md:w-3/3 lg:w-3/3 mt-2';
    case ComponentSize.extraLarge:
      return 'md:w-full lg:w-full mt-2';
    default:
      return 'md:w-1/2 lg:w-1/3';
  }
};
