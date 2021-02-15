import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BCD: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M22.585 9.694l.067.031 2.93 3.906-.02.022-.059-.12-4.521 2.284-1.374-4.55 3.054-1.402zm-.165-.077l-2.975 1.366h-6.85L9.513 9.687l2.962-1.36h7.17zm-13.154.32l3.12 1.313-1.38 4.567-4.513-2.279zm3.44 1.373h6.576l1.426 4.72-4.714 8.332-4.713-8.332zm12.512 2.733l-8.424 9.564 4.205-7.433zm-10.047 9.524l-8.378-9.512 4.196 2.12zm-8.74-9.924l-.01-.01.043-.057zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.222 9.462L6 13.646 16 25l10-11.352-3.139-4.186L19.717 8h-7.312zm9.201 5.372c-.079-.83-.786-1.108-1.68-1.188v-1.151h-.692v1.121c-.182 0-.368.004-.553.008v-1.129h-.691v1.151c-.15.003-.297.006-.44.006l-.001-.003h-.955v.748s.512-.01.503 0c.28 0 .372.164.398.307v1.311c.02 0 .045.001.074.005h-.074v1.838c-.012.09-.064.232-.26.232.01.008-.503 0-.503 0l-.137.837h.9c.168 0 .333.003.495.004v1.164h.691v-1.152c.19.004.374.006.553.006v1.147h.692v-1.163c1.164-.068 1.978-.364 2.08-1.47.08-.892-.333-1.29-.994-1.45.402-.207.653-.572.594-1.179zm-.968 2.49c0 .87-1.471.771-1.94.772v-1.543c.469 0 1.94-.137 1.94.771zm-.322-2.177c0 .792-1.228.7-1.618.7v-1.4c.39 0 1.618-.126 1.618.7z"/></svg>
)
          
BCD.defaultProps = {
  color: '#000',
  size: 32,
}
          