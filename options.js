/** 
* Restores select box and checkbox state using the preferences
* stored in chrome.storage
*/
function restore_options() {
  chrome.storage.sync.get({
     popupMessage:'data breaches',
     domainName:''
    }, function(items) {
    document.getElementById('popup_message').value = items.popupMessage;
    document.getElementById('domain_name').value = items.domainName;
  });
}
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
    save_options);
  ;
/* 
* Saves options to chrome.storage 
*/
function save_options() {
  var popupmessage = document.getElementById('popup_message').value;
  var domainname = document.getElementById('domain_name').value;
  chrome.storage.sync.set({
    popupMessage: popupmessage,
    domainName: domainname
  }, function() {
  close();
  });
  
}
           