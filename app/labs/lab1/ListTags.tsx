export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      {/* TODO: replace with your own favorite recipe */}
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Boil water and cook pasta until al dente.</li>
        <li>Saute garlic in olive oil, then add crushed tomatoes.</li>
        <li>Toss pasta with sauce and top with grated Parmesan.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      {/* TODO: replace with titles you actually like */}
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>The Pragmatic Programmer</li>
        <li>Clean Code</li>
        <li>Designing Data-Intensive Applications</li>
      </ul>
      HTML tags from this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 - the largest heading</li>
        <li>p - a paragraph with vertical spacing</li>
        <li>ol - an ordered, numbered list</li>
        <li>ul - an unordered, bulleted list</li>
        <li>table - rows and columns of data</li>
        <li>img - an image from a local or remote file</li>
      </ul>
    </div>
  );
}
