import Vue from 'vue';
import router from './router';
import App from './App.vue';
import { messages } from '../utils/messagesToSend';
import store from './store';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

document.addEventListener('DOMContentLoaded', () => {
  const chatButton = document.getElementById('chatButton');
  if (chatButton) {
    chatButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
          chrome.tabs.sendMessage(activeTab.id!, { action: 'typeMessages', messages }, (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
              console.log(response?.status);
            }
          });
        }
      });
    });
  }

  const identifyButton = document.getElementById('identifyButton');
  if (identifyButton) {
    identifyButton.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.tabs.sendMessage(activeTab.id, {action: "startSelection"});
          window.close();
        }
      });
    });
  }


  const identifyMicButton = document.getElementById('identifyMicButton');
  if (identifyMicButton) {
    identifyMicButton.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.tabs.sendMessage(activeTab.id, {action: "startMicSelection"});
          window.close();
        }
      });
    });
  }

  const voiceInputButton = document.getElementById("voiceInputButton");
  if (voiceInputButton) {
    voiceInputButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab?.id) {
          chrome.tabs.sendMessage(activeTab.id!, { action: 'startVoiceInput', messages }, (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
              console.log(response?.status);
            }

          
        });
    }
      });

      // setTimeout(() => {
      //   const audio = new Audio("../audio/chatbotClip1.mp3");
      //   audio.play();
      // }, 1500);

    });
  }

  const evaluateButton = document.getElementById('evaluateButton');
  const evaluatingDiv = document.getElementById('evaluating');

  if (evaluateButton && evaluatingDiv) {
    evaluateButton.addEventListener('click', () => {
      evaluatingDiv.style.display = 'block';

      const actRulesCheckbox = document.getElementById('actRulesCheckbox') as HTMLInputElement;
      const wcagTechniquesCheckbox = document.getElementById('wcagTechniquesCheckbox') as HTMLInputElement;
      const bestPracticesCheckbox = document.getElementById('bestPracticesCheckbox') as HTMLInputElement;

      const actRules = actRulesCheckbox?.checked ?? false;
      const wcagTechniques = wcagTechniquesCheckbox?.checked ?? false;
      const bestPractices = bestPracticesCheckbox?.checked ?? false;
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.tabs.sendMessage(activeTab.id, {
            action: "evaluate",
            actRules: actRules,
            wcagTechniques: wcagTechniques,
            bestPractices: bestPractices
          });
        }
      });
    });
  }
});