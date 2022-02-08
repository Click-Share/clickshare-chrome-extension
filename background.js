let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// //ADDED LISTENERS HERE- Michael
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log({ request })
// });

// chrome.runtime.onConnect.addListener(port => {
//   console.log('connected ', port);

//   if (port.name === 'hi') {
//     port.onMessage.addListener(this.processMessage);
//   }
// });

// chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
//   if (sender.url == blocklistedWebsite)
//   return;  // don't allow this web page access
//   console.log("Received message from " + sender + ": ", request);
//   sendResponse({ received: true }); //respond however you like
// });