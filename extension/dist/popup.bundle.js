(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const o=document.getElementById("myButton");o?o.addEventListener("click",(()=>{chrome.tabs.query({active:!0,currentWindow:!0},(o=>{o[0]?chrome.tabs.sendMessage(o[0].id,{action:"typeMessages",messages:e},(e=>{chrome.runtime.lastError?console.error("Error sending message:",chrome.runtime.lastError.message):console.log(null==e?void 0:e.status)})):console.error("No active tab found.")}))})):console.error("Button not found.")}));const e=["Hello, I am a disabled user. \nI would like to use your services but I am having trouble navigating your website. \nCan you please assist me with a short helpful paragraph?","Thank you for your help. What can I use you for?"]})();