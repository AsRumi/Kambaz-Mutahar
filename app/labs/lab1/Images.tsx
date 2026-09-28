export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Starship_full_stack.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A sample image from NASA:
      <br />
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        alt="The Earth seen from Apollo 17"
        width="200px"
      />
      <br />
      My image:
      <br />
      <img
        id="wd-your-image"
        src="/images/boston.jpg"
        alt="The Boston skyline seen from the Longfellow Bridge"
        width="300px"
      />
    </div>
  );
}
