"use strict";var precacheConfig=[["/berrieswebsite/index.html","bf313ada01b00691cff4badf60823ee0"],["/berrieswebsite/static/css/main.b740eaae.css","9d5b977cf5515c20cd66d5b81177adf4"],["/berrieswebsite/static/js/0.04b259dc.chunk.js","dc59f692988b3c97800bb40ef42ab258"],["/berrieswebsite/static/js/1.0d9115a0.chunk.js","7d627479f780105466cdc0a796693e69"],["/berrieswebsite/static/js/2.76be0f3d.chunk.js","107f59b92f53e2e667ae83ffdf7dc425"],["/berrieswebsite/static/js/3.748b465d.chunk.js","45254d3375fd953e877f940c6dc81306"],["/berrieswebsite/static/js/4.3f0fdad1.chunk.js","47fa6930855db9c24d2fdba272a44cd0"],["/berrieswebsite/static/js/main.70e90926.js","dc55a0c2cc0c12c1197fa3d22d694658"],["/berrieswebsite/static/media/ApotheekACmedium.89470423.png","89470423083e63d1d35e8f40b334dd97"],["/berrieswebsite/static/media/Apotheekvanwacht.cae7611c.png","cae7611c6bdff8ced04e4c8ae7c3df83"],["/berrieswebsite/static/media/LouisWidmerwebsite.132083be.png","132083be0c01dcd69b71b00b9b192e86"],["/berrieswebsite/static/media/Men.a7e4f979.jpg","a7e4f9795b14235bd44acb455061acf5"],["/berrieswebsite/static/media/Sanas.83656625.png","83656625ddac719ea4bf6e07aea7504d"],["/berrieswebsite/static/media/antirefluxbedje.a9060893.jpg","a9060893de623084d38d817fbbc95244"],["/berrieswebsite/static/media/apocrapslogo.ba281c8a.png","ba281c8a10f4ad088817575c7e56a24e"],["/berrieswebsite/static/media/griepcampagne.78585f60.jpg","78585f60e90ef499fcaf18f4f1a85587"],["/berrieswebsite/static/media/griepcampagne.ceaf9d25.webp","ceaf9d2513c8bb5d7f54741c0d2f8694"],["/berrieswebsite/static/media/hoofdingwebsite.37f1105f.png","37f1105f6f66aa719ad2f813fc1712a6"],["/berrieswebsite/static/media/huisbereidingen.6ae93624.jpg","6ae936241ea7b1ea86b599e2ce616bbb"],["/berrieswebsite/static/media/medicatieschema.88051d04.png","88051d04d234cd8c778ab8f511df9b15"],["/berrieswebsite/static/media/thuisgezondheidszorg.96525097.jpg","965250975add11c2998a352098b603a9"],["/berrieswebsite/static/media/transShowroom.819e16d7.jpg","819e16d7c4c9cbe295fc61af6f86dc76"],["/berrieswebsite/static/media/zon.5e10d6ae.jpg","5e10d6aef25eaa9c0c4c194bebc61417"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),s=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var s="/berrieswebsite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});