function initHotjar(){!function(e,t,n,o,r,a){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:171201,hjsv:5},r=t.getElementsByTagName("head")[0],a=t.createElement("script"),a.async=1,a.src=n+e._hjSettings.hjid+o+e._hjSettings.hjsv,r.appendChild(a)}(window,document,"//static.hotjar.com/c/hotjar-",".js?sv=")}!function(){function e(){var e=document.querySelector(".js-chrome-extension");if(e){var t=window.chrome;t||UTIL.removeClass(e,"tool-overview__item--large")}}UTIL.ready(e)}(),function(){function e(){dropdown=document.querySelector(".js-click-dropdown"),dropdown&&new t(dropdown)}function t(e){function t(){r?o():n()}function n(){UTIL.addClass(e,"click-dropdown--open"),r=!0,window.setTimeout(function(){document.addEventListener("click",o)},0)}function o(){UTIL.removeClass(e,"click-dropdown--open"),r=!1,document.removeEventListener("click",o)}var r=!1;e.addEventListener("click",t)}UTIL.ready(e)}();var DownloadOverlay=function(){function e(){t();var e=document.querySelector(".photo-modal__overlay"),n=document.querySelector(".photo-modal__close");UTIL.removeClass(e,"photo-modal__overlay--hidden"),n.addEventListener("click",function(){UTIL.addClass(e,"photo-modal__overlay--hidden")})}function t(){!function(e){var t=e.getElementsByTagName("SCRIPT")[0],n=e.createElement("SCRIPT");n.type="text/javascript",n.async=!0,n.src="//assets.pinterest.com/js/pinit.js",t.parentNode.insertBefore(n,t)}(document)}return{open:e}}();Download=function(){function e(){var e=document.querySelectorAll(".js-download");e&&Array.prototype.forEach.call(e,function(e){e.addEventListener("click",t)})}function t(){n("click",this.getAttribute("data-id")),DownloadOverlay.open()}function n(e,t){ga("send","event",{eventCategory:"download",eventAction:e,eventLabel:t});var n="/photo/td/";o(n,"photo_id="+t),FacebookPixel.track("Download")}function o(e,t){var n=new XMLHttpRequest;n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.send(t)}return UTIL.ready(e),{track:n}}(),function(){function e(){var e=document.getElementsByClassName("js-download-size-btn")[0];null!=e&&(dropdown=document.querySelector(e.getAttribute("href")),c=document.getElementsByClassName("custom-size__width")[0],c&&(u=document.getElementsByClassName("custom-size__height")[0],l=document.getElementById("custom-size__value"),a(),u.addEventListener("input",o),c.addEventListener("input",r),Array.prototype.forEach.call(document.getElementsByClassName("select-list__item"),function(e){e.addEventListener("click",t)}),document.getElementsByClassName("custom-size__submit")[0].addEventListener("click",n)))}function t(){this.querySelector('input[type="radio"]').checked=!0,Array.prototype.forEach.call(document.getElementsByClassName("select-list__item"),function(e){UTIL.removeClass(e,"select-list--active")}),UTIL.addClass(this,"select-list--active")}function n(e){var t,n,o,r;if(l.checked){if(!("function"!=typeof c.checkValidity||c.checkValidity()&&u.checkValidity()))return;t=c.value,n=u.value,i(t,n),o=t+"x"+n}else{r=document.querySelector('input[name="download-size"]:checked');var a=r.value.split("x");t=a[0],n=a[1],o=r.getAttribute("data-name")}if(e.preventDefault(),r&&null!==r.getAttribute("data-alt-url")&&"download"in document.createElement("a")&&navigator.userAgent.search("Firefox")===-1){var s=document.createElement("a");s.setAttribute("href",r.getAttribute("data-alt-url")),s.setAttribute("download",""),s.click()}else{var d=this.getAttribute("data-url")+"?dl&fit=crop&w="+t+"&h="+n;window.location.href=d}Download.track(o,this.getAttribute("data-id")),DownloadOverlay.open()}function o(){var e=u.value,t=Math.round(e*u.getAttribute("data-aspect-ratio"));c.placeholder=t}function r(){var e=c.value,t=Math.round(e*c.getAttribute("data-aspect-ratio"));u.placeholder=t}function a(){var e=JSON.parse(localStorage.getItem("customDownloadSize"));e&&(e.height||e.width)&&(u.value=e.height,c.value=e.width,o(),r())}function i(e,t){var n={width:e,height:t};localStorage.setItem("customDownloadSize",JSON.stringify(n))}var c,u,l;UTIL.ready(e)}(),function(){function e(){var e=document.getElementsByClassName("js-dropdown");e.length&&Array.prototype.forEach.call(e,function(e){new t(e)})}function t(e){function t(e){a||e.preventDefault(),clearTimeout(r),n(),UTIL.addClass(c,"open")}function o(){clearTimeout(r),r=window.setTimeout(function(){UTIL.removeClass(c,"open")},400)}var r,a="true"==e.getAttribute("data-is-clickable"),i=e.getAttribute("data-dropdown-selector")||e.getAttribute("href"),c=document.querySelector(i);e.addEventListener("mouseenter",t),e.addEventListener("click",t),c.addEventListener("mousemove",t),c.addEventListener("mouseleave",o),e.addEventListener("mouseleave",o)}function n(){var e=document.querySelectorAll(".btn__dropdown.open");Array.prototype.forEach.call(e,o)}function o(e){UTIL.removeClass(e,"open")}UTIL.ready(e)}();var FacebookPixel=function(){function e(){!function(e,t,n,o,r,a,i){e.fbq||(r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._fbq||(e._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],a=t.createElement(n),a.async=!0,a.src=o,i=t.getElementsByTagName(n)[0],i.parentNode.insertBefore(a,i))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","158995177864833"),fbq("track","PageView")}function t(e){fbq("trackCustom",e)}function n(){var e=document.querySelectorAll(".js-sponsored-photos-links");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",o)})}function o(){t("ShutterstockClick")}return UTIL.ready(e),{track:t,addSponsoredPhotosEventListener:n}}();!function(){function e(){var e=document.querySelectorAll("[data-action]");Array.prototype.forEach.call(e,function(e){e.setAttribute("action",e.getAttribute("data-action"))})}UTIL.ready(e)}(),UTIL.ready(initHotjar);var LikeStore=function(){function e(){document.addEventListener("new-photos",t),t()}function t(){if(UTIL.isSignedIn())for(var e=o(),t=0;t<e.length;t++){var n=document.querySelector(".js-like-"+e[t]);n&&(UTIL.addClass(n,c),UTIL.addClass(n,u))}}function n(e,t){var n=o();if("like"==e)n.indexOf(t)==-1&&n.push(t);else if("unlike"==e){var r=n.indexOf(t);n.splice(r,1)}localStorage.likes=JSON.stringify(n)}function o(){var e=localStorage.likes,t=new Date(localStorage.likes_expire_at);return!e||t<new Date?(r(),[]):JSON.parse(e)}function r(){UTIL.getRequest("/likes/",a,i);var e=new Date;e.setHours(e.getHours()+2),localStorage.likes_expire_at=e}function a(e){JSON.parse(e).not_signedin?Logout.logout():(localStorage.likes=e,t())}function i(){}var c="btn-like--active",u="btn-like--no-animations";return UTIL.ready(e),{handleLike:n}}(),SignUpModal=function(){function e(){if(!i){var e=document.querySelector(".modal"),a=e.getAttribute("data-sign-up-path");UTIL.getRequest(a,t,n)}UTIL.addClass(document.body,"modal--open"),document.addEventListener("keydown",o),document.addEventListener("click",r)}function t(e){document.querySelector(".modal__content").innerHTML=e,i=!0}function n(){}function o(e){27==e.keyCode&&a()}function r(e){for(var t=e.target;"body"!=t.tagName.toLowerCase();){if(UTIL.hasClass(t,"modal__content"))return;t=t.parentNode}a()}function a(){document.removeEventListener("keydown",o),document.removeEventListener("click",r),UTIL.removeClass(document.body,"modal--open")}var i=!1;return{open:e}}();!function(){function e(){document.addEventListener("new-photos",t),t()}function t(){var e=document.querySelectorAll(".js-like");Array.prototype.forEach.call(e,function(e){e.getAttribute("data-initialized")||(e.setAttribute("data-initialized","true"),e.addEventListener("click",n))})}function n(e){if(e.stopPropagation(),!UTIL.isSignedIn())return a("not-signedin",u),void SignUpModal.open();for(var t=e.target;"button"!=t.tagName.toLowerCase();)t=t.parentNode;var n,u=t.getAttribute("data-photo-id");UTIL.hasClass(t,i)?(n="/photo/PHOTO_ID/unlike/",UTIL.removeClass(t,c),UTIL.removeClass(t,i),a("unlike",u)):(n="/photo/PHOTO_ID/like/",UTIL.addClass(t,i),a("like",u)),UTIL.getRequest(n.replace("PHOTO_ID",u),o,r)}function o(e){e=JSON.parse(e),e.not_signedin?(SignUpModal.open(),Logout.logout()):LikeStore.handleLike(e.action,e.photo_id)}function r(){alert("Error: Please reload the page and try to like the photo again. If it still doesn't work please contact: info@pexels.com")}function a(e,t){ga("send","event",{eventCategory:"like",eventAction:e,eventLabel:t})}var i="btn-like--active",c="btn-like--no-animations";UTIL.ready(e)}(),function(){function e(){n=document.querySelector(".navbar--hero"),n&&(t(),window.addEventListener("scroll",t))}function t(){document.documentElement.scrollTop>100||document.body.scrollTop>100?UTIL.removeClass(n,"navbar--hero"):UTIL.addClass(n,"navbar--hero")}var n;UTIL.ready(e)}(),function(){function e(){o=document.querySelector(".navbar__toggle--search"),r=document.querySelector(".navbar__toggle--menu"),a=document.querySelector(".navbar-overlay"),null!==r&&r.addEventListener("click",t),null!==a&&a.addEventListener("click",t),null!==o&&o.addEventListener("click",n)}function t(){document.querySelector(".navbar__md-nav--menu").classList.toggle("navbar__md-nav--open"),document.querySelector(".navbar").classList.toggle("navbar--open"),document.querySelector("body").classList.toggle("navbar-open"),r.classList.toggle("navbar__toggle--active")}function n(){var e=document.querySelector(".navbar__md-nav--search").classList;e.contains("navbar__md-nav--open")?(e.remove("navbar__md-nav--open"),o.classList.remove("navbar__toggle--active")):(e.add("navbar__md-nav--open"),o.classList.add("navbar__toggle--active"),document.querySelector(".navbar__md-nav--search input").focus())}var o,r,a;UTIL.ready(e)}(),function(){function e(){var e=document.querySelector(".js-paypal-btn");e&&e.addEventListener("click",t)}function t(){var e=document.querySelector(".js-paypal-form");e.submit()}UTIL.ready(e)}(),function(){function e(){var e=document.querySelector(".js-32bit-warning");e&&"Win32"===navigator.platform&&navigator.userAgent.indexOf("WOW64")===-1&&navigator.userAgent.indexOf("Win64")===-1&&navigator.userAgent.indexOf(" x64")===-1&&"x64"!==navigator.cpuClass&&UTIL.removeClass(e,"hidden")}UTIL.ready(e)}(),function(){function e(){n=document.getElementById("user_subscribed_newsletter"),n&&UTIL.getRequest("/me/newsletter-subscription-status/",t)}function t(e){if(isSubscribed="true"==e,isSubscribed){var t=document.getElementById("user_subscribed_newsletter_before");t.value=!0,n.checked=!0,localStorage.setItem("newsletterSubscribed","true")}}var n;e()}(),function(){function e(){var e=1e13*(Math.random()+""),t=document.createElement("iframe");t.style.display="none",t.width=1,t.height=1,t.frameBorder=0,t.src="https://5546719.fls.doubleclick.net/activityi;src=5546719;type=affil0;cat=affil0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num="+e+"?",document.body.appendChild(t);var n=document.createElement("script");document.body.appendChild(n),n.onload=function(){window.google_trackConversion({google_conversion_id:863253203,google_custom_params:window.google_tag_params,google_remarketing_only:!0})},n.src="https://www.googleadservices.com/pagead/conversion_async.js"}UTIL.ready(e)}(),function(){function init(){var el=document.querySelector(".js-similar-photos");if(el){var url=el.getAttribute("data-url");url=url.replace("WIDTH",el.offsetWidth);var request=UTIL.scriptRequest(url);request.onload=function(){request.status>=200&&request.status<400&&eval(request.responseText)},request.send()}}UTIL.ready(init)}(),function(){function e(){t(),n(),o(),r()}function t(){window.twttr=function(e,t,n){var o,r,a=e.getElementsByTagName(t)[0];if(!e.getElementById(n))return r=e.createElement(t),r.id=n,r.src="https://platform.twitter.com/widgets.js",a.parentNode.insertBefore(r,a),window.twttr||(o={_e:[],ready:function(e){o._e.push(e)}})}(document,"script","twitter-wjs")}function n(){!function(e,t,n){var o,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.async=1,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=248395878694096",r.parentNode.insertBefore(o,r))}(document,"script","facebook-jssdk")}function o(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/platform.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}function r(){var e=document.querySelector(".js-weibo");if(e){var t=navigator.language||navigator.userLanguage;t=t.toLowerCase(),"zh-cn"!=t&&"zh-tw"!=t&&"zh-hk"!=t&&"zh"!=t||UTIL.removeClass(e,"hidden")}}e()}(),function(){function e(){r=document.querySelector(".switch-locale");for(var e=document.querySelectorAll(".js-show-switch-locale"),n=0;n<e.length;n++)e[n].addEventListener("click",function(e){e.preventDefault(),t(!0)});var o=(navigator.language||navigator.userLanguage).split("-")[0],a=document.documentElement.getAttribute("lang");if(o!=a){var i=new Date(localStorage.getItem("hide_switch_locale_until"));r&&(!i||i<new Date)&&t(!1)}}function t(e){UTIL.addClass(r,"switch-locale--is-visible"),e?(UTIL.removeClass(r,"switch-locale--bottom-bar"),UTIL.addClass(r,"switch-locale--modal")):(UTIL.removeClass(r,"switch-locale--modal"),UTIL.addClass(r,"switch-locale--bottom-bar")),a||(n(),a=!0)}function n(){var e=document.querySelectorAll(".js-switch-locale-btn");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(){o(e)})})}function o(e){var t=e.getAttribute("data-close");t&&UTIL.removeClass(r,"switch-locale--is-visible");var n=new Date;n.setDate(n.getDate()+90),localStorage.setItem("hide_switch_locale_until",n)}var r,a=!1;UTIL.ready(e)}(),function(){function init(){var container=document.querySelector(".js-trending-photos");if(container){var url=container.getAttribute("data-url");url+="?days="+getDays()+"&popular_heading="+shouldShowPopularHeading();var request=UTIL.scriptRequest(url);request.onload=function(){request.status>=200&&request.status<400&&eval(request.responseText)},request.send(),localStorage.last_visit_home=new Date}}function getDays(){var e,t=localStorage.last_visit_home;return!t||(e=daysSince(new Date(t)))>20?30:e>10?14:e>3?7:3}function daysSince(e){var t=Math.floor((new Date-e)/1e3);return Math.floor(t/86400)}function shouldShowPopularHeading(){var e=localStorage.last_visit_home;if(!e)return!0;var t=daysSince(new Date(e));return t<1}UTIL.ready(init)}();var TagEditor=function(){function e(){var e=document.createElement("script");e.src="/assets/tag-editor-f913e24cde5c19ae928a13b619e2dfe01c1488113ec907fb47fa347ae42fa421.js",document.body.appendChild(e)}return{load:e}}(),AddPhotoTags=function(){function e(){a=document.querySelector(".js-add-tags-link"),a&&a.addEventListener("click",t)}function t(e){e.preventDefault(),n(),TagEditor.load(),o()}function n(){i=document.querySelector(".js-add-tags-form"),UTIL.addClass(a,"hidden"),UTIL.removeClass(i,"hidden")}function o(){i.addEventListener("submit",r)}function r(e){e.preventDefault();var t=document.querySelector(".js-add-tags-success");UTIL.addClass(i,"hidden"),UTIL.removeClass(t,"hidden");var n=$(this).attr("action");$.ajax({type:"POST",url:n,data:$(i).serialize()})}return{init:e};var a,i}();!function(){function e(){u=document.querySelector(".avatar-form"),l=document.querySelector(".js-avatar-input"),s=document.querySelector(".avatar-form__img"),d=document.querySelector(".avatar-form__progress-bar"),f=document.querySelector(".avatar-form__btn"),null!==l&&null!==u&&(f.addEventListener("click",t),s.addEventListener("click",t),l.addEventListener("change",function(){file=l.files[0],n()}))}function t(e){e.preventDefault(),l.click()}function n(){m=!1,u.classList.add("avatar-form--uploading"),window.onbeforeunload=function(){if(!m)return i18n.avatar_not_published};var e=new FileReader;e.onload=function(e){s.setAttribute("src",e.target.result)},e.readAsDataURL(file),o()}function o(){var e=function(e){var e=JSON.parse(e);r(e.fields,e.upload_url)},t=function(e){e=JSON.parse(e)||{},alert(e.error||i18n.no_upload_url)};UTIL.getRequest("/users/avatar_upload_url/?file_type="+file.type,e,t)}function r(e,t){var n=new XMLHttpRequest;n.upload.addEventListener("progress",a),n.open("POST",t),n.setRequestHeader("X-CSRF-Token",UTIL.getCsrfToken()),n.onload=function(){n.status>=200&&n.status<400&&c()},n.onerror=function(){alert(i18n.upload_error)};var o=new FormData;for(key in e)o.append(key,e[key]);o.append("file",file),n.send(o)}function a(e){if(e.lengthComputable){var t=e.loaded/e.total*30;d.style.width=t+"%"}}function i(){var e=parseFloat(d.style.width),t=e+(99-e)/50;d.style.width=t+"%",t<98.9&&m===!1&&setTimeout(i,100)}function c(){var e=function(e){m=!0,u.classList.remove("avatar-form--uploading"),e=JSON.parse(e),s.setAttribute("src",e.avatar_url)},t=function(){alert(i18n.try_again)};UTIL.getRequest("/users/avatar_upload_success/",e,t),i()}var u,l,s,d,f,m=!1;UTIL.ready(e)}();var ConfirmDialog=function(){function e(){var e=document.querySelector("[data-confirm]");e&&e.addEventListener("click",t)}function t(e){var t=window.confirm(e.target.getAttribute("data-confirm"));t||e.preventDefault()}return UTIL.ready(e),{init:e}}(),GeoAutocompleteForm=function(){function e(){r=document.querySelector(".js-show-geo-autocomplete"),r.addEventListener("click",function(e){e.preventDefault(),UTIL.addClass(r,"hidden"),t()})}function t(){var e=document.documentElement.lang,t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ0gSv0MjwjHtRwrcoeNowjNdm3N-AWDU&signed_in=true&libraries=places&callback=GeoAutocompleteForm.isLoaded&language="+e,document.body.appendChild(t)}function n(){autocompleteInput=document.querySelector(".js-geo-autocomplete"),a=new GeoAutocomplete(r,autocompleteInput,!0);var e=document.querySelector(".js-add-location-form");UTIL.removeClass(e,"hidden"),e.addEventListener("submit",o)}function o(){document.querySelector(".js-geo-autocomplete-place-id").value=a.getPlaceId(),document.querySelector(".js-geo-autocomplete-longitude").value=a.getLongitude(),document.querySelector(".js-geo-autocomplete-latitude").value=a.getLatitude()}var r,a;return{init:e,isLoaded:n}}(),GeoAutocomplete=function(e,t,n){function o(){return n?void r():void e.addEventListener("click",function(t){t.preventDefault(),UTIL.addClass(e,"hidden"),r()})}function r(){UTIL.removeClass(t,"hidden");var e=new google.maps.places.Autocomplete(t);e.addListener("place_changed",function(){var t=e.getPlace();c=t.place_id,a=t.geometry.location.lat(),i=t.geometry.location.lng()})}var a,i,c;return o(),{getLatitude:function(){return a},getLongitude:function(){return i},getPlaceId:function(){return c}}};!function(){function init(){var el=document.querySelector(".js-insert-details");if(el){var path=el.getAttribute("data-details-path");if(performance.navigation.type!==performance.navigation.TYPE_RELOAD&&performance.navigation.type!==performance.navigation.TYPE_BACK_FORWARD){var ref_query=getSearchQueryFromReferrer();null!==ref_query&&(path+="?ref_query="+ref_query)}var request=UTIL.scriptRequest(path);request.onload=function(){eval(request.responseText),ConfirmDialog.init()},request.send()}}function getSearchQueryFromReferrer(){var e=document.referrer;if(!e)return null;for(var t=0;t<SEARCH_PATHS.length;++t){var n=SEARCH_PATHS[t],o=e.indexOf(n);if(o>0){var r=o+n.length,a=e.indexOf("/",r);return a<0&&(a=e.indexOf("?",r),a<0&&(a=e.length)),e.substring(r,a)}}return null}var SEARCH_PATHS=["/search/","/de/suche/"];UTIL.ready(init)}();var Logout=function(){function e(){var e=document.querySelector(".js-logout-btn");e&&e.addEventListener("click",t)}function t(){localStorage.removeItem("likes"),localStorage.removeItem("likes_expire_at"),n("avatar_url")}function n(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"}return UTIL.ready(e),{logout:t}}(),PhotoUpload=function(e,t){function n(){d=document.querySelector(".js-photo-upload-list"),Promise.all([o(),a()]).then(function(e){return i(e[1])}).then(function(){return u()}).then(function(){T=!0,l(b),t()})["catch"](s)}function o(){return new Promise(function(n,o){var a=document.createElement("div");a.innerHTML=document.getElementById("js-photo-upload-item").innerHTML,g=a.firstElementChild,g.querySelector("img").setAttribute("alt",e.name),d.appendChild(g),UTIL.triggerEvent("init-tag-editor");var i=g.querySelector(".js-show-geo-autocomplete"),c=g.querySelector(".js-geo-autocomplete");w=new GeoAutocomplete(i,c),h=g.querySelector(".upload-item__progress-bar"),y=g.querySelector(".upload-item__progress-text"),L=y.getAttribute("data-uploading"),_=y.getAttribute("data-error"),b=y.getAttribute("data-success"),abortBtn=g.querySelector(".upload-item__abort"),abortBtn.addEventListener("click",function(){S=!0,t(),r(g)});var u=new FileReader;u.onload=function(t){var r=g.querySelector(".upload-item__preview");r.onload=function(){m=this.naturalWidth,v=this.naturalHeight,p=e.size,m*v<2e6?o(i18n.min_resolution):n()},r.setAttribute("src",t.target.result)},u.readAsDataURL(e)})}function r(e){var t=e.offsetHeight,n=t/15;e.style.overflow="hidden";var o=function(){e.style.height=(t-=n)+"px",t>0?setTimeout(o,20):e.style.display="none"};o()}function a(){return new Promise(function(t,n){var o=function(e){var e=JSON.parse(e);f=e.photo_id,t(e)},r=function(e){e=JSON.parse(e)||{},n(e.error||i18n.no_upload_url)},a="/upload/upload_url/?file_type="+e.type+"&"+Math.floor(1e5*Math.random());UTIL.getRequest(a,o,r)})}function i(t){return new Promise(function(n,o){var r=t.fields,a=t.upload_url,i=new XMLHttpRequest;i.upload.addEventListener("progress",c),i.open("POST",a),i.setRequestHeader("X-CSRF-Token",UTIL.getCsrfToken()),i.onload=function(){i.status>=200&&i.status<400&&n()},i.onerror=function(){o(i18n.upload_error)};var u=new FormData;for(key in r)u.append(key,r[key]);u.append("file",e),i.send(u)})}function c(e){if(e.lengthComputable){var t=e.loaded/e.total*100;h.style.width=t+"%";var n=L.replace("{{percent}}",Math.round(t)+"%");l(n)}}function u(){return new Promise(function(e,t){var n=function(){t(i18n.try_again)},o="?id="+f+"&width="+m+"&height="+v+"&filesize="+p;UTIL.getRequest("/upload/success/"+o,e,n)})}function l(e){y.innerHTML=e}function s(e){S=!0,l(e||_),t(),UTIL.addClass(g,"upload-item--error")}var d,f,m,v,p,g,h,y,L,_,b,w,S=!1,T=!1;return n(),{isSuccessful:function(){return T},isAborted:function(){return S},getPhotoId:function(){return f},getPhotoTags:function(){return g.querySelector(".js-tag-editor").value},getPhotoLatitude:function(){return w.getLatitude()},getPhotoLongitude:function(){return w.getLongitude()},getPhotoPlaceId:function(){return w.getPlaceId()}}};!function(){function e(){if(u=document.querySelector(".js-file-input"),l=document.querySelector(".dragover-overlay"),s=document.querySelector(".js-submit-btn"),d=document.querySelector(".js-submit-btn-tooltip"),f=document.querySelector(".js-submit-form"),m=document.querySelector(".js-submit-photos"),null!==u&&null!==l&&null!==s&&null!==f){if(!t())return void alert("Houston, we have a problem. Please use a modern browser to upload photos.");if("undefined"==typeof Promise){var e=document.createElement("script");e.src="/assets/es6-promise-d755000f7ad9267d13dc8060213c5565b58405d955473cfbfd3c14b3f206dbda.js",document.body.appendChild(e)}TagEditor.load(),u.addEventListener("change",function(){a(u.files)}),document.addEventListener("dragover",n),document.addEventListener("dragleave",n),document.addEventListener("drop",r),f.addEventListener("submit",c)}}function t(){var e=new XMLHttpRequest;return!!(e&&"upload"in e&&"onprogress"in e.upload&&window.FileList)}function n(e){return e.stopPropagation(),e.preventDefault(),o(e)?(e.dataTransfer.dropEffect="copy",void("dragover"==e.type?l.style.display="block":e.target==l&&(l.style.display="none"))):void(e.dataTransfer.dropEffect="none")}function o(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"==e.dataTransfer.types[t])return!0;return!1}function r(e){n(e),a(e.target.files||e.dataTransfer.files)}function a(e){if(0!=e.length){d.removeAttribute("data-tooltip-disabled"),s.setAttribute("disabled","disabled"),window.onbeforeunload=function(){if(!v)return i18n.photos_not_published};for(var t=0;t<e.length;t++){var n=new PhotoUpload(e[t],i);p.push(n)}}}function i(){for(var e=0;e<p.length;e++)if(!p[e].isSuccessful()&&!p[e].isAborted())return;d.setAttribute("data-tooltip-disabled","disabled"),s.removeAttribute("disabled")}function c(){v=!0;for(var e=[],t=0;t<p.length;t++)p[t].isSuccessful()&&!p[t].isAborted()&&e.push({id:p[t].getPhotoId(),tags:p[t].getPhotoTags(),latitude:p[t].getPhotoLatitude(),longitude:p[t].getPhotoLongitude(),google_place_id:p[t].getPhotoPlaceId()});m.value=JSON.stringify(e)}var u,l,s,d,f,m,v=!1,p=[];UTIL.ready(e)}();