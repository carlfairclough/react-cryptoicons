import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const KLOWN: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.56 6.56a10.879 10.879 0 00-8.192-1.25c-1.673.402-3.307 1.246-4.567 2.358-.42.37-1.105 1.08-1.405 1.454-1.944 2.417-2.77 5.612-2.237 8.647.494 2.82 2.06 5.308 4.43 7.024 2.011 1.461 4.715 2.22 7.16 2.008 2.298-.194 4.314-.999 6.054-2.407a13.373 13.373 0 001.909-1.984 11.234 11.234 0 001.599-3.06c.392-1.175.558-2.206.554-3.487 0-1.885-.47-3.642-1.43-5.34-.885-1.574-2.315-3.035-3.875-3.964zm-8.156-.385a10.295 10.295 0 013.187-.3c1.03.077 1.82.236 2.63.525 1.192.431 1.986.869 3.027 1.666.34.258.915.798 1.133 1.06l.304.356c1.133 1.313 1.93 3.092 2.248 5.015.092.54.088 2.206-.003 2.817-.254 1.708-.85 3.144-1.93 4.659-.58.808-1.737 1.877-2.641 2.435-1.959 1.21-4.034 1.726-6.25 1.55a10.294 10.294 0 01-3.83-1.109 9.932 9.932 0 01-4.3-4.313c-.78-1.525-1.118-2.926-1.118-4.599 0-2.082.575-3.946 1.775-5.735.37-.554 1.356-1.634 1.807-1.984.078-.06.244-.194.371-.293.91-.727 2.344-1.426 3.59-1.75zm7.313 9.237c-.032 0-.184.162-.34.36-.277.356-.636.822-1.889 2.44l-.16.207-.784 1.01v3.317l.091.113.041.046c.048.048.07.049.1.018.043-.042.145-.512.237-1.105.042-.279.092-.346.138-.187.063.226.003 1.15-.1 1.56-.017.078-.003.099.142.17.088.042.166.07.177.06.007-.007.12-.286.25-.615.247-.628.29-.713.342-.66.043.043-.014.276-.229.918-.162.487-.176.55-.138.657.05.13.057.233.018.233-.018 0-.201-.089-.416-.195-.487-.243-.692-.3-.82-.229-.109.064-.137.11-.186.304a.96.96 0 01-.18.31c-.081.092-.141.17-.134.177.007.003.105.045.215.088.242.097.544.295.845.55l.15.131.3.275.152-.116.193-.143c.445-.323.856-.575 1.159-.711.74-.332 1.217-.646 1.676-1.112.417-.424.576-.734.703-1.362.042-.212.158-.424.26-.477.064-.035.068-.032.05.06-.014.057-.032.138-.046.184-.017.067-.01.074.043.056.303-.11.47-.473.41-.91-.068-.505-.22-.657-.576-.572a2.59 2.59 0 00-.413.144c-.12.053-.23.089-.24.078-.01-.01.01-.113.05-.226.172-.501.197-1.08.056-1.27-.127-.173-.36-.149-.724.07l-.146.086c-.175.1-.166.067-.062-.104.18-.307.36-.67.427-.871.116-.336.064-.67-.113-.727-.13-.043-.42.14-.833.529a5.18 5.18 0 01-.399.36c0-.035.127-.265.392-.702.155-.258.381-.667.501-.91.177-.361.22-.481.23-.657.017-.258-.074-.473-.25-.58a.465.465 0 00-.17-.07zm-6.346 4.836c-.117-.163-.191-.135-.526.183a7.32 7.32 0 01-.413.37c-.24.17-.766.41-1.158.53-.23.07-.402.141-.388.155.063.057.43.103.836.103.237 0 .445.01.456.02.014.015-.007.068-.046.12-.16.224-.075.291.399.272l.116-.006.43-.025.06.092.027.053c.014.037.02.075.012.098-.031.092-.292.36-.515.53-.533.402-.508.445.247.47.452.013.576.028.6.07.053.085.043.159-.05.286-.303.42-.447.65-.437.699.021.123.25.187.636.176.638-.018.818-.01.97.039.04.014.08.024.112.029l.04.003.021-.004c.003-.05-.15-.355-.77-1.542-.095-.184-.13-.29-.116-.346.043-.17.021-.67-.032-.801a1.11 1.11 0 00-.145-.221l-.066-.076-.163-.173v-.317l-.003-.159c-.012-.303-.059-.526-.134-.628zm.78-2.856l-.005.012-.002.023c0 .068-.24 2.333-.265 2.513-.01.082-.007.131.014.124.021-.004.162-.127.318-.268.155-.141.29-.24.3-.223.014.018.063.491.11 1.052.044.507.089.976.105 1.108l.003.029.018.12.222-.244.076-.082.199-.222.04-.045.095-.106.063.074.02.025c.06.08.232.298.411.533.339.437.424.53.424.451.003-.056-.968-2.866-.989-2.866-.014 0-.07.198-.127.442-.053.243-.11.44-.12.44-.01 0-.056-.377-.102-.84-.095-1.002-.113-1.136-.141-1.136-.01 0-.113.145-.23.318-.113.176-.219.318-.236.318-.018 0-.032-.036-.032-.082 0-.042-.032-.388-.07-.765-.043-.378-.082-.692-.098-.703zm-3.505-1.885c-.244-.067-.77-.095-1.024-.063-.68.095-1.426.501-1.846 1.013-.53.642-.751 1.316-.716 2.167.025.526.11.893.303 1.288a2.34 2.34 0 001.55 1.27c.378.096.402.068.095-.112-.543-.314-.946-.685-1.196-1.101-.844-1.387-.029-3.438 1.584-3.985.255-.085.332-.095.777-.095h.144l.138.003c.207.007.312.026.477.078.346.11.804.35 1.108.582.427.325.392.307.321.166-.088-.176-.67-.738-.907-.879a3.361 3.361 0 00-.808-.332zm-2.128 2.909c-.135-.374-.142-.385-.195-.223-.035.1-.038.226-.024.417.08.914.459 1.539 1.1 1.839.266.12.544.19.544.134 0-.014-.102-.13-.225-.261a5.686 5.686 0 01-1.2-1.906zm2.943-5.418c.29-.134.268-.141-.176-.074-.773.116-1.843.547-2.573 1.034-.36.236-.907.706-1.154.985-.258.293-.555.706-.537.755.007.021.095-.028.205-.116.24-.195.55-.417.575-.417.01 0 .148-.078.304-.173a3.89 3.89 0 011.274-.466c.31-.042.797-.024 1.041.043.25.067.734.268 1.002.416.145.081.269.145.276.145.02 0 .406.261.698.473.509.363 1.257 1.037 1.589 1.426.116.137.233.25.257.25.025.004.057.032.067.064.015.035.145.23.29.434a21.66 21.66 0 011.133 1.73c.48.815.459.78.494.758.018-.012.031-.172.034-.38l.001-.573-.437-.413-.284-.278a11.93 11.93 0 01-1.047-1.215c-.321-.427-.455-.646-1.348-2.188-.332-.575-.42-.688-.586-.776-.424-.212-1.034-.378-1.663-.452-.204-.025-.37-.06-.37-.078 0-.067.399-.233.674-.282.155-.028.459-.05.674-.053.392 0 .399 0 .42-.085.053-.212.05-.215-.596-.233-.508-.016-.654-.038-.575-.096l.028-.017c.024-.017.165-.081.31-.148zm-2.548 4.038c-.166-.096-.17-.067-.039.29.212.578.565 1.104 1.07 1.616.397.4.927.83 1.098.901l.033.01.02-.004.003-.018c-.003-.074-.102-.343-.237-.628a5.307 5.307 0 00-1.606-1.938 5.8 5.8 0 00-.342-.23zm1.736-.505c-.222-.102-.6-.201-.6-.159 0 .007.16.177.353.378a5.792 5.792 0 011.042 1.5c.222.498.218.49.247.254.035-.265.007-.522-.092-.861a1.74 1.74 0 00-.95-1.112zm5.415-6.018c-.057-.085-.053-.085-.226-.035-1.316.385-2.644.996-3.17 1.455l-.088.084-.138.14.11.403.126.442c.4 1.31 1 2.496 1.794 3.557.31.41 1.182 1.267 1.567 1.536.35.243.71.458.773.458.063 0 1.105-1.217 1.066-1.253a9.603 9.603 0 00-.396-.137c-.709-.237-1.33-.58-1.76-.974-.354-.322-.657-.791-.325-.498.289.254 1.358.702 1.976.83.138.024.25.045.254.042 0 0-.074-.106-.17-.233-.225-.297-.49-.812-.635-1.236-.116-.345-.24-.522-.43-.624-.081-.04-.177-.046-.441-.028-.922.06-1.72-.346-2.15-1.095-.236-.413-.59-1.108-.572-1.126.011-.01.6.226 1.313.526 1.182.495 1.467.608 1.688.654l.077.015.039.006.173.024-.021-.685-.009-.22a7.824 7.824 0 00-.083-.884c-.074-.42-.247-.996-.342-1.144zm5.184-1.228c-.137-.014-3.977.886-4.13.967a.569.569 0 00-.24.328c-.017.074.177.985.672 3.13.384 1.663.705 3.04.72 3.054.014.014.31-.339.656-.787.6-.777.635-.812.748-.812.194 0 .494.18.61.37.17.272.16.654-.02 1.063a.738.738 0 00-.074.212c.014.014 2.53-.533 2.693-.586a.68.68 0 00.208-.141c.19-.201.198-.156-.65-3.47-.423-1.662-.797-3.067-.829-3.113a.564.564 0 00-.145-.144.552.552 0 00-.219-.071zm.583 4.006c.01.028-1.01 2.481-1.048 2.52-.015.014-.145-.081-.29-.212a83.72 83.72 0 00-1.034-.928c-.424-.378-.755-.692-.741-.695.017-.004.42.116.893.271l.864.28.403-.378c.219-.209.522-.491.67-.629.149-.14.276-.243.283-.23zm-2.114 1.101c-.456-.148-.54-.166-.52-.113.008.014.266.258.576.537.31.278.642.582.738.677.092.092.176.163.183.156.01-.007-.035-.251-.098-.54l-.117-.526-.159-.021a5.569 5.569 0 01-.603-.17zM12.92 9.867c0-.06-.236-.024-.83.124a14.34 14.34 0 00-1.658.533c-.71.279-1.906.921-1.814.97.028.015.144.04.26.053.685.079 1.832.361 2.38.58l.123.052.25.117-.14.024-.307.063c-.81.19-1.564.543-2.154 1.01-.307.247-.811.77-.977 1.01-.138.197-.138.197.254-.1.6-.45 1.581-.977 2.354-1.266.632-.233 1.518-.452 2.058-.505.13-.014.236-.039.236-.053 0-.056-.41-.335-.73-.501-.442-.229-1.367-.578-1.871-.712l-.152-.036-.123-.029.14-.12.088-.069a6.196 6.196 0 011.025-.576 12.37 12.37 0 011.404-.495c.1-.02.184-.056.184-.074zm7.641.787c.025-.067.078-.049.152.046.039.05.522.561 1.073 1.137.547.572.999 1.062.999 1.087 0 .063-1.31 1.288-1.38 1.288-.032 0-.452-.13-.935-.286-.826-.272-.957-.332-.844-.402.021-.01.035-.046.035-.078 0-.042.636-2.012.9-2.792zm-4.63 2.87c-.113-.021-.113-.021-.078.078.046.14.201.222.42.222.233 0 .222-.057-.035-.18a1.834 1.834 0 00-.307-.12zm4.68-2.679c-.014-.018-.036.014-.05.07-.035.188-.73 2.288-.8 2.425-.04.078-.064.145-.054.152.014.018 1.063-.766 1.2-.9l.1-.095-.184-.812c-.1-.445-.195-.822-.212-.84zm-7.776-.55h-.088l-.065.007c-.18.032-.538.16-.831.303-.262.127-.696.459-.696.533 0 .01.124.067.276.123.36.135.836.364 1.207.586.166.096.314.17.335.166.042-.017.028-.416-.032-.819-.028-.208-.053-.282-.092-.282-.061 0-.074-.051-.053-.263l.011-.1.028-.255zm7.109-1.836c-.22-.113-.477-.092-1.712.141-1.257.237-2.199.466-3.141.766a15.13 15.13 0 00-1.507.597c-.209.105-.24.134-.297.282-.06.159-.06.19 0 .734.085.801.06.752.297.572a6.04 6.04 0 01.96-.568c1.387-.696 3.208-1.222 5.428-1.571.303-.05.501-.095.501-.12 0-.056-.233-.54-.321-.66a.682.682 0 00-.208-.173zm-5.136-2.242l-.064.002a10.32 10.32 0 00-.846.09c-.202.032-.237.05-.216.1.24.578.622 1.718.593 1.771-.007.014-.134-.095-.282-.236-.148-.145-.286-.261-.304-.261-.017 0-.024.042-.014.095.01.056.04.437.06.847.025.413.057.77.07.794.057.092.11-.035.163-.399.032-.201.067-.377.078-.395.014-.014.12.102.233.258.113.155.23.282.25.282a.415.415 0 00.138-.042c.07-.032.088-.064.088-.163 0-.328-.243-1.482-.423-1.997-.039-.117-.064-.22-.053-.23.077-.073.723.949 1.083 1.7l.18.386.124-.021.05-.01a.301.301 0 00.109-.043c.074-.074-.533-1.765-.833-2.312-.064-.116-.127-.215-.148-.215l-.036-.001zm-2.192.58c-.158-.064-.398-.004-.68.176-.089.053-.385.222-.657.378-.91.508-1.723 1.087-1.701 1.214.007.028.031.05.056.042.025-.003.23-.056.452-.113a5.81 5.81 0 011.617-.205l.268.004.656.018.025-.25.005-.086c.009-.166.017-.436.02-.66V7.09c0-.244-.013-.276-.06-.293zm2.87-.597l-.226.001c-.067.002-.116.008-.116.017 0 .01.113.212.25.452a21.7 21.7 0 01.861 1.718c.036.089.078.173.092.191.042.05.279-.01.279-.07 0-.14-.5-1.197-.859-1.829l-.07-.12-.211-.36zm.6.035c-.174 0-.14.034.102.449.233.402.79 1.55.79 1.623 0 .103.093.103.552.007a30.718 30.718 0 011.274-.226c.024-.017-.216-.649-.378-1.005-.247-.53-.332-.664-.441-.689l-.177-.035c-.05-.01-.377-.042-.73-.07a17.193 17.193 0 00-.886-.054h-.057z" fill={color} /><path d="M16.785 10.672c.088.215.134.445.18.928.046.516.13 1.229.18 1.525.021.152.081.184.081.046 0-.05-.025-.244-.053-.434a31.87 31.87 0 01-.106-.96 11.384 11.384 0 00-.092-.77c-.045-.215-.127-.395-.176-.395-.025 0-.028.025-.014.06zm.759 4.13c0 .155.494 1.291.656 1.507.11.151.081.014-.046-.216a7.12 7.12 0 01-.47-1.034c-.08-.226-.14-.335-.14-.257z" fill={color}/></g></svg>
)
          
KLOWN.defaultProps = {
  color: '#000',
  size: 32,
}
          