import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const IGNIS: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.812 6c-1.004 2.89-2.2 5.715-3.247 8.59.727 1.298 1.417 2.615 2.153 3.906l5.545-9.671C17.758 7.915 16.33 6.888 14.812 6zM10 26c1.595-.034 3.188-.014 4.783-.014C17.17 21.745 19.594 17.523 22 13.29a1620.39 1620.39 0 01-2.496-4.37C16.4 14.645 13.139 20.291 10 26zm5.082-.023c2.12-1.249 4.239-2.5 6.345-3.775-.797-1.032-1.612-2.053-2.415-3.08-1.347 2.264-2.6 4.58-3.93 6.855z" fill-rule="evenodd"/></svg>
)
          
IGNIS.defaultProps = {
  color: '#000',
  size: 32,
}
          