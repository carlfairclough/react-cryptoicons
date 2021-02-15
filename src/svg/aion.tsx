import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const AION: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.029-8.85c3.957 0 7.176-3.199 7.176-7.13 0-3.932-3.219-7.13-7.176-7.13-3.957 0-7.176 3.198-7.176 7.13 0 3.931 3.22 7.13 7.176 7.13zm0-12.864c3.182 0 5.77 2.572 5.77 5.734 0 3.161-2.588 5.733-5.77 5.733-3.181 0-5.77-2.572-5.77-5.733 0-3.162 2.589-5.734 5.77-5.734zm5.025-2.415l.736-1.19a11.053 11.053 0 00-5.76-1.614c-1.874 0-3.724.476-5.35 1.375l.683 1.221a9.67 9.67 0 014.666-1.198c1.78 0 3.517.486 5.025 1.406zm2.095 16.51a10.911 10.911 0 003.902-8.361h-1.406a9.519 9.519 0 01-3.405 7.294l.909 1.067zm-7.12 2.59c1.762 0 3.516-.423 5.07-1.224l-.648-1.24a9.558 9.558 0 01-4.422 1.068 9.667 9.667 0 01-6.12-2.185l-.896 1.076a11.083 11.083 0 007.016 2.506zm9.38-13.546l1.128-.31a10.71 10.71 0 00-2.125-4.026l-.9.745a9.558 9.558 0 011.897 3.591zM6.86 21.976l.978-.64a9.587 9.587 0 01-1.601-5.316 9.564 9.564 0 012.966-6.952l-.814-.837a10.717 10.717 0 00-3.323 7.789c0 2.127.62 4.187 1.793 5.956z"/><path d="M25.35 13.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM6.86 21.976a10.742 10.742 0 01-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z" opacity=".5"/></svg>
)
          
AION.defaultProps = {
  color: '#000',
  size: 32,
}
          