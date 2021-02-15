import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const WGR: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.893-20.613c-.152-.261-.397-.387-.718-.387-1.969.007-3.937.02-5.906.003-.497-.003-.794.187-1.025.601-.498.883-1.023 1.752-1.537 2.629-.218.37-.428.743-.643 1.113a.272.272 0 01-.069.071c-.024-.023-.052-.044-.069-.07-.217-.371-.428-.744-.642-1.114-.511-.877-1.04-1.742-1.537-2.629-.232-.414-.529-.604-1.026-.6-1.968.016-3.937.003-5.905-.004-.315 0-.56.126-.712.387-.155.265-.131.543.035.815.228.37.445.747.666 1.12.608 1.036 1.215 2.072 1.82 3.108.64 1.09 1.28 2.178 1.924 3.265.573.975 1.143 1.946 1.72 2.917.159.265.397.4.711.387.308-.014.525-.166.67-.431.149-.265.304-.53.46-.791l1.533-2.611c.114-.197.235-.39.363-.608.13.217.248.41.362.608l1.534 2.61c.155.265.31.527.459.792.145.265.363.417.67.431a.74.74 0 00.711-.387 3374.466 3374.466 0 005.464-9.29c.221-.373.435-.75.666-1.12.156-.272.177-.55.021-.815zM15.05 17.142c-.577.995-1.158 1.988-1.744 2.978-.11.19-.228.374-.366.604l-4.797-8.186c.09-.007.152-.017.214-.017 1.312-.003 2.625-.003 3.937-.01.145 0 .228.044.3.167.701 1.205 1.406 2.403 2.11 3.605.117.2.249.394.349.598a.313.313 0 01-.003.261zm4.01 3.582c-.138-.227-.256-.414-.366-.604a773.92 773.92 0 01-1.744-2.978.314.314 0 010-.261c.103-.207.231-.4.349-.598a2854.38 2854.38 0 002.11-3.606c.072-.122.155-.166.3-.166 1.312.007 2.624.007 3.937.01.062 0 .12.01.214.017-1.606 2.733-3.195 5.446-4.8 8.186z" fill-rule="evenodd"/></svg>
)
          
WGR.defaultProps = {
  color: '#000',
  size: 32,
}
            