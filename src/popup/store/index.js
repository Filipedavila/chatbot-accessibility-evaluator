import { createStore } from 'vuex';

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'



export const defaultState = {
  summary: {},
  chatbotSummary: {},
  evaluated: { act: false, bp: false, css: false, html: false },
  filter: {},
  act: {},
  chatbotAct: {},
  html: {},
  chatbotHtml: {},
  bp: {},
  chatbotBp: {},
  currentRule: {},
  highlightActive:false,
  resultFilter: { passed: false, failed: false, warning: false, inapplicable: false },
  evaluateChatbot: false
}


export default new createStore({
  state: {
    summary: {},
    chatbotSummary: {},
    evaluated: { act: false, bp: false, css: false, html: false },
    filter: {},
    act: {},
    chatbotAct: {},
    html: {},
    chatbotHtml: {},
    bp: {},
    chatbotBp: {},
    currentRule: {},
    highlightActive:false,
    resultFilter: { passed: false, failed: false, warning: false, inapplicable: false },
    evaluateChatbot: false

  },
  getters,
  mutations,
  actions
})
