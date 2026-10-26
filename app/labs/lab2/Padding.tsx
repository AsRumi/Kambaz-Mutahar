export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid">
        Padded all around
      </div>
      <div className="wd-padded-left wd-border-fat wd-border-blue wd-border-solid">
        Padded on the left only
      </div>
      <div
        id="wd-ai-padded"
        className="wd-ai-padded-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Sample box padded on the top only
      </div>
    </div>
  );
}
