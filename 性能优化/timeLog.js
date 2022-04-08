1. DNS解析耗时: domainLookupEnd - domainLookupStart
2. TCP连接耗时: connectEnd - connectStart
3. SSL安全连接耗时: connectEnd - secureConnectionStart
4. 网络请求耗时(TTFB): responseStart - requestStart
5. 数据传输耗时: responseEnd - responseStart
6. DOM解析耗时: domInteractive - responseEnd
7. 资源加载耗时: loadEventStart - domContentLoadedEventEnd
8. 首包时间: responseStart - domainLookupStart
9. 首次渲染时间 / 白屏时间: responseEnd - fetchStart
10. 首次可交互时间: domInteractive - fetchStart
11. DOM Ready时间: domContentLoadEventEnd - fetchStart
12. 页面完全加载时间: loadEventStart - fetchStart

function timeLog(){
  console.log('1.DNS解析耗时--->', window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart);
  console.log('2.TCP连接耗时--->', window.performance.timing.connectEnd - window.performance.timing.connectStart);
  console.log('3.SSL安全连接耗时--->', window.performance.timing.connectEnd - window.performance.timing.secureConnectionStart);
  console.log('4.网络请求耗时--->', window.performance.timing.responseStart - window.performance.timing.requestStart);
  console.log('5.数据传输耗时--->', window.performance.timing.responseEnd - window.performance.timing.responseStart);
  console.log('6.DOM解析耗时--->', window.performance.timing.domInteractive - window.performance.timing.responseEnd);
  console.log('7.资源加载耗时--->', window.performance.timing.loadEventStart - window.performance.timing.domContentLoadedEventEnd);
  console.log('8.首包时间--->', window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart);
  console.log('9.首次渲染时间--->', window.performance.timing.responseEnd - window.performance.timing.fetchStart);
  console.log('10.首次可交互时间--->', window.performance.timing.domInteractive - window.performance.timing.fetchStart);
  console.log('11.DOM Ready时间--->', window.performance.timing.domContentLoadEventEnd - window.performance.timing.fetchStart);
  console.log('12.页面完全加载时间--->', window.performance.timing.loadEventStart - window.performance.timing.fetchStart);
}