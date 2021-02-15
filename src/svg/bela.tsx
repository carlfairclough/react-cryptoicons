import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BELA: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M8.297 11.568a8.936 8.936 0 00-1.189 4.468c0 4.95 4.005 8.964 8.946 8.964S25 20.987 25 16.036c0-4.95-4.005-8.964-8.946-8.964a8.891 8.891 0 00-4.501 1.216A2.416 2.416 0 007 9.422a2.42 2.42 0 001.297 2.146zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.054-11.554c-2.43 0-4.4-1.974-4.4-4.41s1.97-4.41 4.4-4.41 4.4 1.975 4.4 4.41-1.97 4.41-4.4 4.41z" fill-rule="evenodd"/></svg>
)
          
BELA.defaultProps = {
  color: '#000',
  size: 32,
}
          