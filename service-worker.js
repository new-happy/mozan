"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mozan/index.html","903630827dea79c9f25f0190ccfff3f6"],["/mozan/static/css/main.b7def339.css","860b552641c5f661f1a60088f871a389"],["/mozan/static/js/main.80f77199.js","00493baab6da5b6637125ff5bd4b989f"],["/mozan/static/media/bichu_07.9d26362c.jpg","9d26362c0c012d93026d89d02290a886"],["/mozan/static/media/bj_03.34bbcb9c.jpg","34bbcb9ca2e2cf7ccf1cea7c07d122ac"],["/mozan/static/media/clear1_06.770e7fcb.jpg","770e7fcb39ec5092eacc1da855c4046f"],["/mozan/static/media/clear2_06.b73e38c7.jpg","b73e38c74c4c88a1b13f45e7525d56f7"],["/mozan/static/media/clear3_06.70c7bdf7.jpg","70c7bdf7322c40e259e1530919df4dee"],["/mozan/static/media/clear4_06.1da1f6f5.jpg","1da1f6f5c0c7d11cd226f012a3cb9a26"],["/mozan/static/media/ditu_07.3bf4b732.jpg","3bf4b7324ba562e2dad301f0d7906b42"],["/mozan/static/media/gouwuchekong_03.4ee91f93.jpg","4ee91f93378ac86088661f442132e454"],["/mozan/static/media/iconfont.4480c0f4.svg","4480c0f4bc331bdc3508e50d1c794377"],["/mozan/static/media/iconfont.4dfb511c.eot","4dfb511c309008a065fb5154b88291b1"],["/mozan/static/media/iconfont.71dd3860.ttf","71dd386014d36bc7017a144cb53ea2e8"],["/mozan/static/media/iconfont.f11bda64.woff","f11bda640368dce826b0bd18bd34ad40"],["/mozan/static/media/top_03.225c9a4a.jpg","225c9a4afef9daf85a82a990d304e289"],["/mozan/static/media/tup10.8c38aa83.jpg","8c38aa83bd3067cd5f659f34aa8b8d1d"],["/mozan/static/media/tup9.464d9ce3.jpg","464d9ce310b1f5e676ee87bc435f61f2"],["/mozan/static/media/warp_18.77ea26a0.jpg","77ea26a0bb9211361dfbc6b35d1d5d74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/mozan/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});