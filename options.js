/** 
* Restores select box and checkbox state using the preferences
* stored in chrome.storage
*/
function restore_options() {
  chrome.storage.sync.get({
    popupMessage:'data breaches',
    domainName:''
  }, function(items) {
    document.getElementById('popupMessageField').value = items.popupMessage;
    document.getElementById('domainNameField').value = items.domainName;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

/**
 * Saves options to chrome.storage
 */
function save_options() {
  var popupMsg = document.getElementById('popupMessageField').value;
  var domainN = document.getElementById('domainNameField').value;
  chrome.storage.sync.set({
    popupMessage: popupMsg,
    domainName: domainN
  }, function() {
    close();
  });
}
           