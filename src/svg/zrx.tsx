import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ZRX : React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.504-5h1.025c.044-.009.089-.02.134-.026.339-.037.68-.057 1.017-.11 2.67-.428 4.886-1.676 6.67-3.702.07-.08.078-.132.011-.22-.77-1.02-1.536-2.041-2.303-3.063-.024-.032-.053-.06-.084-.097l-.107.158a7.149 7.149 0 01-2.728 2.39c-.105.054-.17.055-.26-.035-.363-.368-.736-.725-1.105-1.087l-.665-.647c-2.208 1.65-4.404 3.29-6.61 4.94.037.025.054.04.073.05a10.88 10.88 0 004.122 1.364c.27.032.54.057.81.085zm.97-22h-.943c-.048.009-.097.02-.146.026-.435.051-.875.077-1.304.155-2.234.405-4.16 1.412-5.783 2.995-.25.243-.48.506-.728.77l2.467 3.287.102-.15A7.147 7.147 0 0112.9 9.66c.093-.047.15-.039.225.035.469.464.943.923 1.415 1.383.085.083.171.163.26.247 2.244-1.61 4.476-3.21 6.718-4.82-.033-.023-.05-.037-.07-.048a10.887 10.887 0 00-4.422-1.4c-.188-.018-.375-.038-.562-.057zM6.458 10.534c-1.335 2.42-1.776 4.958-1.232 7.644.508 2.51 1.774 4.578 3.724 6.257l3.26-2.446c-.017-.034-.02-.044-.026-.049l-.103-.07A7.134 7.134 0 019.66 19.1c-.044-.087-.041-.142.031-.214.256-.253.505-.513.756-.77l1.008-1.034-4.995-6.548zm14.175 4.37l4.923 6.503c1.224-2.056 1.854-4.976 1.147-7.928-.566-2.365-1.799-4.324-3.656-5.915l-3.279 2.46c.063.045.099.072.136.097a7.137 7.137 0 012.45 2.798c.048.096.05.157-.032.238-.263.26-.515.528-.771.794l-.918.953z"/></svg>
)
          
ZRX.defaultProps = {
  color: '#000',
  size: 32,
}
          