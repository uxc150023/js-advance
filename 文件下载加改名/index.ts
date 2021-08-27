<a href="/images/img.jpg" download="6666"></a>;
// 普通文件下载
// 标签提供'download'属性用于执行文件名称

// 当文件url来自cnd连接，'download'就会失效，由此可见download属性只支持同源

// 非同源解决方案 url -> Blob
// XMLHttpRequest
// XMLHttpRequest（XHR）对象用于与服务器交互。
// 通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容
// window.URL.createObjectURL方法可以把一个blob转化为一个Blob URL，用做图片显示的链接

import Axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";

function getFile(
  url: string,
  headers: any = {},
): Promise<{ data: Blob; type: any }> {
  return Axios.get(url, {
    headers,
    responseType: "blob",
  }).then((res: AxiosResponse) => {
    return new Promise<{ data: Blob; type: any }>((resolve, reject) => {
      resolve({ data: res.data, type: res.headers["content-type"] });
    });
  });
}

/**
 * js获取网络文件
 * @param url 文件网络路径
 */
async function getFilesss(url: string): Promise<{ file: Blob; ext: string }> {
  try {
    const extMc = url.match(/\.(\w+)$/);
    const ext = extMc ? extMc[1] : "";
    if (ext === "pdf") {
      const win = window.open();
      if (win) {
        win.location.href = url;
        return Promise.reject();
      }
    }

    url = url.replace("http:", location.protocol);
    const res = await this.proxyHttp.getFile(url); // 基于Promise的HTTP库axios 分装getFile()
    // Blob {size: 15945, type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
    return { file: res.data, ext }; // Blob
  } catch (error) {
    // 查看文件
    if (error === "cancel") {
      const win = window.open();
      if (win) {
        win.location.href = url;
      }
    }
    return Promise.reject(error);
  }
}

/**
 * 自定义下载文件的文件名后下载
 * @param file 文件
 * @param fileName 文件名称
 */
function downloadFile(file: Blob, fileName: string) {
  const urlObject = window.URL;
  let saveLink: any = document.createElement("a");
  saveLink.href = urlObject.createObjectURL(file);
  saveLink.download = fileName;
  console.log(saveLink);
  fakeClick(saveLink);
  saveLink = null;
}

/**
 * 触发点击
 * @param ele DOM对象
 */
function fakeClick(obj: Element) {
  const ev = document.createEvent("MouseEvents");
  ev.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,
  );
  obj.dispatchEvent(ev);
}
