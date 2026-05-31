'use client';

import { useState } from 'react';

interface Folder {
  folderName: string;
  content: Content[];
  collapsed?: boolean;
}

type Content = string | Folder;

interface FileExplorerProps {
  content: Content[];
}

export function FileExplorer({ content }: FileExplorerProps) {
  return (
    <div className="w-fit min-w-64 overflow-hidden rounded-xl border border-gray-700/60 bg-gray-800 font-mono text-sm text-gray-100 shadow-lg ring-1 ring-black/20">
      <div className="flex items-center gap-2 border-b border-gray-700/60 bg-gray-900/50 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <span className="ml-2 text-xs tracking-wide text-gray-400 select-none">Explorer</span>
      </div>
      <div className="overflow-x-auto p-3">
        <FileExplorerContent content={content} depth={0} />
      </div>
    </div>
  );
}

interface FileExplorerContentProps {
  content: Content[];
  depth: number;
  isHiddenProp?: boolean;
}

function FileExplorerContent({ content, depth, isHiddenProp }: FileExplorerContentProps) {
  const [isHidden, setIsHidden] = useState<Set<number>>(new Set());
  const [isShown, setIsShown] = useState<Set<number>>(new Set());

  function setOpen(index: number) {
    const newIsHidden = new Set(isHidden);
    const newIsShown = new Set(isShown);

    newIsShown.add(index);
    newIsHidden.delete(index);

    setIsShown(newIsShown);
    setIsHidden(newIsHidden);
  }

  function setHide(index: number) {
    const newIsHidden = new Set(isHidden);
    const newIsShown = new Set(isShown);

    newIsHidden.add(index);
    newIsShown.delete(index);

    setIsHidden(newIsHidden);
    setIsShown(newIsShown);
  }

  return (
    <div
      className={depth === 0 ? '' : 'ml-2.5 border-l border-gray-700/50 pl-4'}
      style={{
        display: `${isHiddenProp ? 'none' : 'block'}`,
      }}
    >
      {content.map((c, index) => (
        <div key={`${depth}.${index}`}>
          {typeof c === 'string' ? (
            // display the file name
            <p className="mb-0 flex items-center gap-1.5 rounded-md px-2 py-1 text-gray-300 transition-colors select-none hover:bg-white/5 hover:text-white">
              <FileIcon className="shrink-0 text-gray-400" />
              {c}
            </p>
          ) : (
            <>
              {/* handle a folder being rendered */}
              <p className="mb-0 cursor-pointer rounded-md text-yellow-300 transition-colors select-none hover:bg-white/5">
                {(c.collapsed || isHidden.has(index)) && !isShown.has(index) ? (
                  <span onClick={() => setOpen(index)} className="flex items-center gap-1.5 px-2 py-1">
                    <ChevronRight className="shrink-0 text-gray-500" />
                    <FolderIcon className="shrink-0" />
                    {c.folderName}
                  </span>
                ) : (
                  <span onClick={() => setHide(index)} className="flex items-center gap-1.5 px-2 py-1">
                    <ChevronDown className="shrink-0 text-gray-500" />
                    <FolderOpenIcon className="shrink-0" />
                    {c.folderName}
                  </span>
                )}
              </p>

              <FileExplorerContent
                content={c.content}
                depth={depth + 1}
                isHiddenProp={(c.collapsed || isHidden.has(index)) && !isShown.has(index)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function ChevronRight({ className }: { className: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>
  );
}

function ChevronDown({ className }: { className: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396l-.707-.707z"></path>
    </svg>
  );
}

function FolderOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139zM1.19 5l.637 7a1 1 0 0 0 .996.91h10.348a1 1 0 0 0 .995-.91l.637-7a1 1 0 0 0-.995-1.09H2.19a1 1 0 0 0-.995 1.09z"></path>
    </svg>
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"></path>
    </svg>
  );
}
