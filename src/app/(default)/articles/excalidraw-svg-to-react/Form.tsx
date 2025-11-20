'use client';

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

type CheckboxOptions = BaseOptions & {
  type: 'checkbox';
  value: boolean;
  cheerioFunction: (x: CheerioAPI) => void;
};

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

const kebabCaseAttributesToMatch = new Set([
  'stroke-linecap',
  'dominant-baseline',
  'stroke-width',
  'text-anchor',
  'font-family',
  'font-size',
]);

const mapOldKebabCaseToCamelCase: Record<string, string> = {
  'stroke-linecap': 'strokeLinecap',
  'dominant-baseline': 'dominantBaseline',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
};

const options: Option[] = [
  {
    type: 'checkbox',
    description: 'Remove defs',
    value: true,
    key: 'remove-defs',
    tooltip: 'Remove the def SVG element and all of its inner content.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('defs').remove();
    },
  },
  {
    type: 'checkbox',
    description: 'Remove metadata',
    value: true,
    key: 'remove-metadata',
    tooltip: 'Remove the metadata SVG element and all of its inner content.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('metadata').remove();
    },
  },
  {
    type: 'checkbox',
    description: 'Remove inline styles',
    value: true,
    key: 'remove-inline-styles',
    tooltip: 'Remove the styles attribute from all elements within the SVG.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg *').removeAttr('style');
    },
  },
  {
    type: 'checkbox',
    description: 'Make the SVG full width',
    value: true,
    key: 'make-the-svg-full-width',
    tooltip: 'Select the SVG element and set the width to 100% and height to auto.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg').attr('height', 'auto');
      cheerio('svg').attr('width', '100%');
    },
  },
  {
    type: 'checkbox',
    description: 'Remove inline font family',
    value: true,
    key: 'remove-inline-font-family',
    tooltip: 'Select all elements and remove the font-family attribute.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg *').removeAttr('font-family');
    },
  },
  {
    type: 'checkbox',
    description: 'Remove comments',
    value: true,
    key: 'remove-svg-source-excalidraw',
    tooltip: 'Select all comments and remove the node.',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg')
        .contents()
        .each((_, node) => {
          if (node.type === 'comment') {
            cheerio(node).remove();
          }
        });
    },
  },
  {
    type: 'checkbox',
    description: 'Convert kebab-case HTML attributes to camelCase',
    value: true,
    key: 'convert-kebab-case-to-camel-case',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg *').each((_, node) => {
        const element = cheerio(node);

        for (const attribute of Object.keys(node.attribs)) {
          if (kebabCaseAttributesToMatch.has(attribute)) {
            const value = element.attr(attribute);
            const newAttributeName = mapOldKebabCaseToCamelCase[attribute];

            element.removeAttr(attribute);
            element.attr(newAttributeName, value);
          }
        }
      });
    },
    tooltip: 'Replace kebab-case attributes with camelCase equivalents, i.e. stroke-linecap with strokeLinecap.',
  },
  {
    type: 'checkbox',
    description: 'Make the background transparent',
    value: true,
    key: 'make-the-background-transparent',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg rect[fill]').attr('fillOpacity', '0');
    },
  },

  // {
  //   type: 'text',
  //   description: 'classNameToApply to the SVG container',
  //   value: 'font-excalidraw',
  //   key: 'apply-classname',
  //   cheerioFunction: (cheerio: CheerioAPI, value: string) => {
  //     cheerio('svg').attr('className', value);
  //   },
  // },
  // {
  //   type: 'text',
  //   description: 'Stroke color to apply to arrows and boxes',
  //   value: 'var(--clr-primary-3)',
  //   key: 'apply-stroke',
  //   cheerioFunction: (cheerio: CheerioAPI, value: string) => {
  //     cheerio('g > path').attr('stroke', value);
  //   },
  // },
  // {
  //   type: 'number',
  //   description: 'Stroke width to apply to arrows and boxes',
  //   value: '4',
  //   key: 'apply-stroke-width',
  //   cheerioFunction: (cheerio: CheerioAPI, value: string) => {
  //     cheerio('g > path').attr('strokeWidth', value);
  //   },
  // },
  // {
  //   type: 'custom',
  //   description: 'Add hover rectangles to boxes and make text clickable',
  //   value: true,
  //   key: 'add-hover-rectangles',
  //   cheerioFunction: (cheerio: CheerioAPI) => {
  //     cheerio('svg > g > path').each((index, element) => {
  //       const $path = cheerio(element);
  //       const $pathData = element.attribs['d'];
  //       const $boxGroup = $path.parent('g');
  //       const $textGroup = $boxGroup.next('g');

  //       if ($boxGroup.length === 0 || $textGroup.length === 0) return;

  //       // Clone the groups before moving them
  //       const $boxClone = $boxGroup.clone();
  //       const $textClone = $textGroup.clone();

  //       const $wrapperG = cheerio('<g></g>');
  //       $wrapperG.attr({
  //         className: 'hover:cursor-pointer group',
  //         onClick: `{() => setDialogIndex(${index})}`,
  //       });

  //       $wrapperG.append($boxClone);
  //       $wrapperG.append($textClone);

  //       $boxGroup.replaceWith($wrapperG);
  //       $textGroup.remove();

  //       const bb = getBounds($pathData);
  //       const $rect = cheerio('<rect></rect>');
  //       $rect.attr({
  //         x: bb.x1.toString(),
  //         y: bb.y1.toString(),
  //         width: (bb.x2 - bb.x1).toString(),
  //         height: (bb.y2 - bb.y1).toString(),
  //         fill: 'transparent',
  //         'data-hover-helper': 'true',
  //       });
  //       $boxClone.prepend($rect);
  //     });
  //   },
  // },
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

  function onClickConvert() {
    let value = svgInput;

    const $ = load(value, { xml: true });

    for (const inputOption of inputOptions) {
      if (inputOption.type === 'checkbox') {
        inputOption.cheerioFunction($);
      }
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
        {inputOptions.map((inputOption, index) => (
          <InputOption option={inputOption} index={index} key={index} />
        ))}
      </div>
      <textarea value={svgInput} onChange={onSvgInputChange} rows={10} />
      <Button className="w-fit" onClick={onClickConvert}>
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

type InputOptionProps = { option: Option; index: number };

function InputOption({ option, index }: InputOptionProps) {
  if (option.type === 'checkbox') {
    return (
      <InputOptionContainer>
        <div className="flex w-full">
          <input
            type={option.type}
            className="absolute h-6 w-6 accent-primary-300"
            checked={Boolean(option.value)}
            name={option.key}
            readOnly={true}
          />
          <p className="w-full text-center text-2xl">{option.description}</p>
        </div>
        <p>{option.tooltip}</p>
      </InputOptionContainer>
    );
  }

  // return (

  //     <div className="flex content-center gap-4">
  //       {inputOption.type === 'checkbox' && (

  //       )}

  //
  //     </div>
  //     {inputOption.type === 'text' && (
  //       <input
  //         type={inputOption.type}
  //         className="h-6 w-fit min-w-48 accent-primary-300"
  //         value={inputOption.value}
  //         onChange={(e) => onTextChange(e, index)}
  //         name={inputOption.key}
  //       />
  //     )}
  //     {inputOption.type === 'number' && (
  //       <input
  //         type={inputOption.type}
  //         className="h-6 w-fit min-w-48 accent-primary-300"
  //         value={inputOption.value}
  //         onChange={(e) => onNumberChange(e, index)}
  //         name={inputOption.key}
  //       />
  //     )}
  //
  //   </div>
  // );
}

function InputOptionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-2 border border-dashed border-primary-500 px-4 py-2">{children}</div>
  );
}
