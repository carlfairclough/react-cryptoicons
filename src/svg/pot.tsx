import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const POT: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.967-13.82h.272c1.355.001 2.71.005 4.065.002 1.042-.002 2.076-.09 3.084-.368 1.271-.352 2.41-.93 3.238-1.963 1.125-1.403 1.496-3.01 1.221-4.762-.177-1.127-.814-1.94-1.872-2.411a5.738 5.738 0 00-1.169-.352c-1.152-.237-2.327-.297-3.5-.312-2.007-.026-4.016-.007-6.024-.013-.184 0-.215.097-.243.238-.234 1.186-.478 2.37-.706 3.558-.037.191-.113.248-.308.242-.409-.014-.819 0-1.228-.003-.14 0-.207.037-.233.187-.093.539-.204 1.075-.307 1.612-.008.042-.006.086-.01.16H9.99L8 23.934c.056.02.078.035.1.035.881.01 1.763.017 2.645.03.14.002.168-.073.189-.182.235-1.217.472-2.434.71-3.651l.389-1.986zm.555-2.738l.29-1.456h4.103l.376-1.938h-4.09c.085-.44.164-.84.244-1.248.07-.006.124-.014.177-.014 1.473.004 2.945-.007 4.417.02a9.754 9.754 0 011.569.17c.707.128 1.123.583 1.24 1.28.085.501.022.985-.228 1.433-.562 1.008-1.441 1.563-2.598 1.701a7.6 7.6 0 01-.918.05c-1.433.005-2.866.002-4.3.002h-.282z"/></svg>
)
          
POT.defaultProps = {
  color: '#000',
  size: 32,
}
          