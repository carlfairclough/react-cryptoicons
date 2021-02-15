import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ZIL : React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.89 6L9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.351 2.845-1.281v-8.951l-2.845 1.295v6.085l-7.548-3.67 7.548-3.897 2.845-1.281-.013-2.86z"/><path d="M9 7.281l11.114 5.383 2.845-1.282L11.891 6z" fill-opacity=".65"/><path d="M20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z" fill-opacity=".3"/></svg>
)
          
ZIL.defaultProps = {
  color: '#000',
  size: 32,
}
          