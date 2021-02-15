import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SOC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm2.743 22.236a10.596 10.596 0 11-4.595-20.669 10.597 10.597 0 014.595 20.669zm.188-18.95c0 .518 0 1.034.018 1.552a9.75 9.75 0 00-2.145-.563c-.03-.469.104-.984-.033-1.429a13.313 13.313 0 00-1.572-.019c-.026.482-.017.966 0 1.45a9.864 9.864 0 00-2.146.574c.014-.522.02-1.043.013-1.566a9.2 9.2 0 000 17.438c0-.512-.005-1.022-.015-1.532a9.113 9.113 0 002.133.549c0 .469 0 .938-.028 1.402.56.08 1.128.08 1.688 0a26.363 26.363 0 01-.04-1.387 10.122 10.122 0 002.14-.544 24.187 24.187 0 000 1.52 9.2 9.2 0 00-.011-17.437l-.002-.007zm1.368 13.936c-1.207 1.095-2.923 1.354-4.5 1.331-1.381 0-2.846-.375-3.845-1.376-.53-.512-.83-1.196-1.099-1.875.966-.25 1.963-.334 2.936-.542a1.706 1.706 0 001.138 1.277c.883.276 1.977.315 2.713-.315.522-.433.537-1.38-.11-1.705-1.517-.783-3.407-.517-4.841-1.509-1.975-1.245-2.121-4.547-.188-5.891 1.478-1.037 3.454-1.166 5.168-.75 1.55.392 2.655 1.706 3.187 3.161-.954.165-1.907.334-2.861.495-.251-1.515-2.372-1.875-3.426-.992-.6.499-.446 1.562.304 1.828 1.64.68 3.61.484 5.063 1.622 1.687 1.144 1.863 3.876.361 5.24z"/></svg>
)
          
SOC.defaultProps = {
  color: '#000',
  size: 32,
}
          