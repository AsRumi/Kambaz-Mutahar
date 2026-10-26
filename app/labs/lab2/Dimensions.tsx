export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-wide wd-bg-color-gray">Wide strip</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          Sample box with a long sentence that keeps its declared size no
          matter how much text it holds
        </div>
      </div>
    </div>
  );
}
