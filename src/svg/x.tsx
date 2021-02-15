import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const X: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.116 6.01v3.919l1.88 1.963V6.009h-1.88zM6.01 7.992l7.638 7.723c-.121.129-.245.256-.37.381l-7.268 7.35h3.67c.155-.003.312.01.467-.01.272-.003.543.005.814-.003.314-.32.622-.646.934-.97l2.677-2.795c.473-.5.955-.993 1.425-1.493.22.218.432.448.648.672.973 1.014 1.942 2.032 2.915 3.044.495.513.984 1.03 1.48 1.542.272.01.546-.002.82.006.096.013.195.007.294.007h3.83l-.69-.696-6.772-6.846c-.052-.066-.114-.127-.172-.189.237-.246.48-.491.723-.734 2.304-2.328 4.605-4.66 6.91-6.99h-4.938c-.713.744-1.425 1.489-2.14 2.23-.967 1.012-1.935 2.028-2.906 3.037-1.677-1.76-3.361-3.511-5.038-5.266H6.01zM16 19.53h.002c-.004 1.967-.004 3.933-.004 5.9h1.89c0-1.308.004-2.613 0-3.92-.627-.661-1.262-1.317-1.888-1.98z"/></svg>
)
          
X.defaultProps = {
  color: '#000',
  size: 32,
}
          