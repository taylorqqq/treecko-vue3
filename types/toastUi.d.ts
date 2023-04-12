declare namespace toastui {
  interface EditorOptions {
    el: HTMLElement;
    initialEditType: string;
    previewStyle: string;
    height: string;
    initialValue: string;
  }

  class Editor {
    constructor(options: EditorOptions);

    on: (eventName: string, callback: (type: string) => void) => void;

    getMarkdown: () => string; // 等价于 getMarkdown(): string;
    setMarkdown: (markdown: string) => void;

    getHTML: () => string;
    setHTML: (html: string) => void;
  }
}