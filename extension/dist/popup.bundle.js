(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("myButton");e?e.addEventListener("click",(()=>{chrome.tabs.query({active:!0,currentWindow:!0},(e=>{e[0]?chrome.tabs.sendMessage(e[0].id,{action:"typeMessage",message:"Hello, I am a disabled user. \n      I would like to use your services but I am having trouble navigating your website. \n      Can you please assist me with a short helpful paragraph?"},(e=>{chrome.runtime.lastError?console.error("Error sending message:",chrome.runtime.lastError.message):console.log(null==e?void 0:e.status)})):console.error("No active tab found.")}))})):console.error("Button not found.")}))})();