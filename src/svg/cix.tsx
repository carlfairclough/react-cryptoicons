import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const CIX:React.FC<IconProps> = ({ color, size, ...rest }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M24.668 18.863l-6.634 3.659-2.792-3.729-8.073 4.252v.94L15 19.862l2.792 3.728 7.364-4.062.145 1.27 1.62-2.636-.955.011v-.025l-.048.026-2.31.027 1.059.663zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.444-14.042V8.644h-3.06v10.925l3.06-1.611zm8.653.481V8.644h-3.06v11.495l3.06-1.7zm-4.326 2.404V9.893h-3.061v8.104l2.404 3.21.657-.364zm-8.654-.607v-8.924h-3.06v10.536l3.06-1.612z"/><path d="M18.883 20.843l-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607l-3.06 1.612V11.312h3.06v8.924z" opacity=".5"/></svg>
)
          
CIX.defaultProps = {
  color: '#000',
  size: 32,
}
          