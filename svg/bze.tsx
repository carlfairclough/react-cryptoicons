import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BZE: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.04 5.75h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 24.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797l-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293zm5.967 4.588l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603z"/></svg>
)
          
BZE.defaultProps = {
  color: '#000',
  size: 32,
}
          