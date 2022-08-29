export type TFeature = {
  heading: string;
  description: string;
  isActive?: boolean;
  index?: number;
  handleClick?: (index: number) => void;
};
