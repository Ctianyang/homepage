export default function QualcommIcon(props) {
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
      <title>Qualcomm</title>
      {/* 使用 <g> 包裹内容，并添加 transform 属性 */}
      <g transform="scale(1.3) translate(0,0)">
        {/* 添加 stroke="red" 修改线条颜色 */}
        <path
          d="M16 0c-7.693 0-13.901 5.984-13.901 13.964 0 8.005 6.208 13.968 13.901 13.968 1.312 0 2.579-0.183 3.781-0.516l1.511 3.896c0.156 0.423 0.468 0.688 1.025 0.688h2.401c0.579 0 1-0.38 0.735-1.109l-1.959-5.093c3.849-2.428 6.407-6.719 6.407-11.855 0-7.959-6.208-13.943-13.901-13.943zM22.047 22.083l-1.755-4.561c-0.156-0.376-0.469-0.729-1.136-0.729h-2.287c-0.577 0-1.025 0.375-0.76 1.109l2.312 5.984c-0.755 0.197-1.577 0.287-2.421 0.287-5.625 0-9.631-4.427-9.631-10.208s4.005-10.204 9.631-10.204c5.625 0 9.631 4.423 9.631 10.204 0 3.38-1.36 6.271-3.584 8.119z"
          stroke="white"
          fill="none"
        />
      </g>
    </svg>
  );
}
