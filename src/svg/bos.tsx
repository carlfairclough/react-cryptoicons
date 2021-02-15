import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BOS: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.568-13.05h2.659c3.94 0 5.909-1.081 5.909-3.245v-5.46C23 8.083 21.03 7 17.09 7H10v5.016h2.66V8.918h4.726c1.97 0 2.955.492 2.955 1.475v5.164c0 .984-.985 1.476-2.955 1.476h-2.954v1.918zm5.909 1.181v1.476c0 .983-.985 1.475-2.955 1.475H12.66V15.41h4.727c.322 0 .618.013.887.04v-1.922a18.301 18.301 0 00-1.182-.036H10V25h7.09c3.94 0 5.91-1.082 5.91-3.246v-1.623h-2.66z"/></svg>
)
          
BOS.defaultProps = {
  color: '#000',
  size: 32,
}
          