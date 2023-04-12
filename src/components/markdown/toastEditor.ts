export default class {
  toastEditor: toastui.Editor;
  constructor(el: string, initialValue: string, public height: string) {
    this.toastEditor = new toastui.Editor({
      el: document.querySelector(el) as HTMLElement,
      initialEditType: "markdown",
      previewStyle: "vertical",
      height,
      initialValue,
    });
  }
}
