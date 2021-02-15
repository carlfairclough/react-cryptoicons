import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const GXS: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.02 7.027h.001c-1.327 1.27-1.368 3.602-.07 4.91 2.488 2.533 5.028 5.02 7.528 7.542-1.147 1.168-2.31 2.315-3.458 3.483-.432.416-.89.967-1.556.908-1.097.018-1.785-1.473-1.004-2.274 1.158-1.232 2.395-2.394 3.57-3.608-.502-.5-1.004-1.005-1.506-1.505A217.222 217.222 0 006.96 20.05c-1.251 1.258-1.28 3.471-.081 4.77 1.19 1.407 3.52 1.59 4.903.364 1.443-1.36 2.805-2.802 4.233-4.176 1.338 1.328 2.656 2.682 4.003 4.004 1.295 1.316 3.62 1.313 4.918.003 1.318-1.226 1.435-3.498.218-4.831-1.356-1.427-2.781-2.781-4.149-4.19 1.339-1.34 2.683-2.67 4.01-4.022 1.289-1.264 1.31-3.535.067-4.837-1.211-1.38-3.53-1.529-4.895-.297-1.434 1.351-2.77 2.799-4.198 4.156a286.339 286.339 0 00-4.068-4.057c-1.312-1.29-3.631-1.237-4.9.09zm1.453 3.39c-.61-.617-.37-1.753.394-2.123.549-.326 1.269-.157 1.69.297 1.32 1.296 2.619 2.618 3.922 3.931-.658.65-1.312 1.305-1.962 1.963-1.347-1.357-2.72-2.688-4.044-4.068zm12.94-1.79h-.001c.403-.455 1.086-.659 1.646-.37.834.343 1.095 1.558.442 2.192-1.295 1.384-2.689 2.67-4.004 4.034-.511-.49-1.01-.988-1.51-1.486-.498.505-.999 1.008-1.5 1.509 2.193 2.202 4.392 4.4 6.595 6.593.468.434.964 1.03.746 1.72-.203.976-1.567 1.425-2.27.685-1.385-1.305-2.7-2.679-4.04-4.027.498-.495.992-.99 1.483-1.491-.506-.498-1.005-1.002-1.507-1.503-.497.498-.993.996-1.492 1.488a107.79 107.79 0 00-1.983-1.96c2.473-2.452 4.909-4.945 7.394-7.385z"/></svg>
)
          
GXS.defaultProps = {
  color: '#000',
  size: 32,
}
          