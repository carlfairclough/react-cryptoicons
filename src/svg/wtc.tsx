import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const WTC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><g fill-rule="evenodd"><path fill-rule="nonzero" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.414-18.834v-2.49a.662.662 0 00-.02-.164.69.69 0 00-.837-.492l-3.448.844a.678.678 0 00-.523.656v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.247-.55v-4.538c0-.62.43-1.16 1.044-1.31l.68-.167zm-7.586-.042v-2.449a.662.662 0 00-.021-.163.69.69 0 00-.836-.492l-3.449.844A.678.678 0 006 11.52v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.074-.508v-4.58c0-.62.43-1.16 1.045-1.31l.852-.209zm10.867-2.239a.678.678 0 00-.523.655v7.556a.69.69 0 00.857.655l3.449-.844a.678.678 0 00.522-.655v-7.556a.662.662 0 00-.02-.164.69.69 0 00-.837-.491l-3.448.844zm-8.798 2.429l-2.754.674a.678.678 0 00-.522.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.448-.844a.678.678 0 00.522-.655v-.94a1.379 1.379 0 01-1.51-1.012 1.324 1.324 0 01-.041-.328v-5.761zm7.586.042l-2.581.632a.678.678 0 00-.523.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.449-.844a.678.678 0 00.522-.655v-.951l-.01.002c-.74.181-1.488-.259-1.673-.982a1.324 1.324 0 01-.041-.328v-5.74z"/><path d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g></svg>
)
          
WTC.defaultProps = {
  color: '#000',
  size: 32,
}
          