import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const RHOC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.816 9.24c-.7-.93-1.782-1.6-2.963-1.648-1.232-.072-2.446.513-3.251 1.429-.61.703-.901 1.635-.912 2.557a1036.45 1036.45 0 00-.002 5.29c-.02.234.19.398.411.373 4.992.014 9.986-.016 14.978.016a37.333 37.333 0 00.077 3.27c-1.424 1.036-3.092 1.767-4.836 2.039-.227.051-.61-.01-.66.302-.021.585-.002 1.173-.009 1.759-.033.206.128.417.343.414a11.207 11.207 0 005.844-2.215c.624.81 1.515 1.45 2.544 1.604 1.455.259 2.984-.443 3.854-1.612.55-.744.745-1.686.741-2.596-.005-1.675.015-3.35-.01-5.023.019-.266-.231-.401-.468-.38-4.976-.01-9.952.005-14.926-.009-.03-.985.043-1.974-.064-2.956-.011-.136-.043-.323.1-.404 1.525-1.042 3.28-1.796 5.125-2 .2-.005.292-.23.278-.404 0-.56.014-1.122-.006-1.681.007-.234-.223-.368-.435-.326-2.076.17-4.088.953-5.753 2.201zM6.7 11.882c.024-.942.886-1.77 1.833-1.732.97-.018 1.843.835 1.862 1.801.02 1.008.008 2.015.006 3.023-1.233.027-2.465.009-3.699.01a417.805 417.805 0 01-.002-3.102zm15.709 5.29c1.232-.003 2.464-.007 3.696.002.01.985.004 1.97.004 2.955.008.75-.463 1.497-1.175 1.761-.773.299-1.717.003-2.19-.674a1.843 1.843 0 01-.34-1.097c.003-.982-.004-1.965.005-2.948z"/></svg>
)
          
RHOC.defaultProps = {
  color: '#000',
  size: 32,
}
          