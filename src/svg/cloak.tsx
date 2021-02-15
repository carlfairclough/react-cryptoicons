import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const CLOAK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.003-27C9.94 5 5.003 9.929 5 15.986 4.997 22.053 9.925 26.994 15.986 27h.01C22.062 27 26.998 22.067 27 16.003 27.002 9.946 22.069 5.01 16.003 5zM16 6.418h.001c2.556 0 4.96.998 6.771 2.81a9.504 9.504 0 012.805 6.77c-.004 5.28-4.306 9.576-9.59 9.576-5.273-.004-9.562-4.3-9.561-9.576.002-5.282 4.297-9.58 9.574-9.58zm4.728 8.599a4.798 4.798 0 00-4.701-3.856c-.355 0-.715.04-1.07.118-2.382.522-3.967 2.676-3.77 5.12.093 1.161.54 2.137 1.363 2.985l.158.163.21-.089.388-.16.489-.196-.387-.359a3.635 3.635 0 01-1.114-2.04c-.223-1.186.082-2.294.88-3.204a3.764 3.764 0 012.83-1.28c.988 0 1.918.38 2.62 1.067.799.78 1.183 1.728 1.144 2.814-.039 1.086-.448 1.987-1.217 2.677l-.394.354.49.204c.123.051.244.106.363.164l.216.106.17-.171c1.235-1.254 1.671-2.698 1.332-4.417zm-10.755 6.29l.244.273.916-.986-.196-.227a6.592 6.592 0 01-1.43-2.77 6.618 6.618 0 01.12-3.626 6.588 6.588 0 012.009-3.037 6.699 6.699 0 014.371-1.625c1.761 0 3.419.678 4.667 1.909 1.23 1.212 1.902 2.684 1.998 4.374.103 1.85-.467 3.49-1.695 4.873l-.198.223.898 1.002.249-.268c1.963-2.105 2.62-5.257 1.675-8.03a8.028 8.028 0 00-7.787-5.426 8.032 8.032 0 00-7.443 5.517c-1.07 3.258.126 6.178 1.602 7.824z" fill-rule="evenodd"/></svg>
)
          
CLOAK.defaultProps = {
  color: '#000',
  size: 32,
}
          