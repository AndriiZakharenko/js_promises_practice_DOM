document.addEventListener("DOMContentLoaded",function(){new Promise(function(e,n){document.body.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}).then(function(e){document.body.insertAdjacentHTML("beforebegin",'<div data-qa="notification" class="success">'.concat(e,"</div>"))}).catch(function(e){document.body.insertAdjacentHTML("beforebegin",'<div data-qa="notification" class="error">'.concat(e.message,"</div>"))}),new Promise(function(e){document.body.addEventListener("click",function(){e("Second promise was resolved")}),document.body.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}).then(function(e){document.body.insertAdjacentHTML("beforebegin",'<div data-qa="notification" class="success">'.concat(e,"</div>"))}),new Promise(function(e){var n=!1,t=!1,o=function(){n&&t&&e("Third promise was resolved")};document.body.addEventListener("click",function(){n=!0,o()}),document.body.addEventListener("contextmenu",function(e){e.preventDefault(),t=!0,o()})}).then(function(e){document.body.insertAdjacentHTML("beforebegin",'<div data-qa="notification" class="success">'.concat(e,"</div>"))})});
//# sourceMappingURL=index.4f439d24.js.map