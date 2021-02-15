import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BCC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.351 19.32c.007 2.582 1.59 4.931 4.006 5.788 2.43.864 4.632.406 6.53-1.364.187-.175.288-.172.451.004.279.3.57.591.867.874.162.153.218.291.165.533-.182.843.242 1.664 1.01 2.048.703.351 1.608.18 2.162-.408a1.866 1.866 0 00.261-2.213 1.852 1.852 0 00-2.054-.862c-.208.052-.339.014-.479-.131a34.75 34.75 0 00-1.075-1.075c-.153-.146-.174-.26-.079-.46 1.256-2.638.656-5.534-1.548-7.456-.203-.176-.18-.27-.017-.448a787.317 787.317 0 004.024-4.414c.16-.178.305-.238.554-.186 1.228.255 2.438-.682 2.516-1.926.058-.93-.41-1.722-1.262-2.135-.724-.35-1.726-.19-2.332.375-.664.62-.87 1.557-.518 2.424.068.168.111.28-.038.441a1249.609 1249.609 0 00-4.318 4.733c-.103.114-.186.154-.34.088a4.861 4.861 0 00-1.286-.354c-.233-.03-.262-.135-.26-.331.01-.677.018-1.353-.003-2.03-.008-.27.067-.424.307-.576.678-.43.97-1.262.76-2.027-.208-.76-.912-1.333-1.683-1.37-.86-.04-1.607.47-1.888 1.291-.267.777.031 1.64.76 2.116.209.136.286.28.281.524a41.633 41.633 0 000 2.03c.007.253-.067.34-.327.388-3.034.569-5.155 3.097-5.147 6.11z"/></svg>
)
          
BCC.defaultProps = {
  color: '#000',
  size: 32,
}
          