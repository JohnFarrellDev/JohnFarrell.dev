import { produceMetaData } from '@/Utilities/produceMetaData';
import { Form } from './Form';
import { ArticleBanner } from '../../../../Components/ArticleBanner';
import { SectionTitle } from '../../../../Components/SectionTitle';

export const metadata = produceMetaData({
  title: 'Convert Excalidraw SVG',
  description: 'Convert an Exported Excalidraw SVG to be React Compatible',
});

export default function ExcalidrawSvgToReact() {
  return (
    <section className="container">
      <ArticleBanner title="Convert Excalidraw Diagram to a React Component" className="font-excalidraw" />
      <p>
        The goal is to extract a diagram from Excalidraw in the SVG format, to then take this SVG and convert into a
        React component that is interactive. This will create a more engaging "About Me" section for my personal website
        while highlighting my full career timeline and accomplishments.
      </p>
      <p>
        It's easy to extract the SVG from Excalidraw, simply select the content you want to export, right click and
        "copy to clipboard as SVG".
      </p>
      <p>
        I want to be able to paste that exported SVG into the textarea at the bottom of this page, click the Convert
        button and export a React compliant SVG that I can paste inside a React component.
      </p>
      <p>
        The benefit of automating a lot of the conversion from Excalidraw to React is that if I have to edit this
        diagram in the future the process will be relatively quick and painless. I also have multiple variations of the
        diagram based on screen sizes.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <img
          src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/excalidraw-svg-to-react/excalidraw-about-me.png"
          alt=""
          className=""
        />
        <div>
          <p>The SVG exported by Excalidraw is not compatible with my goals within React for a few reasons:</p>
          <ul className="mb-4 list-disc pl-4">
            <li>
              The SVG contains font face information for fetching the Excali web font, this is not required as I install
              the font directly and apply it via tailwind
            </li>
            <li>
              The SVG contains lots of needless information that can be removed without any impact (svg-source,
              metadata, defs, inline styles)
            </li>
            <li>HTML attributes on the SVG are in kebab-case and not camelCase</li>
            <li>
              The SVG size is specific to the exact width and height within Excalidraw, we want to make the SVG fit the
              size of it's container
            </li>
            <li>
              There is no logical element surrounding each box containing text, we need this container to handle
              interactivity
            </li>
            <li>I want to apply some of my personal styling to the arrows and rectangles</li>
            <li>
              I want a cursor pointer effect on hover of a rectangle to imply a user can click within the rectangle
            </li>
            <li>
              The SVG has no interactivity - no opportunity to expand a section to learn more, clicking a section should
              open a modal
            </li>
            <li>It is not possible for a keyboard user to tab between and select individual sections</li>
          </ul>
        </div>
      </div>
      <SectionTitle>Some Assumptions</SectionTitle>
      <div>
        <ul className="mb-4 list-disc pl-4">
          <li>
            All rectangles and arrows in the SVG are always found with the selector{' '}
            <code className="whitespace-pre rounded bg-gray-300 p-1">
              svg {'>'} g {'>'} path
            </code>
          </li>
          <li>
            As long as the text is created directly after the rectangle the text will be found in the sibling group of
            the rectangle. The selector is{' '}
            <code className="whitespace-pre rounded bg-gray-300 p-1">
              (svg {'>'} g {'>'} path).parentElement + g
            </code>
            . The first group element is for the rectangle and the second group element is for the text.
          </li>
          <li>
            With these 2 assumptions we can select all our rectangle paths, all our arrow paths, all our text, correctly
            identify what text is found within a rectangle.
          </li>
        </ul>
      </div>
      <SectionTitle>Known Limitations</SectionTitle>
      <p>
        Much of the implementation relies on string find-and-replace operations. For example, converting kebab-case
        attributes to camelCase involves searching the entire string for instances of kebab-case and replacing them with
        their camelCase equivalents. There is no discrimination between whether the text, such as{' '}
        <code>stroke-width</code>, is being used as an attribute in an SVG element or is part of the visible text
        content that should remain unchanged. Therefore we could inadvertently alter the text content, for my situation
        I know this will not occur and the solution is practical.
      </p>
      <p>
        There is also a reliance on the external package <a href="https://www.npmjs.com/package/cheerio">cheerio</a>. We
        are working with a string that represents an SVG and trying to transform it into a new format that better suits
        our use case. While find-and-replace was a valid solution for many of our requirements, in some cases we need to
        add attributes or leverage the DOM structure of the SVG. Cheerio allows us to parse the string into a format
        that lets us use jQuery-style selectors to modify the SVG as if it were a DOM element. Once our transformations
        are complete, we convert the object back into a string representation of the SVG.
      </p>
      <Form />
    </section>
  );
}
