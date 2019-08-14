/**
 * Restores select box and checkbox state using the preferences
 * stored in chrome.storage
 */
function restoreOptions() {
  chrome.storage.sync.get({
    popupMessage:'',
    domainName:''
  }, function(items) {
    document.getElementById('popupMessageField').value = items.popupMessage;
    document.getElementById('domainNameField').value = items.domainName;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

/**
 * Saves options to chrome.storage
 */
function saveOptions() {
  var popupMsg = document.getElementById('popupMessageField').value;
  var domainN = document.getElementById('domainNameField').value;
  chrome.storage.sync.set({
    popupMessage: popupMsg,
    domainName: domainN
  }, function() {
    close();
  });
}
           