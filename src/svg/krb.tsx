import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const KRB: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.24-17.294v-4.29h-1.988v4.322H12.31V6H9.5v20h2.81v-9.133h1.462v3.746h1.989v-3.73c.326.021.6.104.815.244.216.14.416.374.6.702l3.562 7.35c.31.546.721.821 1.231.821H24.5l-4.346-8.675c-.29-.51-.6-.904-.926-1.185a2.965 2.965 0 00-1.22-.613c.31-.109.594-.27.852-.483.252-.213.479-.488.679-.826L24.053 6h-2.3c-.262 0-.5.073-.7.213a1.93 1.93 0 00-.515.566l-3.625 6.987c-.163.312-.337.54-.52.675a1.486 1.486 0 01-.632.265z"/></svg>
)
          
KRB.defaultProps = {
  color: '#000',
  size: 32,
}
          