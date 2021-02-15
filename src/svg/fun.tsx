import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const FUN: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.3-5.1a10.68 10.68 0 004.4.4c-1.4-1.9-2.9-3.8-4.3-5.6 1.4-1.2 2.9-2.3 4.3-3.4-1-1.3-2-2.5-3-3.8l-4.3 3.4a6.17 6.17 0 01-.1-3.3c.29-.9.73-1.746 1.3-2.5a6.84 6.84 0 012.1-1.7 7.7 7.7 0 012.9-.7c-.1-.2-.3-.3-.4-.5-1-1.3-2-2.6-3-3.8a10.84 10.84 0 00-1.9.8A10.32 10.32 0 006.5 10 13.11 13.11 0 005 13.8a11.1 11.1 0 000 4.8 11.23 11.23 0 001.6 3.7 11.56 11.56 0 002.6 2.8 9.68 9.68 0 003.5 1.8zm9.53-12.114c.166 1.117.156 2.055-.03 2.814a6.47 6.47 0 01-1.2 2.5 6.16 6.16 0 01-4.9 2.4c.233.39.501.758.8 1.1.8 1.1 1.6 2.1 2.5 3.2a8.77 8.77 0 003.3-1.8 10.73 10.73 0 002.5-2.7 9.88 9.88 0 001.6-3.6 12.35 12.35 0 00.1-4.7 9.1 9.1 0 00-1.4-3.8 10.8 10.8 0 00-2.4-2.8 11 11 0 00-7-2.6h-1.4c0 .1.1.1.1.2 1.5 1.9 2.9 3.7 4.3 5.5-1.4 1.2-2.9 2.3-4.3 3.4 1 1.3 2 2.5 3 3.8 1.19-1.02 4.165-3.294 4.3-3.4.05.16.093.323.13.486zm-4.723 8.373a9.833 9.833 0 01-.036-.042 6.91 6.91 0 004.123-2.56 7.214 7.214 0 001.336-2.785 6.914 6.914 0 00-.114-3.694l-.323-1.04-.856.672c-.451.354-2.05 1.584-2.147 1.66-.606.47-1.112.872-1.576 1.255a191.05 191.05 0 00-1.028-1.294c-.466-.582-.77-.964-1.034-1.3.638-.493 1.487-1.146 1.558-1.2a56.326 56.326 0 002.178-1.762l.543-.465-.439-.564a1092.78 1092.78 0 00-3.503-4.489c2.352.043 4.624.898 6.427 2.422.895.74 1.65 1.62 2.24 2.61a8.392 8.392 0 011.3 3.513 11.654 11.654 0 01-.09 4.446 9.126 9.126 0 01-1.477 3.323 10.047 10.047 0 01-2.344 2.539 8.143 8.143 0 01-2.588 1.524 62.41 62.41 0 01-2.15-2.77z" fill-rule="evenodd"/></svg>
)
          
FUN.defaultProps = {
  color: '#000',
  size: 32,
}
          