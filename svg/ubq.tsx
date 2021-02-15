import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const UBQ: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><g fill-rule="evenodd"><path d="M13.503 15.844l3.318-2.01V5L6.008 11.278v9.103l7.777 4.068-.282-8.605zm4.994.275l-3.318 2.012V27l10.813-6.321v-9.103l-7.777-4.068.282 8.611zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path fill-opacity=".305" fill-rule="nonzero" d="M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"/></g></svg>
)
          
UBQ.defaultProps = {
  color: '#000',
  size: 32,
}
          