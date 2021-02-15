import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ZEC : React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.904-12.154a37.083 37.083 0 001.518-1.778 462.138 462.138 0 003.714-4.58c.387-.48.968-.958 1.065-1.505.194-1.026.065-2.12.065-3.248H17.55V6h-3.132v2.803h-3.585v3.35h6.039c-.55.65-1.033 1.197-1.518 1.779a462.137 462.137 0 00-3.714 4.58c-.355.48-.936.958-1.033 1.505-.194 1.026-.065 2.12-.065 3.214h3.876V26h3.261c-.064-.957-.097-1.846-.161-2.803h3.875v-3.35h-6.297z"/></svg>
)
          
ZEC.defaultProps = {
  color: '#000',
  size: 32,
}
          