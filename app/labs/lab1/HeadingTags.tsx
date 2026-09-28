export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to
      format plain text so that it renders in a browser as large headings. There
      are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1
      is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <div id="wd-your-heading">
        <h4>Mohammed Mutahar</h4>I am a graduate student at Northeastern
        University and I enjoy <span id="wd-your-span">building</span> web
        applications.
      </div>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <p>These are notes about the lab exercises in this chapter.</p>
        <h5>What I built</h5>
        <p>A page of small components that each show one HTML topic.</p>
        <h6>Next step</h6>
        <p>Style these pages with CSS in the next lab.</p>
      </div>
    </div>
  );
}
