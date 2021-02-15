import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const TAAS: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM4 13v1.221h1.298V13H4zm1.298 4.774v-1.111h2.513v-1.221H4V19h5.075v-1.226H5.298zm17.627-2.332v1.22h3.777v1.112h-2.513V19H28v-3.558h-5.075zm3.798-1.162v-1.221h-3.8v1.22h3.8zm-16.411 1.162V19h3.81v-1.174h1.265v-2.384h-5.075zm3.777 2.332H11.61v-1.111h2.48v1.11zM10.312 13v1.221h5.075V13h-5.075zm6.334 2.442V19h3.81v-1.174h1.265v-2.384h-5.075zm3.772 2.332h-2.48v-1.111h2.48v1.11zM16.646 13v1.221h5.075V13h-5.075z"/></svg>
)
          
TAAS.defaultProps = {
  color: '#000',
  size: 32,
}
          