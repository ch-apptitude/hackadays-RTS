'use strict';

angular.module('rtsHackdaysApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {

    /*$scope.months = [
     { date:     new Date(2015, 0),
     keywords: [
     {
     name:       "ISIS",
     category:   "Monde",
     order:      0,
     tweet:
     {
     "coordinates": null,
     "favorited": false,
     "truncated": false,
     "created_at": "Wed Aug 29 17:12:58 +0000 2012",
     "id_str": "240859602684612608",
     "entities": {
     "urls": [
     {
     "expanded_url": "https://dev.twitter.com/blog/twitter-certified-products",
     "url": "https://t.co/MjJ8xAnT",
     "indices": [
     52,
     73
     ],
     "display_url": "dev.twitter.com/blog/twitter-c\u2026"
     }
     ],
     "hashtags": [

     ],
     "user_mentions": [

     ]
     },
     "in_reply_to_user_id_str": null,
     "contributors": null,
     "text": "Introducing the Twitter Certified Products Program: https://t.co/MjJ8xAnT",
     "retweet_count": 121,
     "in_reply_to_status_id_str": null,
     "id": 240859602684612608,
     "geo": null,
     "retweeted": false,
     "possibly_sensitive": false,
     "in_reply_to_user_id": null,
     "place": null,
     "user": {
     "profile_sidebar_fill_color": "DDEEF6",
     "profile_sidebar_border_color": "C0DEED",
     "profile_background_tile": false,
     "name": "Twitter API",
     "profile_image_url": "http://a0.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png",
     "created_at": "Wed May 23 06:01:13 +0000 2007",
     "location": "San Francisco, CA",
     "follow_request_sent": false,
     "profile_link_color": "0084B4",
     "is_translator": false,
     "id_str": "6253282",
     "entities": {
     "url": {
     "urls": [
     {
     "expanded_url": null,
     "url": "http://dev.twitter.com",
     "indices": [
     0,
     22
     ]
     }
     ]
     },
     "description": {
     "urls": [

     ]
     }
     },
     "default_profile": true,
     "contributors_enabled": true,
     "favourites_count": 24,
     "url": "http://dev.twitter.com",
     "profile_image_url_https": "https://si0.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png",
     "utc_offset": -28800,
     "id": 6253282,
     "profile_use_background_image": true,
     "listed_count": 10775,
     "profile_text_color": "333333",
     "lang": "en",
     "followers_count": 1212864,
     "protected": false,
     "notifications": null,
     "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme1/bg.png",
     "profile_background_color": "C0DEED",
     "verified": true,
     "geo_enabled": true,
     "time_zone": "Pacific Time (US & Canada)",
     "description": "The Real Twitter API. I tweet about API changes, service issues and happily answer questions about Twitter and our API. Don't get an answer? It's on my website.",
     "default_profile_image": false,
     "profile_background_image_url": "http://a0.twimg.com/images/themes/theme1/bg.png",
     "statuses_count": 3333,
     "friends_count": 31,
     "following": null,
     "show_all_inline_media": false,
     "screen_name": "twitterapi"
     },
     "in_reply_to_screen_name": null,
     "source": "<a href='//sites.google.com/site/yorufukurou/%5C%22'>YoruFukurou</a>",
     "in_reply_to_status_id": null
     },
     items: [
     {
     "id": 7270096,
     "title": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "intro": "<div class='intro'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "contentType": "infoSport",
     "url": "http:\/\/www.rts.ch\/info\/monde\/7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "json": "http:\/\/www.rts.ch\/a\/7270096.html?f=json\/article&v=1.1",
     "articleType": "infoSport",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:24:39Z",
     "publication": "2015-11-20T03:24:39Z",
     "modification": "2015-11-20T05:54:53Z",
     "teaserTitle": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "teaserBody": "<div class='teaserBody'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "isMinByMin": false,
     "body": "<div class='body'><p>Selon eux, elles favorisent aussi la progression de groupes extr\u00e9mistes, comme l'organisation Etat islamique. Quatre pilotes de l'US Air Force qui ont command\u00e9 \u00e0 distance cette arme de pr\u00e9dilection de l'arm\u00e9e am\u00e9ricaine en Afghanistan, en Irak ou au Y\u00e9men ont \u00e9crit au pr\u00e9sident Barack Obama. <\/p><p>Ils lui demandent de r\u00e9\u00e9valuer sa politique en la mati\u00e8re, estimant que la mort de civils pousse les survivants et leurs proches dans les bras des mouvements radicaux.<\/p><h3>Vengeance induite<\/h3><p>&quot;Vous faites souffrir ces gens et ils veulent se venger&quot;, a r\u00e9sum\u00e9 l'un d'eux, pilote du programme de Predator de l'US Air Force entre 2007 et 2011.<\/p><p>Les anciens pilotes disent que les missiles tir\u00e9s par leurs drones ont tu\u00e9 de nombreux civils, sans qu'ils en aient eu l'intention, ce qui ne peut d'apr\u00e8s eux qu'alimenter les sentiments antioccidentaux.<\/p><p>Les partisans des drones assurent au contraire que les frappes contre l'EI en Syrie et en Irak sont extr\u00eamement pr\u00e9cises et permettent d'\u00e9viter les risques du combat au sol.<\/p><p>agences\/br<\/p><\/div>",
     "inBriefTitle": "",
     "inBriefBody": "",
     "keyFactsTitle": "",
     "keyFactsBody": "",
     "box3Title": "",
     "box3Body": "",
     "box4Title": "",
     "box4Body": "",
     "source": "ece-auto-gen",
     "sourceId": "ef4417b2-e16a-424b-b361-5c0db67aaee0",
     "relativeUrl": "7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "shortenUrl": "http:\/\/www.rts.ch\/g\/UVHc",
     "threadStatus": "",
     "related-content": {
     "mainMediaAttachment": [
     {
     "id": 7270094,
     "title": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "contentType": "image",
     "url": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=1024&h=578",
     "json": "http:\/\/www.rts.ch\/a\/7270094.html?f=json\/article&v=1.1",
     "articleType": "image",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:22:11Z",
     "publication": "2015-11-20T03:23:43Z",
     "modification": "2015-11-20T03:23:43Z",
     "legend": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "photographer": "Yahya Arhab",
     "credit": "",
     "homesection": "Keystone",
     "description": "epa04463091 A gunman loyal to the Shiite Houthi movement looks at graffiti protesting US drone operations a day after a US drone killed suspected al-Qaeda in the Arabian Penninsula (AQAP) militants, Sana\u2019a, Yemen, 25 October 2014. Reports state 24 October a US drone strike killed at least ten suspected AQAP militants near the scene of fighting between AQAP and Shiite Houthi fighters in the central Yemeni city of Rada\u2019a, which is part of an onoing campaign by the US which has launched at least 92 drone strikes on suspected AQAP militants in Yemen between 2002 and mid-2013, killing hundreds of suspected militants and dozens of civilians. EPA\/YAHYA ARHAB",
     "created": "2015-11-20T03:23:43Z",
     "modified": "2015-11-20T03:23:43Z",
     "thumbnail": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=125&h=70",
     "copyright": "Yahya Arhab - Keystone"
     }
     ],
     "articleMediaAttachment": [

     ],
     "archiveMediaAttachment": [

     ],
     "externalLinksAttachment": [

     ],
     "cummonSurPlusAttachment": [

     ],
     "tsrSurPlusAttachment": [

     ],
     "totAudios": 0,
     "totVideos": 0,
     "totPhotos": 1
     },
     "sections": {
     "homeSection": "tsr.ch_info_monde",
     "others": [
     "tsr.ch_info",
     "tsr.ch_info_toute-info",
     "rsr.ch_info_les-titres_monde"
     ]
     }
     },
     {
     "id": 7270470,
     "json": "http:\/\/www.rts.ch\/a\/7270470.html?f=json\/article&v=1.1",
     "title": "Bains chauds de Beaujolais Nouveau au Japon",
     "intro": "Les Japonais amateurs de vins fran\u00e7ais ont c\u00e9l\u00e9br\u00e9 l'arriv\u00e9e du nouveau mill\u00e9sime et ont aussi rendu hommage aux victimes des attentats de Paris en observant une minute de silence.",
     "contentType": "video",
     "url": "http:\/\/www.rts.ch\/video\/info\/journal-continu\/7270470-bains-chauds-de-beaujolais-nouveau-au-japon.html",
     "articleType": "video",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/09\/18\/7270472.image",
     "creation": "2015-11-20T08:18:00Z",
     "publication": "2015-11-20T08:18:02Z",
     "modification": "2015-11-20T11:21:28Z",
     "program": "Le Journal en continu",
     "channel": "RTS.ch",
     "duration": "0:34",
     "video": "standard",
     "cutin": 0,
     "cutout": 34.96,
     "cut": false,
     "plays": 35,
     "geoloc": "ww",
     "lmgId": 7270469,
     "isPlayable": true,
     "details": {
     "preview_image_url": "http:\/\/www.rts.ch\/2015\/11\/20\/09\/18\/7270472.image?w=480&h=270",
     "streams": {
     "hds": "http:\/\/rtsww-f.akamaihd.net\/z\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,1201,k.mp4.csmil\/manifest.f4m",
     "tv": "http:\/\/rtsww-d.rts.ch.edgesuite.net\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-1201k.mp4",
     "hds_sd": "http:\/\/rtsww-f.akamaihd.net\/z\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,k.mp4.csmil\/manifest.f4m",
     "download": "http:\/\/download-video.rts.ch\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-1201k.mp4",
     "hls_sd": "http:\/\/stream-i.rts.ch\/i\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,k.mp4.csmil\/master.m3u8",
     "hls": "http:\/\/stream-i.rts.ch\/i\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,1201,k.mp4.csmil\/master.m3u8"
     },
     }
     },
     {
     "id": 7270096,
     "title": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "intro": "<div class='intro'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "contentType": "infoSport",
     "url": "http:\/\/www.rts.ch\/info\/monde\/7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "json": "http:\/\/www.rts.ch\/a\/7270096.html?f=json\/article&v=1.1",
     "articleType": "infoSport",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:24:39Z",
     "publication": "2015-11-20T03:24:39Z",
     "modification": "2015-11-20T05:54:53Z",
     "teaserTitle": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "teaserBody": "<div class='teaserBody'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "isMinByMin": false,
     "body": "<div class='body'><p>Selon eux, elles favorisent aussi la progression de groupes extr\u00e9mistes, comme l'organisation Etat islamique. Quatre pilotes de l'US Air Force qui ont command\u00e9 \u00e0 distance cette arme de pr\u00e9dilection de l'arm\u00e9e am\u00e9ricaine en Afghanistan, en Irak ou au Y\u00e9men ont \u00e9crit au pr\u00e9sident Barack Obama. <\/p><p>Ils lui demandent de r\u00e9\u00e9valuer sa politique en la mati\u00e8re, estimant que la mort de civils pousse les survivants et leurs proches dans les bras des mouvements radicaux.<\/p><h3>Vengeance induite<\/h3><p>&quot;Vous faites souffrir ces gens et ils veulent se venger&quot;, a r\u00e9sum\u00e9 l'un d'eux, pilote du programme de Predator de l'US Air Force entre 2007 et 2011.<\/p><p>Les anciens pilotes disent que les missiles tir\u00e9s par leurs drones ont tu\u00e9 de nombreux civils, sans qu'ils en aient eu l'intention, ce qui ne peut d'apr\u00e8s eux qu'alimenter les sentiments antioccidentaux.<\/p><p>Les partisans des drones assurent au contraire que les frappes contre l'EI en Syrie et en Irak sont extr\u00eamement pr\u00e9cises et permettent d'\u00e9viter les risques du combat au sol.<\/p><p>agences\/br<\/p><\/div>",
     "inBriefTitle": "",
     "inBriefBody": "",
     "keyFactsTitle": "",
     "keyFactsBody": "",
     "box3Title": "",
     "box3Body": "",
     "box4Title": "",
     "box4Body": "",
     "source": "ece-auto-gen",
     "sourceId": "ef4417b2-e16a-424b-b361-5c0db67aaee0",
     "relativeUrl": "7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "shortenUrl": "http:\/\/www.rts.ch\/g\/UVHc",
     "threadStatus": "",
     "related-content": {
     "mainMediaAttachment": [
     {
     "id": 7270094,
     "title": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "contentType": "image",
     "url": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=1024&h=578",
     "json": "http:\/\/www.rts.ch\/a\/7270094.html?f=json\/article&v=1.1",
     "articleType": "image",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:22:11Z",
     "publication": "2015-11-20T03:23:43Z",
     "modification": "2015-11-20T03:23:43Z",
     "legend": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "photographer": "Yahya Arhab",
     "credit": "",
     "homesection": "Keystone",
     "description": "epa04463091 A gunman loyal to the Shiite Houthi movement looks at graffiti protesting US drone operations a day after a US drone killed suspected al-Qaeda in the Arabian Penninsula (AQAP) militants, Sana\u2019a, Yemen, 25 October 2014. Reports state 24 October a US drone strike killed at least ten suspected AQAP militants near the scene of fighting between AQAP and Shiite Houthi fighters in the central Yemeni city of Rada\u2019a, which is part of an onoing campaign by the US which has launched at least 92 drone strikes on suspected AQAP militants in Yemen between 2002 and mid-2013, killing hundreds of suspected militants and dozens of civilians. EPA\/YAHYA ARHAB",
     "created": "2015-11-20T03:23:43Z",
     "modified": "2015-11-20T03:23:43Z",
     "thumbnail": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=125&h=70",
     "copyright": "Yahya Arhab - Keystone"
     }
     ],
     "articleMediaAttachment": [

     ],
     "archiveMediaAttachment": [

     ],
     "externalLinksAttachment": [

     ],
     "cummonSurPlusAttachment": [

     ],
     "tsrSurPlusAttachment": [

     ],
     "totAudios": 0,
     "totVideos": 0,
     "totPhotos": 1
     },
     "sections": {
     "homeSection": "tsr.ch_info_monde",
     "others": [
     "tsr.ch_info",
     "tsr.ch_info_toute-info",
     "rsr.ch_info_les-titres_monde"
     ]
     }
     },
     {
     "id": 7270096,
     "title": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "intro": "<div class='intro'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "contentType": "infoSport",
     "url": "http:\/\/www.rts.ch\/info\/monde\/7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "json": "http:\/\/www.rts.ch\/a\/7270096.html?f=json\/article&v=1.1",
     "articleType": "infoSport",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:24:39Z",
     "publication": "2015-11-20T03:24:39Z",
     "modification": "2015-11-20T05:54:53Z",
     "teaserTitle": "Les frappes de drones am\u00e9ricains accus\u00e9es de provoquer les islamistes",
     "teaserBody": "<div class='teaserBody'>Les frappes des drones am\u00e9ricains au Proche-Orient attisent la haine envers l'Occident, a mis en garde jeudi un groupe d'anciens pilotes am\u00e9ricains.<\/div>",
     "isMinByMin": false,
     "body": "<div class='body'><p>Selon eux, elles favorisent aussi la progression de groupes extr\u00e9mistes, comme l'organisation Etat islamique. Quatre pilotes de l'US Air Force qui ont command\u00e9 \u00e0 distance cette arme de pr\u00e9dilection de l'arm\u00e9e am\u00e9ricaine en Afghanistan, en Irak ou au Y\u00e9men ont \u00e9crit au pr\u00e9sident Barack Obama. <\/p><p>Ils lui demandent de r\u00e9\u00e9valuer sa politique en la mati\u00e8re, estimant que la mort de civils pousse les survivants et leurs proches dans les bras des mouvements radicaux.<\/p><h3>Vengeance induite<\/h3><p>&quot;Vous faites souffrir ces gens et ils veulent se venger&quot;, a r\u00e9sum\u00e9 l'un d'eux, pilote du programme de Predator de l'US Air Force entre 2007 et 2011.<\/p><p>Les anciens pilotes disent que les missiles tir\u00e9s par leurs drones ont tu\u00e9 de nombreux civils, sans qu'ils en aient eu l'intention, ce qui ne peut d'apr\u00e8s eux qu'alimenter les sentiments antioccidentaux.<\/p><p>Les partisans des drones assurent au contraire que les frappes contre l'EI en Syrie et en Irak sont extr\u00eamement pr\u00e9cises et permettent d'\u00e9viter les risques du combat au sol.<\/p><p>agences\/br<\/p><\/div>",
     "inBriefTitle": "",
     "inBriefBody": "",
     "keyFactsTitle": "",
     "keyFactsBody": "",
     "box3Title": "",
     "box3Body": "",
     "box4Title": "",
     "box4Body": "",
     "source": "ece-auto-gen",
     "sourceId": "ef4417b2-e16a-424b-b361-5c0db67aaee0",
     "relativeUrl": "7270096-les-frappes-de-drones-americains-accusees-de-provoquer-les-islamistes.html",
     "shortenUrl": "http:\/\/www.rts.ch\/g\/UVHc",
     "threadStatus": "",
     "related-content": {
     "mainMediaAttachment": [
     {
     "id": 7270094,
     "title": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "contentType": "image",
     "url": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=1024&h=578",
     "json": "http:\/\/www.rts.ch\/a\/7270094.html?f=json\/article&v=1.1",
     "articleType": "image",
     "img": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image",
     "creation": "2015-11-20T03:22:11Z",
     "publication": "2015-11-20T03:23:43Z",
     "modification": "2015-11-20T03:23:43Z",
     "legend": "Pourquoi avez-vous tu\u00e9 ma famille, peut-on lire sous le dessin d'un drone am\u00e9ricain.",
     "photographer": "Yahya Arhab",
     "credit": "",
     "homesection": "Keystone",
     "description": "epa04463091 A gunman loyal to the Shiite Houthi movement looks at graffiti protesting US drone operations a day after a US drone killed suspected al-Qaeda in the Arabian Penninsula (AQAP) militants, Sana\u2019a, Yemen, 25 October 2014. Reports state 24 October a US drone strike killed at least ten suspected AQAP militants near the scene of fighting between AQAP and Shiite Houthi fighters in the central Yemeni city of Rada\u2019a, which is part of an onoing campaign by the US which has launched at least 92 drone strikes on suspected AQAP militants in Yemen between 2002 and mid-2013, killing hundreds of suspected militants and dozens of civilians. EPA\/YAHYA ARHAB",
     "created": "2015-11-20T03:23:43Z",
     "modified": "2015-11-20T03:23:43Z",
     "thumbnail": "http:\/\/www.rts.ch\/2015\/11\/20\/04\/23\/7270094.image?w=125&h=70",
     "copyright": "Yahya Arhab - Keystone"
     }
     ],
     "articleMediaAttachment": [

     ],
     "archiveMediaAttachment": [

     ],
     "externalLinksAttachment": [

     ],
     "cummonSurPlusAttachment": [

     ],
     "tsrSurPlusAttachment": [

     ],
     "totAudios": 0,
     "totVideos": 0,
     "totPhotos": 1
     },
     "sections": {
     "homeSection": "tsr.ch_info_monde",
     "others": [
     "tsr.ch_info",
     "tsr.ch_info_toute-info",
     "rsr.ch_info_les-titres_monde"
     ]
     }
     },
     ]
     }
     ]
     },
     {date: new Date(2015, 1)},
     {date: new Date(2015, 2)},
     {date: new Date(2015, 3)},
     {date: new Date(2015, 4)},
     {date: new Date(2015, 5)},
     {date: new Date(2015, 6)},
     {date: new Date(2015, 7)},
     {date: new Date(2015, 8)},
     {date: new Date(2015, 9)},
     {date: new Date(2015, 10)},
     {date: new Date(2015, 11)},
     ];       */

    //TODO merge
    $scope.recommendedTweets = [
      {
        "date": "2015-09-30T22:00:00.000Z",
        "keywords": [
          {
            "name": "User",
            "category": "User",
            "items": [
              {
                "title": "@bower http://t.co/L",
                "intro": "<div class='intro'>@bower http://t.co/LglPb8eXNt</div>",
                "contentType": "programming",
                "creation": "2015-10-15T19:00:18.000Z",
                "publication": "2015-10-15T19:00:18.000Z",
                "modification": "2015-10-15T19:00:18.000Z",
                "img": "http://pbs.twimg.com/media/CRYUsp6UAAAq9Mt.jpg"
              }
            ]
          }
        ]
      },
      {
        "date": "2015-10-31T23:00:00.000Z",
        "keywords": [
          {
            "name": "PHP",
            "category": "User",
            "items": [
              {
                "title": "XHProf.io: A Web GUI",
                "intro": "<div class='intro'>XHProf.io: A Web GUI To Analyze The Profiling Data Collected Using XHProf  http://t.co/VuwZxa8ZnR #PHP #Neat http://t.co/VNT8GcGvRj</div>",
                "contentType": "programming",
                "creation": "2013-11-29T13:46:09.000Z",
                "publication": "2013-11-29T13:46:09.000Z",
                "modification": "2013-11-29T13:46:09.000Z",
                "img": "http://pbs.twimg.com/media/BaPjwTPIEAEABEr.png",
                "url": "http://xhprof.io/"
              }
            ]
          }
        ]
      }
    ];

    $http.get('http://hackdays.ngrok.com/api/rtsCuratedObjects/datas')
      .then(function (response) {
        $scope.months = transformData(response.data);
      })


    function transformData(datas) {


      // Iterate over everything to prepare our data set
      _.forEach(datas, function (month, k) {

        // faker
        if (k > 0) {
          if (!month.keywords) {
            month.keywords = [];
          }
          month.keywords.push(datas[0].keywords[0]);
        }


        _.forEach(month.keywords, function (keyword, j) {

          _.forEach(keyword.items, function (item, i) {

            // Set collapsed by defaut
            item.isCollapsed = true;

            // Transform to JS date
            item.publication = moment(item.publication).toDate();

            // Store the first Item
            if (i == 0) {
              keyword.mainArticle = item;
            }

            // Prepare streams for Video Player src
            if (item.details && item.details.streams) {
              item.details.streams._src = [
                {src: item.details.streams.tv, type: 'video/mp4'}
              ];
            }
          });
        });
      });

      return datas;
    }
  });
