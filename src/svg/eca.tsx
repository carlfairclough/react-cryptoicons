import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ECA: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.001-6.388a.44.44 0 00-.436.444.44.44 0 00.436.444.44.44 0 00.436-.444.442.442 0 00-.436-.444zm-8.78-14.254c.153.09.345.077.486-.032a.45.45 0 00.157-.47.436.436 0 10-.803-.108.45.45 0 00.16.61zm0 9.294a.448.448 0 00-.16.606c.12.212.387.285.596.163a.448.448 0 00.16-.606.434.434 0 00-.596-.163zm17.56-9.294a.448.448 0 00-.104-.818.434.434 0 00-.461.16.452.452 0 00-.031.495.434.434 0 00.596.163zM16 6.388a.436.436 0 00.409-.269.45.45 0 00-.09-.486.431.431 0 00-.477-.1.444.444 0 00-.27.41c0 .243.19.44.428.445zm7.8 14.194a.873.873 0 011.093-.387V11.8a.871.871 0 01-1.09-.383.904.904 0 01.22-1.15l-7.152-4.2a.883.883 0 01-.87.77.883.883 0 01-.87-.77l-7.15 4.201a.904.904 0 01.216 1.15.871.871 0 01-1.088.382v8.4a.871.871 0 011.09.383.904.904 0 01-.22 1.15l7.152 4.201a.883.883 0 01.87-.769c.438 0 .809.328.87.769l7.151-4.2a.904.904 0 01-.221-1.152zm-6.112-1.287a3.706 3.706 0 001.639-2.022c.425-1.265 2.336-.56 1.621 1.084 0 .016-.013.031-.019.045l2.352 1.38a.43.43 0 01.148.58.415.415 0 01-.567.158l-2.337-1.368a5.54 5.54 0 01-1.865 1.822 5.365 5.365 0 01-2.2.73v2.6c0 .243-.194.44-.433.44a.436.436 0 01-.433-.44v-2.578a5.656 5.656 0 01-4.325-2.45L9.14 20.522a.416.416 0 01-.573-.155.43.43 0 01.152-.583l2.12-1.245a5.957 5.957 0 01-.342-.903l-.202-1.144a5.763 5.763 0 01.59-3.002L8.72 12.216a.43.43 0 01-.153-.58.414.414 0 01.57-.156l2.184 1.281a5.665 5.665 0 011.753-1.607 5.493 5.493 0 012.521-.754V7.696c0-.243.194-.44.433-.44s.432.197.432.44v2.73a5.622 5.622 0 014.028 2.459l2.382-1.405a.407.407 0 01.572.155.432.432 0 01-.157.581l-3.239 1.906-.044.021-.762.45-1.608.944-4.718 2.764a3.628 3.628 0 004.773.994zm7.092 1.357a.432.432 0 00-.595.163.448.448 0 00.16.606.43.43 0 00.595-.162.45.45 0 00-.16-.607zm-12.496-4.065l5.86-3.442a3.62 3.62 0 00-4.126-.316c-1.58.928-1.777 2.091-1.734 3.758z"/></svg>
)
          
ECA.defaultProps = {
  color: '#000',
  size: 32,
}
          