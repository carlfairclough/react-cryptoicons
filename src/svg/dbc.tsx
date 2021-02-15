import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const DBC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.215-15.072c.158-.166.158-.28-.01-.438-.325-.308-.653-.614-.978-.922l-1.508-1.431c-.13-.124-.263-.246-.394-.369-.074-.07-.157-.102-.263-.076a1.03 1.03 0 01-.273.043c-.142-.004-.216.07-.283.178-.555.89-1.113 1.779-1.67 2.668-.272.436-.546.872-.817 1.31-.119.193-.037.355.19.385l1.133.148c.497.064.993.13 1.49.19.241.029.315.095.344.332.022.181.046.362.074.542.018.117.117.198.247.219.06-.04.132-.072.182-.124.298-.308.59-.621.885-.93l1.65-1.725zm11.09 2.319c-.398-.336-.803-.664-1.193-1.008-.163-.144-.325-.203-.536-.136a.547.547 0 01-.418-.034c-.176-.09-.325-.06-.485.044-.758.49-1.52.973-2.28 1.458l-1.358.868c-.112.072-.195.161-.199.302l-.034 1.195a.473.473 0 00.135.394c.248.285.494.573.74.86l.593.684a.327.327 0 00.215.123c.235.027.409-.12.406-.355-.002-.205-.015-.41-.023-.614a.343.343 0 01.125-.282 1.31 1.31 0 01.148-.109l1.643-1.065c.85-.551 1.7-1.104 2.55-1.654.144-.093.212-.217.187-.386-.02-.133-.122-.207-.215-.285zm-7.298.992c-.402-.405-.81-.803-1.215-1.205l-1.799-1.79a.386.386 0 00-.562.028c-.45.475-.901.949-1.352 1.422-.418.437-.834.875-1.255 1.309-.187.191-.184.43.012.608.35.32.689.653 1.033.98.06.058.125.113.187.17a.33.33 0 00.24.095h.196c.266-.014.554-.032.843-.043.489-.02.978-.033 1.467-.056.121-.005.254-.01.36-.06.59-.272 1.174-.557 1.76-.84.175-.084.25-.211.212-.397a.47.47 0 00-.127-.221zm2.478-8.049c.091.14.176.286.263.43.77 1.267 1.543 2.533 2.308 3.803a.49.49 0 00.807.055c.523-.705 1.053-1.406 1.577-2.11a.664.664 0 00.154-.398l.022-.01c-.037-.085-.062-.178-.112-.255-.372-.572-.749-1.142-1.125-1.712-.178-.27-.355-.543-.535-.812-.104-.156-.254-.243-.443-.21-.857.15-1.712.313-2.57.456-.321.053-.54.465-.346.763zm-1.505 3.532l.152-1.324.13-1.13.1-.88c-.01-.018-.027-.079-.061-.09-.041-.014-.099.01-.146.026-.023.008-.04.035-.058.055l-.656.69c-.446.468-.89.937-1.337 1.405l-1.958 2.049c-.137.143-.136.185.006.317.428.4.855.8 1.28 1.203.49.462.979.927 1.468 1.39.136.13.271.26.413.383.032.027.096.047.132.033.036-.014.069-.07.078-.112.019-.088.02-.18.03-.271l.148-1.301c.042-.37.087-.739.129-1.108l.15-1.335zm3.806 1.02c-.174-.283-.344-.568-.516-.852l-1.955-3.216c-.053-.088-.103-.179-.164-.261-.023-.03-.08-.059-.115-.053-.033.006-.062.055-.088.088-.01.014-.01.036-.014.055l-.099.71-.262 1.906-.27 1.951-.247 1.782-.11.808c.01.031.014.096.046.142.057.084.164.09.268.023.263-.166.525-.333.787-.501.834-.534 1.667-1.069 2.504-1.6.107-.067.159-.144.147-.27a.617.617 0 01.092-.404c.07-.107.06-.205-.004-.309zm-4.053-4.904l-.725.127-2.97.521-2.515.44c-.262.045-.524.09-.785.137-.143.025-.215.096-.225.221-.007.092.043.157.106.217.472.443.944.886 1.414 1.33.484.457.967.917 1.45 1.375.155.148.276.148.425-.008.415-.434.827-.871 1.241-1.306l1.982-2.074.68-.715c.05-.053.094-.115.045-.181-.032-.043-.092-.064-.123-.084zm-6.739.632c-.04.028-.073.066-.11.099l.022.041c.037 0 .074.006.11 0l2.57-.462 2.354-.423c.663-.119 1.326-.24 1.99-.358.09-.016.14-.06.173-.144a1.34 1.34 0 01.138-.248c.042-.062.064-.12.03-.19l-.119-.26c-.309-.666-.618-1.333-.929-1.999-.075-.162-.17-.183-.32-.081l-4.51 3.072c-.467.317-.933.634-1.399.953zm-4.69 1.526c.057-.013.114-.02.168-.039.801-.285 1.602-.573 2.404-.855a.36.36 0 00.249-.26.692.692 0 01.512-.51.434.434 0 00.3-.255c.276-.573.558-1.144.836-1.716.152-.312.304-.623.451-.937a.359.359 0 00-.034-.389.348.348 0 00-.354-.144.638.638 0 00-.201.08c-.976.562-1.95 1.126-2.926 1.687a.659.659 0 00-.25.245c-.366.629-.736 1.256-1.104 1.885-.128.217-.26.431-.379.653-.141.263.034.55.329.555zm4.153-1.826c-.004.075.063.117.133.087.031-.014.06-.035.088-.054l1.18-.804 3.694-2.513.618-.421c.08-.054.142-.118.135-.215 0-.159-.112-.257-.274-.25-.227.011-.454.027-.68.036l-1.93.073c-.327.013-.654.03-.981.04-.124.005-.197.06-.247.17-.215.479-.436.956-.654 1.434-.35.766-.7 1.531-1.048 2.297a.346.346 0 00-.034.12zm-1.363 1.65c.032-.05.071-.103.024-.166-.052-.07-.115-.042-.178-.023l-.265.082-2.015.64c-.356.113-.712.226-1.068.341-.119.039-.16.093-.162.22.006.023.017.071.033.118l.67 1.882c.076.215.151.43.232.644.05.134.19.187.296.11a.425.425 0 00.101-.121l1.84-2.94c.164-.263.329-.524.492-.787zm16.118 2.609c-.077-.438-.155-.875-.231-1.313-.022-.129-.09-.22-.222-.25-.126-.027-.225.023-.3.126l-.225.303c-.369.497-.736.995-1.106 1.49-.08.109-.101.218-.039.341.065.128.07.266.046.402-.024.136.02.235.122.32.453.379.906.758 1.357 1.139.22.185.438.121.514-.154l.265-.956c.016-.059.026-.119.037-.168-.006-.049-.01-.087-.016-.124l-.202-1.156zm-7.564-7.944l.545 1.182c.143.307.288.613.43.92.034.076.08.13.17.133.247.01.44.12.597.303.028.032.072.049.095.064l.08-.016c.806-.145 1.613-.291 2.42-.435.074-.013.137-.03.151-.114.014-.084-.04-.123-.106-.156l-.597-.3-3.362-1.68c-.083-.04-.162-.09-.25-.118a.24.24 0 00-.17.011c-.06.034-.05.104-.022.164l.019.042z" fill-rule="evenodd"/></svg>
)
          
DBC.defaultProps = {
  color: '#000',
  size: 32,
}
          