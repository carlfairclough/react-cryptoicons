import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const PAY: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.91-16.304a1.137 1.137 0 00-.215-.3C24.793 13.242 20.922 9 20.922 9l-4.917 5.378-4.98-5.327S7.109 13.33 5.19 15.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 23l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541zm-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464zm15.988.126a2.267 2.267 0 01-.256.355l-2.71 2.945L17.44 16l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726z"/></svg>
)
          
PAY.defaultProps = {
  color: '#000',
  size: 32,
}
          