export default class {
  editor: wangEditor;
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el);
    this.editor.config.height = config.height;
    this.editor.config.uploadImgServer = config.uploadImageServer;
    this.editor.config.onchange = callback;
    this.editor.config.uploadImgHooks = this.ImageHook();
    this.editor.create();
    this.editor.txt.html(config.modelValue);
  }

  private ImageHook() {
    return {
      // 自定义插入图片
      customInsert(insertFn: any, res: any) {
        insertFn(res.data.url);
      },
    };
  }
}
