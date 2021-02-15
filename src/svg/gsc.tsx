import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const GSC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.07-19.953h-9.148a3.876 3.876 0 103.628 5.224h-3.628a1.022 1.022 0 01-1.023-1.023v-.124a1.022 1.022 0 011.023-1.023h6.047c.044.282.065.567.062.852a6.109 6.109 0 11-6.109-6.139l.187-.031c.039.018.08.028.124.031h5.426c2.961 0 4.17-1.581 4.17-3.814h-9.907C10.45 6 6.01 10.433 6 15.907c-.008 5.474 4.418 9.92 9.892 9.938 5.474.017 9.927-4.402 9.953-9.876v-3.132a.775.775 0 00-.775-.79z"/></svg>
)
          
GSC.defaultProps = {
  color: '#000',
  size: 32,
}
          