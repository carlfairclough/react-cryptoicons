import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const NEXO:React.FC<IconProps> = ({ color, size, ...rest }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M5 10.16l5.485 3.147v.012l10.923 6.31v-6.313L15.94 10.16l5.467 3.157-10.732-6.19h.009a.42.42 0 00-.42 0L5 10.158zm5.485 3.167v6.319l10.711 6.18a.44.44 0 00.42 0l5.265-3.034-2.993-1.73-2.48-1.427v-.006.006l-10.923-6.308zm13.403 7.735l3.004 1.73V10.403a.42.42 0 00-.22-.367L21.408 7v12.63l2.48 1.432zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036v-6.305l-.02-.011v-6.32l.02.012v-.008l-.02-.012v.008L5 10.16z"/></svg>
)
          
NEXO.defaultProps = {
  color: '#000',
  size: 32,
}
          