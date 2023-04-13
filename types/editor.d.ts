declare namespace toastui {
  interface EditorOptions {
    el: HTMLElement;
    initialEditType: string;
    previewStyle: string;
    height: string;
    initialValue: string;
    toolbarItems?: any[];
  }

  class Editor {
    constructor(options: EditorOptions);

    on: (eventName: string, callback: (type: string) => void) => void;
    focus: () => void;

    getMarkdown: () => string; // 等价于 getMarkdown(): string;
    setMarkdown: (markdown: string) => void;

    getHTML: () => string;
    setHTML: (html: string) => void;

    getHeight: () => string;
    setHeight: (heights: string) => void;

    removeHook: (type: string) => void;
    addHook: (type: string, handle: Function) => void;
  }
}

declare class wangEditor {
  constructor(el: string);
  create(): void;
  config: { [key: string]: any };
  txt: {
    html: (html: string) => void;
    text: (text: string) => void;
  };
}
