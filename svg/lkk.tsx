import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const LKK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.995-6L16 19.894 21.976 26v-3.656L16 16.24l-5.995 6.105V26zM5 13.633l2.531 2.606H16l-2.531-2.606H5zm22 0h-8.469V7.586L16 5v11.239h8.469L27 13.633z"/></svg>
)
          
LKK.defaultProps = {
  color: '#000',
  size: 32,
}
          