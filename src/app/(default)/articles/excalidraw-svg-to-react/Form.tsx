'use client';

import getBounds from 'svg-path-bounding-box';

import { ChangeEvent, useState } from 'react';
import { Button } from '@/Components/Button';
import { load, type CheerioAPI } from 'cheerio';
import { SectionTitle } from '@/Components/SectionTitle';
import { CodeBlock } from '@/Components/CodeBlock';
import { ChevronsRight } from 'lucide-react';
// option to wrap in a className
// font-excalidraw
// text-[#1e1e1e]

// optional change box stroke-width
// optional - change arrow stroke width
// optional - change box stroke color
// optional - change arrow stroke color

interface BaseOptions {
  description: string;
  key: string;
  type: string;
  tooltip?: string;
}

interface CheckboxOptions extends BaseOptions {
  type: 'checkbox';
  value: boolean;
  changes: {
    matchingRegex: RegExp;
    replacementValue: string;
  }[];
}

interface TextOptions extends BaseOptions {
  type: 'text' | 'number';
  value: string;
  cheerioFunction: (x: CheerioAPI, value: string) => void;
}

interface CustomOptions extends BaseOptions {
  type: 'custom';
  value: boolean;
  cheerioFunction: (x: CheerioAPI) => void;
}

type Option = TextOptions | CheckboxOptions | CustomOptions;

