import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const TEN: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M26.998 16.205L27 16c0-3.04-1.075-5.635-3.225-7.785C21.632 6.072 19.04 5 16 5s-5.635 1.072-7.785 3.215C6.072 10.365 5 12.96 5 16a12.7 12.7 0 00.03-.848.787.787 0 01.121.015l4.691-8.136a.719.719 0 01-.082-.116c.473-.333.965-.622 1.476-.868.027.045.05.092.068.142h9.392a.849.849 0 01.068-.142 10.48 10.48 0 011.477.872.817.817 0 01-.078.108l4.686 8.14a.798.798 0 01.122-.015 12.155 12.155 0 01.027 1.053zm-.028.662a.816.816 0 01-.121-.014l-4.691 8.125c.028.033.054.067.078.102a11.81 11.81 0 001.54-1.305c1.942-1.937 3.007-4.24 3.194-6.908zm-4.751 8.225zm-.106.074c-.436.299-.887.561-1.354.787a.812.812 0 01-.063-.132h-9.392a.796.796 0 01-.064.132 10.163 10.163 0 01-.751-.4C12.126 26.516 13.963 27 16 27c2.293 0 4.33-.611 6.113-1.834zm-12.348-.081a.776.776 0 01.077-.107l-4.691-8.125a.8.8 0 01-.121.014c.187 2.669 1.248 4.971 3.185 6.908.493.493 1.01.93 1.55 1.31zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.347-16.54l-4.55-7.888v7.629c.114.043.218.11.312.205a.868.868 0 01.205.311h3.877a.836.836 0 01.156-.258zm-.156.842h-3.877a.87.87 0 01-.205.312.867.867 0 01-.312.205v7.619l4.55-7.878a.839.839 0 01-.156-.258zM5.81 15.717h3.877a.869.869 0 01.205-.311.868.868 0 01.312-.205V7.572l-4.55 7.887c.07.08.121.166.156.258zm5.485-8.924l6.114 5.295a.824.824 0 01.575-.097l2.87-4.96a.86.86 0 01-.157-.258h-9.392a.109.109 0 01-.01.02zm.01 8.924h3.887a.85.85 0 01.151-.268l-4.555-7.877v7.629c.114.043.218.11.312.205a.868.868 0 01.205.311zm7.332-2.577l2.45 2.12a.822.822 0 01.127-.059V7.572l-2.724 4.711a.83.83 0 01.2.55.88.88 0 01-.053.307zm-1.603-.613L11.616 7.84l4.233 7.317a.776.776 0 01.302 0l1.028-1.773a.813.813 0 01-.205-.55c0-.11.02-.213.059-.307zm-.22 3.19h3.883a.135.135 0 00.01-.019l-2.45-2.12a.824.824 0 01-.575.098l-1.023 1.774a.859.859 0 01.155.267zm4.088.897a.87.87 0 01-.205-.312h-3.892a.829.829 0 01-.146.244l4.555 7.891V16.82a.869.869 0 01-.312-.205zm-5.042.234l-1.033 1.788c.133.158.2.341.2.55 0 .11-.018.211-.054.307l5.412 4.681-4.233-7.331a.976.976 0 01-.292.005zm4.847 8.369l-6.114-5.286a.823.823 0 01-.575.098l-2.864 4.95a.828.828 0 01.15.257h9.393a.144.144 0 00.01-.019zm-6.387-6.874l1.028-1.788a.832.832 0 01-.15-.253h-3.893a.122.122 0 01-.01.02l2.45 2.119a.822.822 0 01.575-.098zm-.95.536l-2.455-2.119a.81.81 0 01-.127.058v7.624l2.729-4.706a.813.813 0 01-.205-.55c0-.11.02-.212.058-.307zm-3.478-2.265a.87.87 0 01-.205-.312H5.81a.839.839 0 01-.156.258l4.55 7.877V16.82a.87.87 0 01-.312-.205z"/></svg>
)
          
TEN.defaultProps = {
  color: '#000',
  size: 32,
}
          