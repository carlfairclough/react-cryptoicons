import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const COLX: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.678-18.717l-1.688-1.688a2.715 2.715 0 00-1.936-.8h-.26v-.27c0-.473-.112-.923-.348-1.328a2.374 2.374 0 00-.473-.63l-1.688-1.689a2.715 2.715 0 00-1.937-.8H9.57c-.732 0-1.418.282-1.936.8L5.946 8.566a2.67 2.67 0 00-.8 1.925l-.045 7.295c-.01.731.282 1.44.8 1.958l1.688 1.689a2.714 2.714 0 001.936.799h.304v.27c0 .473.113.923.349 1.328.124.237.281.45.473.63l1.688 1.69a2.719 2.719 0 001.936.798h7.79c.732 0 1.418-.281 1.936-.799l1.689-1.688a2.72 2.72 0 00.799-1.936v-7.317a2.727 2.727 0 00-.81-1.925zM9.525 19.755a.272.272 0 01-.191-.078l-.844-.845-.845-.844a.4.4 0 01-.079-.146v-7.339c0-.08.034-.147.08-.192l1.688-1.688c.022-.023.045-.034.067-.045a.3.3 0 01.135-.034h7.79c.045 0 .079.011.124.034.034.011.056.034.079.056l1.688 1.689a.193.193 0 01.056.078c.012.012.012.023.012.034 0 .011.01.023.01.034 0 .011.012.045.012.067v.36c0 .158-.124.27-.27.27h-1.35a.272.272 0 01-.192-.078l-.766-.765h-6.596l-.281.28-.383.384v6.337l.664.664h6.585l.766-.776.01-.012c.023-.011.046-.034.068-.045.034-.022.08-.022.113-.022h1.35c.09 0 .17.045.226.112a.269.269 0 01.056.158v.383a.272.272 0 01-.079.191l-.844.844-.844.844c-.011.012-.034.023-.045.034 0 0-.011.011-.023.011-.011.012-.022.012-.034.012-.01 0-.01 0-.022.011-.011 0-.023.011-.034.011H9.525v.011zm14.499 2.747a.272.272 0 01-.08.191l-1.688 1.689a.239.239 0 01-.067.045.3.3 0 01-.135.034h-7.79a.257.257 0 01-.124-.034.202.202 0 01-.078-.056l-1.689-1.689c-.022-.022-.045-.045-.056-.079-.012-.01-.012-.022-.012-.033 0-.012-.01-.023-.01-.034 0-.011-.012-.045-.012-.068v-.36c0-.157.124-.27.27-.27h1.35c.08 0 .147.034.192.079l.766.765h6.585l.281-.281.383-.383v-6.337l-.664-.665h-6.574l-.765.777-.012.011c-.022.012-.045.034-.067.045-.034.023-.079.023-.113.023h-1.35a.294.294 0 01-.226-.113.269.269 0 01-.056-.157v-.383a.27.27 0 01.079-.191l.844-.844.844-.845c.012-.011.034-.022.045-.034 0 0 .012-.01.023-.01.011-.012.022-.012.034-.012.01 0 .01 0 .022-.011.011 0 .023-.012.034-.012h7.846c.078 0 .146.034.191.08l.844.844.845.844a.155.155 0 01.033.045.373.373 0 01.045.101v.056c.012-.022.012 7.272.012 7.272z"/></svg>
)
          
COLX.defaultProps = {
  color: '#000',
  size: 32,
}
          