import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const CNX: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><g fill-rule="evenodd"><path d="M14.514 25.556A8.482 8.482 0 0017.064 27l-.142-1.374a9.674 9.674 0 008.65-8.249A8.481 8.481 0 0027 14.847l-1.383.143a9.674 9.674 0 00-8.24-8.562A8.481 8.481 0 0014.847 5l.143 1.383a9.674 9.674 0 00-8.562 8.24A8.481 8.481 0 005 17.153l1.383-.143a9.674 9.674 0 008.131 8.546zm.57-4.132a5.503 5.503 0 01-4.554-4.845l1.3-.135a6.977 6.977 0 01-1.266-1.287 5.503 5.503 0 014.857-4.627l.135 1.3a6.977 6.977 0 011.287-1.266 5.503 5.503 0 014.627 4.857l-1.3.135a6.99 6.99 0 011.266 1.287 5.503 5.503 0 01-4.945 4.635l-.136-1.309c-.389.491-.812.91-1.271 1.255zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M6.383 17.01L5 17.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 004.553 4.845 6.084 6.084 0 01-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 01-8.131-8.546zm19.234-2.02L27 14.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 00-4.626-4.857 6.085 6.085 0 012.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 018.24 8.562z" opacity=".5"/></g></svg>
)
          
CNX.defaultProps = {
  color: '#000',
  size: 32,
}
            