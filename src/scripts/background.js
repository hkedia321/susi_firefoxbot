
var askSusi = chrome.contextMenus.create({
	"title": "Ask SUSI - \"%s\"",
	"contexts":["selection"],
	id:"askSusi"
});

// perform action on clicking a context menu
chrome.contextMenus.onClicked.addListener(function(info,tab){
	var menuId = info.menuItemId;
	var query = info.selectionText;
	if(menuId==="askSusi"){
		chrome.storage.local.set({
			"askSusiQuery":query
		});
		chrome.tabs.create({url:"../chatbot.html"});
	}

});
