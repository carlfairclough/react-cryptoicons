import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const NLG: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.515-17.196c-1.518.022-7.748.008-9.344.017-.059 0-.166.11-.167.169-.012.67-.013 1.339 0 2.008.002.063.117.178.18.178 2.394.009 4.788.007 7.183.014.043 0 .13.095.124.133-.643 3.832-4.157 6.577-8.035 6.285-4.278-.323-7.486-4.068-7.035-8.317.334-3.14 2.025-5.37 4.982-6.447 2.923-1.065 5.596-.439 7.903 1.675.032.029.136.033.164.005a119.48 119.48 0 001.521-1.521c.026-.026.03-.118.008-.14-2.236-2.13-4.892-3.096-7.968-2.816-5.432.494-9.5 5.41-8.987 10.827.528 5.58 5.358 9.596 10.922 9.082 5.396-.5 9.464-5.362 8.998-10.74-.015-.164-.044-.268-.113-.331-.067-.061-.171-.083-.336-.08z"/></svg>
)
          
NLG.defaultProps = {
  color: '#000',
  size: 32,
}
          