import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const YOYOW: React.FC<IconProps> = ({ color, size }: IconProps) => (
    <svg height={`${size}`} width={`${size}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill={color}><path d="M21.49 16.575A.743.743 0 0022.687 16a.72.72 0 00-.157-.45c.369.334.86.538 1.4.538 1.144 0 2.071-.915 2.071-2.044S25.073 12 23.929 12s-2.071.915-2.071 2.044c0 .532.206 1.017.545 1.381a.743.743 0 00-1.196.575c0 .17.059.326.157.45a2.079 2.079 0 00-1.4-.538c-.54 0-1.03.204-1.4.538a.72.72 0 00.158-.45.743.743 0 10-1.196-.575 2.02 2.02 0 00.545-1.381C18.071 12.915 17.144 12 16 12s-2.071.915-2.071 2.044c0 .532.206 1.017.545 1.381a.743.743 0 00-1.196.575c0 .17.059.326.157.45a2.079 2.079 0 00-1.4-.538c-.54 0-1.03.204-1.4.538a.72.72 0 00.158-.45.743.743 0 10-1.196-.575 2.02 2.02 0 00.545-1.381c0-1.129-.927-2.044-2.071-2.044C6.927 12 6 12.915 6 14.044s.927 2.044 2.071 2.044c.54 0 1.031-.204 1.4-.538a.72.72 0 00-.157.45c0 .403.33.73.74.73.171 0 .33-.058.455-.155a2.022 2.022 0 00-.545 1.381c0 1.129.928 2.044 2.072 2.044 1.143 0 2.07-.915 2.07-2.044 0-.532-.206-1.017-.544-1.381A.743.743 0 0014.757 16a.72.72 0 00-.157-.45c.369.334.86.538 1.4.538s1.031-.204 1.4-.538a.72.72 0 00-.157.45c0 .403.33.73.74.73.171 0 .33-.058.455-.155a2.022 2.022 0 00-.545 1.381c0 1.129.928 2.044 2.071 2.044 1.144 0 2.072-.915 2.072-2.044 0-.532-.207-1.017-.545-1.381zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/></svg>
)

YOYOW.defaultProps = {
    color: '#000',
    size: 32,
}
          
YOYOW.defaultProps = {
  color: '#000',
  size: 32,
}
          