const options: Option[] = [
  {
    type: 'checkbox',
    description: 'Remove defs',
    value: true,
    key: 'remove-defs',
    changes: [
      {
        matchingRegex: /<defs>[\s\S]*?<\/defs>/,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace <defs>[sS]*?</defs> with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Remove metadata',
    value: true,
    key: 'remove-metadata',
    changes: [
      {
        matchingRegex: /<metadata>.*?<\/metadata>/,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace <metadata>.*?</metadata> with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Remove inline styles',
    value: true,
    key: 'remove-inline-styles',
    changes: [
      {
        matchingRegex: /\s*style="[^"]*"/g,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace style="[^"]*" with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Make the SVG full width',
    value: true,
    key: 'make-the-svg-full-width',
    changes: [
      {
        matchingRegex: /width="[^"]*"/g,
        replacementValue: 'width="100%"',
      },
      {
        matchingRegex: /height="[^"]*"/g,
        replacementValue: 'height="auto"',
      },
    ],
    tooltip: 'String find and replace width="[^"]*" with width="100%" and height="[^"]*" with height="auto".',
  },
  {
    type: 'checkbox',
    description: 'Remove inline font family',
    value: true,
    key: 'remove-inline-font-family',
    changes: [
      {
        matchingRegex: /\s*font-family="[^"]*"/g,
        replacementValue: '',
      },
      {
        matchingRegex: /\s*fontFamily="[^"]*"/g,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace font-family="[^"]*" with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Remove @fontface information',
    value: true,
    key: 'remove-fontface-information',
    changes: [
      {
        matchingRegex: /@font-face[\s\S]*?;\s*}/g,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace @font-face[sS]*?;s*} with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Remove svg-source:excalidraw',
    value: true,
    key: 'remove-svg-source-excalidraw',
    changes: [
      {
        matchingRegex: /<!-- svg-source:excalidraw -->/g,
        replacementValue: '',
      },
    ],
    tooltip: 'String find and replace <!-- svg-source:excalidraw --> with an empty string.',
  },
  {
    type: 'checkbox',
    description: 'Convert kebab-case HTML attributes to camelCase',
    value: true,
    key: 'convert-kebab-case-to-camel-case',
    changes: [
      {
        matchingRegex: /stroke-linecap/g,
        replacementValue: 'strokeLinecap',
      },
      {
        matchingRegex: /dominant-baseline/g,
        replacementValue: 'dominantBaseline',
      },
      {
        matchingRegex: /stroke-width/g,
        replacementValue: 'strokeWidth',
      },
      {
        matchingRegex: /text-anchor/g,
        replacementValue: 'textAnchor',
      },
      {
        matchingRegex: /font-family/g,
        replacementValue: 'fontFamily',
      },
      {
        matchingRegex: /font-size/g,
        replacementValue: 'fontSize',
      },
    ],
    tooltip:
      'String find and replace kebab-case attributes with camelCase equivalents, i.e. stroke-linecap with strokeLinecap.',
  },

  {
    type: 'checkbox',
    description: 'Make the background transparent',
    value: true,
    key: 'make-the-background-transparent',
    changes: [
      {
        matchingRegex: /(<rect\b[^>]*fill="[^"]*")/g,
        replacementValue: '$1 fillOpacity={0}',
      },
    ],
  },

  {
    type: 'text',
    description: 'classNameToApply to the SVG container',
    value: 'font-excalidraw',
    key: 'apply-classname',
    cheerioFunction: (cheerio: CheerioAPI, value: string) => {
      cheerio('svg').attr('className', value);
    },
  },
  {
    type: 'text',
    description: 'Stroke color to apply to arrows and boxes',
    value: 'var(--clr-primary-3)',
    key: 'apply-stroke',
    cheerioFunction: (cheerio: CheerioAPI, value: string) => {
      cheerio('g > path').attr('stroke', value);
    },
  },
  {
    type: 'number',
    description: 'Stroke width to apply to arrows and boxes',
    value: '4',
    key: 'apply-stroke-width',
    cheerioFunction: (cheerio: CheerioAPI, value: string) => {
      cheerio('g > path').attr('strokeWidth', value);
    },
  },
  {
    type: 'custom',
    description: 'Add hover rectangles to boxes and make text clickable',
    value: true,
    key: 'add-hover-rectangles',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg > g > path').each((index, element) => {
        const $path = cheerio(element);
        const $pathData = element.attribs['d'];
        const $boxGroup = $path.parent('g');
        const $textGroup = $boxGroup.next('g');

        if ($boxGroup.length === 0 || $textGroup.length === 0) return;

        // Clone the groups before moving them
        const $boxClone = $boxGroup.clone();
        const $textClone = $textGroup.clone();

        const $wrapperG = cheerio('<g></g>');
        $wrapperG.attr({
          className: 'hover:cursor-pointer group',
          onClick: `{() => setDialogIndex(${index})}`,
        });

        $wrapperG.append($boxClone);
        $wrapperG.append($textClone);

        $boxGroup.replaceWith($wrapperG);
        $textGroup.remove();

        const bb = getBounds($pathData);
        const $rect = cheerio('<rect></rect>');
        $rect.attr({
          x: bb.x1.toString(),
          y: bb.y1.toString(),
          width: (bb.x2 - bb.x1).toString(),
          height: (bb.y2 - bb.y1).toString(),
          fill: 'transparent',
          'data-hover-helper': 'true',
        });
        $boxClone.prepend($rect);
      });
    },
  },
];

export function Form() {
  const [inputOptions, setInputOptions] = useState(options);
  const [svgInput, setSvgInput] = useState('');
  const [convertedSvg, setConvertedSvg] = useState('');
  const [inputControlsOpen, setInputControlsOpen] = useState(false);

  function onSvgInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setSvgInput(value);
  }

  function onButtonClick() {
    let value = svgInput;

    for (const inputOption of inputOptions) {
      if (!inputOption.value || inputOption.type !== 'checkbox') continue;

      for (const change of inputOption.changes) {
        value = value.replace(change.matchingRegex, change.replacementValue);
      }
    }

    const $ = load(value, { xml: true });

    for (const inputOption of inputOptions) {
      if (!inputOption.value || inputOption.type !== 'text') continue;

      inputOption.cheerioFunction($, inputOption.value);
    }

    for (const inputOption of inputOptions) {
      if (!inputOption.value || inputOption.type !== 'custom') continue;

      inputOption.cheerioFunction($);
    }

    let finalOutput = $.html();

    // Fix HTML entity encoding in onClick handlers
    finalOutput = finalOutput.replace(/onClick="\{(.*?)\}"/g, 'onClick={$1}');
    finalOutput = finalOutput.replace(/&gt;/g, '>');
    finalOutput = finalOutput.replace(/&amp;/g, '&');
    finalOutput = finalOutput.replace(/&quot;/g, '"');

    setConvertedSvg(finalOutput);
  }

  function onCheckboxClick(_: ChangeEvent<HTMLInputElement>, index: number) {
    const checkboxInputsCopy = [...inputOptions];
    const checkboxCopy = { ...checkboxInputsCopy[index] };

    if (checkboxCopy.type !== 'checkbox') return;

    checkboxCopy.value = !checkboxCopy.value;
    checkboxInputsCopy[index] = checkboxCopy;

    setInputOptions(checkboxInputsCopy);
  }

  function onTextChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    const checkboxInputsCopy = [...inputOptions];
    const checkboxCopy = { ...checkboxInputsCopy[index] };

    if (checkboxCopy.type !== 'text') return;

    checkboxCopy.value = event.target.value;
    checkboxInputsCopy[index] = checkboxCopy;

    setInputOptions(checkboxInputsCopy);
  }

  function onNumberChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    const checkboxInputsCopy = [...inputOptions];
    const checkboxCopy = { ...checkboxInputsCopy[index] };

    if (checkboxCopy.type !== 'number') return;

    checkboxCopy.value = event.target.value;
    checkboxInputsCopy[index] = checkboxCopy;

    setInputOptions(checkboxInputsCopy);
  }

  return (
    <div className="mb-4 flex flex-col gap-4">
      <SectionTitle>Input</SectionTitle>
      <div className="flex gap-2">
        <SectionTitle as="h3">Input Controls</SectionTitle> <ChevronsRight />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {inputOptions.map((inputOption, index) => {
          return (
            <div
              className="flex flex-col gap-2 border border-dashed border-primary-500 px-4 py-2"
              key={inputOption.key}
            >
              <div className="flex content-center gap-4">
                {inputOption.type === 'checkbox' && (
                  <input
                    type={inputOption.type}
                    className="h-6 w-6 accent-primary-300"
                    checked={inputOption.value}
                    onChange={(e) => onCheckboxClick(e, index)}
                    name={inputOption.key}
                  />
                )}

                <p className="text-center text-2xl">{inputOption.description}</p>
              </div>

              {inputOption.type === 'text' && (
                <input
                  type={inputOption.type}
                  className="h-6 w-fit min-w-48 accent-primary-300"
                  value={inputOption.value}
                  onChange={(e) => onTextChange(e, index)}
                  name={inputOption.key}
                />
              )}
              {inputOption.type === 'number' && (
                <input
                  type={inputOption.type}
                  className="h-6 w-fit min-w-48 accent-primary-300"
                  value={inputOption.value}
                  onChange={(e) => onNumberChange(e, index)}
                  name={inputOption.key}
                />
              )}
              <p>{inputOption.tooltip}</p>
            </div>
          );
        })}
      </div>
      <textarea value={svgInput} onChange={onSvgInputChange} rows={10} />
      <Button className="w-fit" onClick={onButtonClick}>
        Click to Convert
      </Button>
      <div>
        <CodeBlock canHide={true}>
          {convertedSvg || 'Converted SVG will appear here after clicking the button.'}
        </CodeBlock>
      </div>
    </div>
  );
}
