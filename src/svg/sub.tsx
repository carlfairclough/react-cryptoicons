import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SUB: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.117 5.314L8.1 8.328a.248.248 0 000 .4l15.801 11.853-.894.67a.25.25 0 10.3.402l1.162-.87a.252.252 0 000-.404L8.67 8.526l3.598-2.697 1.106.827a.25.25 0 10.3-.4l-1.255-.942a.25.25 0 00-.15-.05.24.24 0 00-.151.05zm4.017 0l-5.19 3.892a.25.25 0 00.3.402l5.04-3.78 7.28 5.46h-3.178l-5.207-3.904a.25.25 0 10-.3.402l5.271 3.953c.044.033.096.05.15.051h4.018a.25.25 0 00.237-.172.246.246 0 00-.086-.279l-8.035-6.027a.247.247 0 00-.3.002zM9.21 10.509l-1.11.83a.253.253 0 000 .402l15.802 11.853-3.6 2.699-1.01-.757a.251.251 0 10-.302.402l1.162.872a.253.253 0 00.3 0l4.018-3.013a.25.25 0 000-.402L8.67 11.541l.841-.63a.249.249 0 00.05-.351.252.252 0 00-.35-.051zm-.959 9.819a.251.251 0 00-.152.453l8.037 6.025a.25.25 0 00.3 0l5.182-3.884a.251.251 0 00-.303-.402l-5.029 3.773-7.281-5.461h3.18l5.146 3.86a.25.25 0 10.301-.4l-5.216-3.911a.235.235 0 00-.15-.051H8.25v-.002z"/></svg>
)
          
SUB.defaultProps = {
  color: '#000',
  size: 32,
}
          