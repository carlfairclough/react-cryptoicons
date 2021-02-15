import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const UMA: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.29 13.037a.46.46 0 00-.46.46v5.137l.007.072c.033.16.176.275.34.275H13.6c.197 0 .347-.16.347-.347v-2.662l1.762 1.106c.15.094.338.094.488 0l1.772-1.106v2.662c0 .197.16.347.347.347h1.012a.33.33 0 00.328-.347v-5.137a.464.464 0 00-.722-.375l-2.793 1.922a.323.323 0 01-.385 0l-2.793-1.922a.411.411 0 00-.254-.085zM5.368 13H4.356a.354.354 0 00-.356.347v5.165l.007.083a.46.46 0 00.452.377h6.282a.46.46 0 00.459-.46v-5.165a.346.346 0 00-.347-.347H9.87a.346.346 0 00-.347.347v3.928H5.716v-3.928l-.008-.072a.346.346 0 00-.34-.275zm22.097 0h-6.282a.46.46 0 00-.459.46v5.165l.007.071a.347.347 0 00.34.276h1.012c.197 0 .347-.16.347-.347v-3.703l.008-.06a.229.229 0 01.217-.165h3.347l.06.008a.229.229 0 01.165.217v3.703l.007.071a.347.347 0 00.34.276h1.012l.069-.007a.347.347 0 00.269-.34v-5.166a.46.46 0 00-.46-.459zm-2.644 2.784h-1.003a.344.344 0 00-.347.338v1.031c0 .197.16.347.347.347h1.003c.197 0 .347-.16.347-.347v-1.022a.346.346 0 00-.347-.347z"/></svg>
)
          
UMA.defaultProps = {
  color: '#000',
  size: 32,
}
          