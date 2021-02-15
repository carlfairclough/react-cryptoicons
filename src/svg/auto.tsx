import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const AUTO: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.5-12.733v-8.2L16 6l-8.5 5.067v9.955L16 26l7.015-4.108-7.538-4.47 1.365-.755v-7.9l5.74 3.422v3.633l-1.787-1.055-.48 1.989 4.185 2.511zM9.418 12.19l5.518-3.29v6.568l-5.518 3.2V12.19zm4.097 6.344l5.66 3.353L16 23.745l-5.623-3.293 3.138-1.919z"/></svg>
)
          
AUTO.defaultProps = {
  color: '#000',
  size: 32,
}
          