import { CSSProperties, FC } from 'react';

interface PolygonProps {
  style?: CSSProperties;
  fill?: string
}

export const Polygon: FC<PolygonProps> = ({ style, fill }) => {
  return (
    <svg
      width='37'
      height='25'
      viewBox='0 0 37 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}>
      <path
        d='M36.8001 24.0576C36.8001 24.0576 30.522 24.2208 26.4996 24C26.4996 24 20.9741 23.5653 17.4996 23C13.8992 22.4142 11.9659 21.6364 8.49963 20.5C5.32905 19.4605 0.499636 17.5 0.499636 17.5L14.3666 0.0458846C14.3666 0.0458846 16.1486 3.74649 17.4996 6C19.0872 8.64792 19.9889 10.1572 21.9996 12.5C24.2495 15.1214 25.7971 16.3482 28.4996 18.5C31.5514 20.9299 36.8001 24.0576 36.8001 24.0576Z'
        fill={fill}
      />
    </svg>
  );
};
