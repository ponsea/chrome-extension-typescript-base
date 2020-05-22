// @ts-ignore
import helloScript from 'raw-loader!../content-scripts/hello';

chrome.runtime.onInstalled.addListener(event => {
  console.log("Extension Installed!");
  chrome.tabs.onCreated.addListener(tab => {
    chrome.tabs.executeScript(tab.id!, {code: helloScript});
  });
});
