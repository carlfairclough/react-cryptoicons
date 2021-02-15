import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SAFE: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.989-9.329V9.998L15.985 3.66l-.015.008-10.966 6.337v12.67l10.975 6.322.001.001 11.008-6.326zm-4.87-2.026l-1.877-1.076L16.054 22a.079.079 0 01-.08 0l-4.805-2.785-.002-4.845-4.221-2.42 8.998-5.275a.023.023 0 01.024 0l8.357 4.778-1.478.855-6.875-3.956-6.097 3.579 2.115 1.215 3.986-2.318.002-.002 4.87 2.785-.002 4.61 4.151 2.377-.001.07-9.016 5.264-8.358-4.772 1.463-.857 6.881 3.947 6.153-3.606zm-4.814-5.5v-.034l-.001-.022-.001-.012-.002-.025v-.008l-.003-.027v-.007l-.004-.028v-.005l-.004-.029v-.004l-.005-.03-.001-.002-.006-.03-.001-.003-.007-.03v-.002a.354.354 0 00-.007-.03v-.002l-.009-.03v-.001l-.009-.032a.481.481 0 00-.02-.06l-.012-.031a.485.485 0 00-.012-.03l-.013-.03-.013-.028-.014-.03-.014-.028-.016-.028a1.103 1.103 0 01-.016-.027v-.001a.768.768 0 00-.016-.026l-.001-.001a.478.478 0 00-.017-.025v-.002l-.017-.024s0-.002-.002-.002l-.017-.024-.002-.002c-.006-.008-.01-.016-.017-.024l-.001-.002-.019-.023-.002-.002-.018-.022-.002-.002-.02-.021c0-.001 0-.002-.002-.003l-.019-.021a.01.01 0 01-.002-.003l-.019-.02a3663.992 3663.992 0 00-.023-.023l-.003-.003-.02-.02-.002-.002-.02-.018-.004-.003-.021-.019-.003-.003a.43.43 0 00-.021-.017l-.003-.002-.022-.018-.003-.002-.023-.017-.003-.002-.023-.017-.003-.002-.023-.016-.003-.001-.024-.016-.002-.002a.44.44 0 00-.025-.015h-.002l-.026-.016h-.002l-.027-.016h-.001a1.342 1.342 0 00-1.143 2.426l-.58 2.652h2.194l-.585-2.65c.502-.21.829-.7.829-1.243z"/></svg>
)
          
SAFE.defaultProps = {
  color: '#000',
  size: 32,
}
          