import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const HSR: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.75 7.5a4.78 4.78 0 01.815 2.74c-1.104.01-2.207.01-3.31.01C7.18 12.17 6.056 14.067 5 15.997V16c1.054 1.933 2.174 3.83 3.254 5.75h2.96v-2.313h-.969A788.677 788.677 0 018.287 16l1.955-3.437h7.867v2.27h-3.768v-1.98h-2.84c-.01 3.217.023 6.434-.01 9.647.103.943-.878 1.357-1.365 2h5.597c-.865-.697-1.61-1.53-1.454-2.74 3.317-.02 6.63-.003 9.944-.01.835-1.433 1.505-3.007 2.787-4.113-1.296-.174-2.605-.104-3.907-.137-.225.667-.507 1.31-.825 1.94-.434-.003-.868-.003-1.299-.003.01-3.324-.017-6.65.003-9.974-.05-.743.464-1.33.766-1.963h-4.384c.567.81.832 1.753.815 2.74-1.296.013-2.595.013-3.89 0-.02-.993.301-1.91.825-2.74h-4.355zm3.592 9.667h3.767v2.27h-3.767v-2.27zm6.915-6.917v2.313l.984-.003c.348.61.663 1.247.822 1.94 1.256-.063 2.518.064 3.764-.1-.023-.076-.066-.233-.09-.31-1.166-1.04-1.722-2.54-2.53-3.84h-2.95zm-3.045 11.79c.073 1.123-.772 1.774-1.495 2.46h5.637c-.765-.66-1.544-1.35-1.524-2.463-.872.003-1.747.006-2.618.003z"/></svg>
)
          
HSR.defaultProps = {
  color: '#000',
  size: 32,
}
          