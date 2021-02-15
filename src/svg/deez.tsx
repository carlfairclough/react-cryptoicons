import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const DEEZ: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.293-12.14a53.764 53.764 0 00.027 1.927l5.583-3.29c2.81-1.656 4.9-2.893 5.49-3.248A2999.434 2999.434 0 0012.1 7.456L11.339 7l-1.109.75c-.456.31-.837.57-1.033.706.127.082.335.21.602.37.108.064 10.78 6.548 10.809 6.673.03.103.03.103-1.693 1.157a658.095 658.095 0 00-5.208 3.205zm-2.368-6.296v6.212c.002 3.111.007 5.497.011 6.196 1.587-.9 12.974-7.417 13.389-7.663l.07-.04.191-2.684-.58.342c-10.83 6.389-10.842 6.393-10.87 6.402l-.061.022-.054-.037c-.08-.057-.08-.057-.146-5.634l-.022-1.93-1.03-.638a48.502 48.502 0 00-.898-.548zM9 24.8l1.037.641c.386.24.715.443.908.56.002-.74.005-3.278.007-6.332l.005-6.768.651.379c.25.146 1.488.902 2.76 1.688 1.266.783 2.536 1.558 2.831 1.732l.472.275 2.364-1.446-.715-.43c-.488-.292-2.782-1.69-5.114-3.118a779.624 779.624 0 00-4.793-2.92l-.388-.228L9 24.8z"/></svg>
)
          
DEEZ.defaultProps = {
  color: '#000',
  size: 32,
}
          