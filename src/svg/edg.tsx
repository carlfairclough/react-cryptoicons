import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const EDG:React.FC<IconProps> = ({ color, size, ...rest }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.99-19.498a2.82 2.82 0 00-.257-1.155c-.258-.571-.655-1.105-1.196-1.426-2.03-1.192-4.062-2.374-6.091-3.565-.232-.136-.494-.212-.751-.284a3.564 3.564 0 00-1.734.098c-.333.114-.624.322-.93.492-1.866 1.09-3.73 2.18-5.595 3.266a2.47 2.47 0 00-.639.564c-.44.53-.75 1.192-.788 1.892v7.186c0 .481.16.943.38 1.363.27.484.636.934 1.126 1.207 2.006 1.17 4.013 2.343 6.02 3.512.295.17.623.269.96.314.646.08 1.334.027 1.916-.284 1.906-1.112 3.807-2.225 5.714-3.334.28-.167.575-.314.811-.54a3.47 3.47 0 001.002-1.761c.067-.29.052-.593.052-.889v-6.656zm-9.05-2.476a.235.235 0 01.142.133c.362.674.87 1.256 1.401 1.801.344.337.598.776.684 1.256.113.534-.201 1.125-.706 1.318-.37.144-.8.117-1.155-.057-.067-.023-.18-.102-.22-.008.067.462.303.866.516 1.267.052.087-.048.148-.097.204-.22.204-.407.447-.646.632-.071-.023-.12-.091-.172-.14-.205-.216-.422-.424-.627-.644-.004-.015-.008-.053-.011-.068.228-.409.516-.81.59-1.283a.393.393 0 00-.217.03c-.377.148-.808.182-1.188.03a1.125 1.125 0 01-.707-.905c-.038-.299.052-.597.186-.86.167-.37.448-.669.74-.946a10.676 10.676 0 001.487-1.76zm-3.633 6.51a2.103 2.103 0 011.899-.13c.048.02.06.03.097.054.194.076.362.2.519.34.355.307.642.685 1.005.984.352-.333.676-.697 1.032-1.021.5-.462 1.233-.598 1.882-.466 1.017.2 1.772 1.252 1.7 2.294-.033.658-.361 1.309-.9 1.684-.366.254-.8.435-1.249.424-.59.023-1.169-.242-1.587-.655-.789-.79-1.55-1.608-2.343-2.396-.232-.25-.546-.432-.89-.454a1.456 1.456 0 00-.709.16c-.34.181-.568.544-.624.927-.07.405.075.843.377 1.12.467.451 1.286.447 1.741-.015.116-.098.224-.295.404-.216.112.068.19.182.288.27.075.086.19.158.201.287 0 .13-.115.204-.194.288-.21.22-.452.405-.736.519-.55.216-1.184.22-1.73-.015-.864-.39-1.42-1.386-1.282-2.34.098-.678.498-1.317 1.1-1.643zm5.037 1.052c-.276.288-.56.564-.837.852.004.019.008.06.011.083.333.31.624.662.971.957.467.398 1.211.345 1.644-.076.423-.412.52-1.131.19-1.63a1.212 1.212 0 00-.99-.565c-.364-.03-.73.121-.989.38z"/></svg>
)
          
EDG.defaultProps = {
  color: '#000',
  size: 32,
}
          