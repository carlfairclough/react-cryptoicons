import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const TRIG: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.123 7c-.312 1.658-2.188 1.762-2.188 1.762C3.56 23.062 15.958 27 15.958 27c13.44-5.492 7.918-18.342 7.918-18.342C22.21 8.554 21.896 7 21.896 7zm11.15 1.023l.012.259a1.367 1.367 0 00.185.559c.19.318.5.516.986.548l.17.011.065.158a9.547 9.547 0 01.15.41c.11.325.22.696.322 1.105.619 2.48.692 5.099-.137 7.56-1.004 2.98-3.246 5.375-6.952 6.96l-.095.04-.098-.031a5.527 5.527 0 01-.335-.125 10.89 10.89 0 01-.859-.39 12.48 12.48 0 01-2.595-1.752c-1.493-1.311-2.626-2.95-3.252-4.95-.763-2.44-.73-5.302.239-8.611l.052-.178.184-.018a1.756 1.756 0 00.22-.046 1.89 1.89 0 00.512-.226c.36-.23.604-.57.692-1.059l.014-.224zm-10.045.545a2.03 2.03 0 01-.885 1.197 2.435 2.435 0 01-.785.324c-.893 3.14-.912 5.84-.194 8.134.594 1.899 1.67 3.455 3.09 4.703.79.693 1.636 1.247 2.482 1.675a10.218 10.218 0 001.019.448c3.505-1.523 5.606-3.783 6.551-6.59.791-2.348.72-4.866.125-7.254a13.684 13.684 0 00-.39-1.29c-.576-.082-.987-.37-1.242-.794a1.905 1.905 0 01-.22-.55l-9.551-.003zm7.36 5.582a.86.86 0 01.86.855v3.575a.86.86 0 01-.86.855h-5.157a.86.86 0 01-.86-.855v-3.575a.86.86 0 01.86-.855h.223c.029-1.433.795-2.006 1.437-2.234.466-.157.966-.18 1.444-.066 1.645.368 1.78 1.692 1.75 2.3zm-2.005 4.042l-.303-1.507a.673.673 0 00-.27-1.291.673.673 0 10-.27 1.291l-.303 1.507zm-2.188-4.042h3.056c.03-1.747-1.597-1.658-1.597-1.658-1.233.082-1.43 1.19-1.459 1.658z" fill-rule="evenodd"/></svg>
)
          
TRIG.defaultProps = {
  color: '#000',
  size: 32,
}
          