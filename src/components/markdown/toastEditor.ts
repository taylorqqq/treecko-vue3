import Editor from "@toast-ui/editor";
import { uploadImage } from "@/api/upload";

export default class {
  // toastEditor: toastui.Editor; //cdn
  toastEditor: Editor;
  isFullScreen: boolean = false;
  constructor(el: string, initialValue: string, public height: string) {
    // this.toastEditor = new toastui.Editor({ //cdn
    this.toastEditor = new Editor({
      el: document.querySelector(el) as HTMLElement,
      initialEditType: "markdown",
      previewStyle: "vertical",
      height,
      initialValue,
      toolbarItems: this.toolbarItems() as [],
    });

    this.ImageHook();
  }

  private ImageHook() {
    this.toastEditor.removeHook("addImageBlobHook");
    this.toastEditor.addHook(
      "addImageBlobHook",
      (blob: Blob, callback: any) => {
        const formData = new FormData();
        // formData.append("image", blob, blob.name);
        formData.append("file", blob, blob.name);
        uploadImage(formData).then((res) => {
          callback(res.data.url, "alt text");
        });
      }
    );
  }

  private toolbarItems() {
    return [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"],
      // Using Option: Customize the last button
      [
        {
          el: this.fullScreen(),
          command: "fullScreen",
          tooltip: "全屏",
        },
      ],
    ];
  }

  private fullScreen() {
    let button = document.createElement("button");
    let i = document.createElement("i");
    i.className = "fas fa-maximize icon-fullScreen";
    i.style.fontSize = "16px";
    button.appendChild(i);
    button.style.margin = "0";
    button.addEventListener("click", () => {
      this.toggleFullScreen();
    });

    document.documentElement.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && this.isFullScreen === true) {
        this.toggleFullScreen();
      }
    });
    return button;
  }

  private toggleFullScreen() {
    const editor = document.querySelector(
      ".toastui-editor-defaultUI"
    ) as HTMLDivElement;
    editor.classList.toggle("fullScreen");

    // 判断是否全屏 contains() 方法用于判断一个字符串是否包含在另一个字符串中，如果是返回 true，否则返回 false。
    this.isFullScreen = editor.classList.contains("fullScreen");
    this.toastEditor.setHeight(this.isFullScreen ? "100vh" : this.height);
    if (!this.isFullScreen) {
      this.toastEditor.focus();
    }

    // 全屏图标切换
    const iconfullScreen = document.querySelector(
      ".icon-fullScreen"
    ) as HTMLElement;
    iconfullScreen.classList.toggle("fa-minimize");
    // iconfullScreen.classList.toggle("fa-maximize"); //触发fullScreen()方法时，会默认加上fa-maximize 这里不必二次添加
  }
}
