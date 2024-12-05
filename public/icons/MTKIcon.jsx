export default function MTKIcon(props) {
  return (
    <svg
      role="img"
      viewBox="0 0 48 48"
      x="0px"
      y="0px"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>MTK</title>
      {/* 使用 <g> 包裹内容，并添加 transform 属性 */}
      <g transform="scale(1.3) translate(0,0)">
        {/* 添加 stroke="white" 修改线条颜色 */}
        <path d="M11,11V21H21V11Zm8,8H13V13h6Z" stroke="white" fill="none" />
        <path
          d="M30,13V11H26V8a2,2,0,0,0-2-2H21V2H19V6H13V2H11V6H8A2,2,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2,2,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2,2,0,0,0,2-2V21h4V19H26V13ZM24,24H8V8H24Z"
          stroke="white"
          fill="none"
        />
      </g>
    </svg>
  );
}
