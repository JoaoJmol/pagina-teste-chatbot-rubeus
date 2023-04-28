  function initFreshChat() {
    window.fcWidget.init({
    token: "221eb7c3-872b-4f1e-ab2e-7df635958da1",
	  host: "https://rubeus.freshchat.com",
	  widgetUuid: "50cab10c-86bd-4e8a-8e7f-f2f09a742fc3",
    storageMethod: {type: "cache"}
    });

    // Copy the below lines under window.fcWidget.init inside initFreshChat function in the above snippet
    // To set user name
    window.fcWidget.user.setFirstName("João Marcos");

    // To set user email
    window.fcWidget.user.setEmail("joaomarcos@rubeus.com.br");

    // To set user properties
    window.fcWidget.user.setProperties({
        plan: "Pro",                 // meta property 1
        status: "Active"                // meta property 2
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?
  initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
  e.src="https://rubeus.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
  function initiateCall(){initialize(document,"Freshchat-js-sdk")}
  window.addEventListener?window.addEventListener("load",initiateCall,!1):
  window.attachEvent("load",initiateCall,!1);