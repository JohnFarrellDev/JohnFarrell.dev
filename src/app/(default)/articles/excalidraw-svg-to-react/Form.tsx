'use client';

import { ChangeEvent, useState } from 'react';
import { Button } from '@/Components/Button';
import { load, type CheerioAPI } from 'cheerio';
import { SectionTitle } from '@/Components/SectionTitle';
import { CodeBlock } from '@/Components/CodeBlock';
import { ChevronsRight } from 'lucide-react';
import getBounds from 'svg-path-bounding-box';

interface BaseOptions {
  description: string;
  key: string;
  type: string;
  tooltip?: string;
}

type CheckboxOption = BaseOptions & {
  type: 'checkbox';
  value: boolean;
  cheerioFunction: (x: CheerioAPI) => void;
};

interface TextOption extends BaseOptions {
  type: 'text' | 'number';
  value: string;
  cheerioFunction: (x: CheerioAPI, value: string) => void;
}

interface CustomOption extends BaseOptions {
  type: 'custom';
  value: boolean;
  cheerioFunction: (x: CheerioAPI) => void;
}

type Option = TextOption | CheckboxOption | CustomOption;

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
    description: 'Ensure text is encoded to be HTML compliant',
    tooltip: 'convert text such as > to &gt;',
    value: true,
    key: 'convert-invalid-token-to-valid-html-encoding',
    cheerioFunction: (cheerio: CheerioAPI) => {
      cheerio('svg')
        .find('*')
        .each((_, el) => {
          if (el && Array.isArray(el.children)) {
            for (const child of el.children) {
              if (child.type === 'text' && typeof child.data === 'string') {
                if (child.data.includes('>')) {
                  child.data = child.data.replace(/>/g, '&gt;');
                }
              }
            }
          }
        });
    },
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
  {
    type: 'text',
    description: 'Class Value To Apply to the SVG container',
    value: '',
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
    type: 'checkbox',
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
          tabIndex: '0',
          role: 'button',
          focusable: 'true',
          onClick: `{() => setDialogIndex(${index})}`,
          onKeyDown: `{(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); setDialogIndex(${index}); } }}`,
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

  function onSvgInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setSvgInput(value);
  }

  function onClickConvert() {
    const value = svgInput;

    const $ = load(value, { xml: true });

    for (const inputOption of inputOptions) {
      if (inputOption.type === 'checkbox' && inputOption.value) {
        inputOption.cheerioFunction($);
      }
      if (inputOption.type === 'text') {
        inputOption.cheerioFunction($, inputOption.value);
      }
      if (inputOption.type === 'number') {
        inputOption.cheerioFunction($, inputOption.value);
      }
    }

    let finalOutput = $.html();

    finalOutput = finalOutput.replace(/&amp;/g, '&');
    finalOutput = finalOutput.replace(/&gt;/g, '>');
    finalOutput = finalOutput.replace(/&lt;/g, '<');
    finalOutput = finalOutput.replace(/&quot;/g, '"');
    finalOutput = finalOutput.replace(/&apos;/g, "'");

    finalOutput = finalOutput.replace(
      /(\b(?:onClick|onKeyDown|onKeyUp|onMouseDown|onMouseUp|onMouseEnter|onMouseLeave))="\{([\s\S]*?)\}"/g,
      '$1={$2}'
    );
    finalOutput = finalOutput.replace(/\btabIndex="(\d+)"/g, 'tabIndex={$1}');
    finalOutput = finalOutput.replace(/(\b[a-zA-Z_:.-]+)=["']\{([\s\S]*?)\}["']/g, '$1={$2}');

    setConvertedSvg(finalOutput);
  }

  function onCheckboxClick(index: number) {
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
          if (inputOption.type === 'checkbox') {
            return <CheckboxInput option={inputOption} index={index} onClick={onCheckboxClick} key={inputOption.key} />;
          }
          if (inputOption.type === 'text') {
            return <TextboxInput option={inputOption} index={index} onChange={onTextChange} key={inputOption.key} />;
          }
          if (inputOption.type === 'number') {
            return (
              <NumberBoxInput option={inputOption} index={index} onChange={onNumberChange} key={inputOption.key} />
            );
          }
        })}
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

type CheckboxInputOptionProps = {
  option: CheckboxOption;
  index: number;
  onClick: (index: number) => void;
};

function CheckboxInput({ option, index, onClick }: CheckboxInputOptionProps) {
  return (
    <InputOptionContainer>
      <div className="flex w-full">
        <input
          type="checkbox"
          className="absolute h-6 w-6 accent-primary-300"
          checked={Boolean(option.value)}
          name={option.key}
          onChange={() => onClick(index)}
        />
        <p className="mx-8 w-full text-center text-2xl">{option.description}</p>
      </div>
      <p>{option.tooltip}</p>
    </InputOptionContainer>
  );
}

type TextboxInputOptionProps = {
  option: TextOption;
  index: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
};

function TextboxInput({ option, index, onChange }: TextboxInputOptionProps) {
  return (
    <InputOptionContainer>
      <div className="flex flex-col">
        <p className="w-full text-left text-2xl">{option.description}</p>
        <input
          type="text"
          className="h-6 w-fit min-w-48 accent-primary-300"
          value={option.value}
          onChange={(e) => onChange(e, index)}
          name={option.key}
        />
      </div>
      <p>{option.tooltip}</p>
    </InputOptionContainer>
  );
}

type NumberInputOptionProps = {
  option: TextOption;
  index: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
};

function NumberBoxInput({ option, index, onChange }: NumberInputOptionProps) {
  return (
    <InputOptionContainer>
      <div className="flex flex-col">
        <p className="w-full text-left text-2xl">{option.description}</p>
        <input
          type="number"
          className="h-6 w-fit min-w-48 accent-primary-300"
          value={option.value}
          onChange={(e) => onChange(e, index)}
          name={option.key}
        />
      </div>
      <p>{option.tooltip}</p>
    </InputOptionContainer>
  );
}

function InputOptionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-2 border border-dashed border-primary-500 px-4 py-2">{children}</div>
  );
}
