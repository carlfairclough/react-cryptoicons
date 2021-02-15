import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const MAID: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.291 19.333l10.955 6.308c2.263-1.282 3.394-1.692 3.394-5.436V7.59c-2.263-1.282-3.189-2.052-6.429-.205L6.257 13.692c0 2.564-.206 3.744 3.034 5.641zm8.234-5.108v2.854l-2.488-1.427 2.488-1.427z"/><path fill-rule="nonzero" d="M17.52 20.205L6.257 13.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-11.263 6.513 5.143 2.974v3.128z" opacity=".402"/><path fill-rule="nonzero" d="M12.377 14.103L23.64 7.59v12.615c0 3.744-1.131 4.154-3.394 5.436V12.667L15.05 15.64l-2.674-1.538z" opacity=".802"/></g></svg>
)
          
MAID.defaultProps = {
  color: '#000',
  size: 32,
}
          