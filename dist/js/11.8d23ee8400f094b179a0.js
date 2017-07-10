webpackJsonp([11],{269:function(e,o){e.exports='<hr />\n<p>createTime : 2017/06/30\nauthor : 武宁\ntitle : 使用 JavaScript 库来降低构建渐进式 </p>\n<h2 id="subtitlejavascript">subtitle: 使用 JavaScript 库来降低构建渐进式 </h2>\n<p>两年前，我们团队在 Google 开始尝试使用 JavaScript 库来降低构建渐进式 Web应用模型的阻力。我们一开始使用像 sw-precache 和 sw-toolbox 一类的 <a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers" title="Service Worker">Service Worker</a> 工具，如今有数以千计的团队在移动站点的生产环境中使用这些工具来支持离线缓存和用户访问即时加载。</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*p-1klG8eb74q54meVe1mRA.png" alt="alt" /></p>\n<p>在2017年，如果你还没有利用Service Worker的优势，那么你将输在性能这场大战上。\n让我们来比较一下<a href="https://www.cnet.com/tech-today/">CNet’s Tech Today</a> 和 <a href="https://housing.com/">Housing.com</a>这两个PWA的前后时间轴。在3G网络环境中我们可以看到首屏加载平均时间提升了3-4秒，Service Worker缓存了他们APP的壳（App Shell）和数据来节约时间：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*ENxl8Sbl70CS3bHo-MoGXw.png" alt="alt" /></p>\n<p>哇！ 这几乎都是瞬间完成的 :)这种方式借助Service Worker使网站加载和可交互性变得更加的迅速。这效仿了原生APP的最令人满意的一个特点---一旦应用安装后，重新加载时的启动延迟被降低并且很稳定：</p>\n<blockquote>\n  <p>Service Worker是<a href="https://infrequently.org/2016/05/service-workers-and-pwas-its-about-reliable-performance-not-offline/">性能可靠的</a>。而不仅仅是“支持离线” --- Alex Russell, Chrome</p>\n</blockquote>\n<p>像推特这种大型网站，最近利用Service Worker<a href="https://twitter.com/necolas/status/829128165314306048?lang=en">将他们全部移动端流量导至PWA中</a>，App Shell 模型 和 PRPL 模式也显示出了相似的优势：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*yuhXsK8dh7RNS-oQylhhnQ.png" alt="alt" /></p>\n<p>这不是一个仅仅应用于移动端和PWA的优化。Service Worker 也可以提高桌面站点加载性能。\n比如，Flipkart缓存他们的静态文件所以在重复的访问首屏时内容加载比第一次快了1.5秒：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*S5_WIvU0pB9xVFjHjaeRZQ.png" alt="alt" /></p>\n<p>Flipkart.com在桌面中使用sw-precache缓存静态文件以减少多次重复加载的时间</p>\n<p>如<a href="https://medium.com/dev-channel/javascript-start-up-performance-69200f43b201#.hln1ehcre">JavaScript启动性能</a>一样，Service Worker还会选择在首次执行JavaScript时进行V8代码缓存，以便JS启动更快。\n当然 Service Worker 可以做的不仅仅只有缓存。\n我们还发布了一个用于<a href="https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-offline-google-analytics">Offline Google Analytics</a>基于Service Worker和IndexedDB的库。当用户处于离线状态或断网的时候，我们将以队列的形式组织他们的analytics，一旦恢复网络状态立刻发送请求。这个功能被像墨西哥的eBay Classifieds这样的网站使用，以最大限度地减少用户在使用过程中丢失有用的统计信息。\n<img src="https://cdn-images-1.medium.com/max/2000/1*cvZuuCxQQSO66-qhxIq66w.jpeg" alt="alt" /></p>\n<p>在Google I / O 2015网站上成功内测这个想法之后，我们发现它很有用，所以我们决定写一个文档来归纳它，方便任何人的使用。\n离线分析库的一个很好的例子就是Autotrack — 帮助人们更好的跟踪大多数人关心的事情。它还有很多插件，比如PWA/SPA URL改变的插件，元素可见插件，用户滚动插件，媒体查询插件，页面可视监听插件等等。这些插件可帮助像1Password这样的生产站点轻松跟踪重要的事件，而不需要使用模板：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*YtkbQKYxKpOBp1MneXj6Fg.jpeg" alt="alt" /></p>\n<p>接下来，我们开始研究 <a href="https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web">Web Push Notifications库</a>，但是在与Firebase合作寻求更好的解决方案时出现了一个机会，所以我们也帮助发布了<a href="https://firebase.google.com/docs/cloud-messaging/">Firebase Cloud Messaging</a>。这是一种跨平台的消息传递解决方案，可以发送基于消息或数据的通知，并且可以很好的结合PWA使用。</p>\n<p>阿里巴巴就是如今使用FCM的PWA产品之一：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*mfMuzbDtP82bzIiThlexjg.jpeg" alt="alt" /></p>\n<p>我们也参与了Mozilla的<a href="https://github.com/web-push-libs/web-push">web-push库</a>的开发，作为Web Push Notifications的替代品，它在这个领域也很有潜力。</p>\n<p>因为Service Worker成为我们很多库的核心部分，所以我们也需要一些公用组件去进行单元测试。我们创建了<a href="https://github.com/GoogleChrome/selenium-assistant">selenium-assistant</a>通过多浏览器使用Selenium来进行端对端的测试。我们也写了<a href="https://github.com/GoogleChrome/sw-testing-helpers">sw-testing-helpers</a>在测试中控制Service Worker。</p>\n<h2 id="javascript">开始使用Javascript的库</h2>\n<p>谷歌研发代码实验站的<a href="https://codelabs.developers.google.com/codelabs/sw-precache/index.html?index=..%2F..%2Findex#0"> sw-precache</a>,<a href="https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-codelabs/content/docs/lab_sw-precache_and_sw-toolbox.html">sw-toolbox</a>和<a href="https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-codelabs/content/docs/lab_integrating_analytics.html">offline-analytics</a>都是免费可用的。</p>\n<p><strong>Service Worker 脚手架</strong></p>\n<p><a href="https://github.com/GoogleChrome/sw-precache">sw-precache</a>(也能很好的结合<a href="https://www.npmjs.com/package/sw-precache-webpack-plugin">webpack</a>使用)会为你生成一个Service Worker。在最简单的情况下，你可以创建一个“dist”目录，它将为离线的静态文件提供默认缓存。因此当重复访问时他们将从<a href="https://developer.mozilla.org/en-US/docs/Web/API/Cache">缓存API</a>中立即加载：</p>\n<pre><code>$ sw-precache --root=dist\n</code></pre>\n<p>你可以通过使用Chrome开发者工具<a href="https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps">Application panel</a>验证文件已经被正确的缓存了。在加载页面后查找\'Cache Storage\'，可以看到相应的目录：</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*ri2Qp7j0B-lWrej5lCAkOg.png" alt="alt" /></p>\n<p>同时还支持使用<code>--config &lt;file&gt;</code>传递复杂的配置。任何文件中的配置都可以通过命令行标志覆盖。我们推荐使用一个额外的Javascript文件来定义使用module.exports的配置。比如，假设有这样一个path/to/sw-precache-config.js 文件包含以下配置：</p>\n<pre><code>module.exports = {\n  staticFileGlobs: [\n    \'app/css/**.css\',\n    \'app/**.html\',\n    \'app/images/**.*\',\n    \'app/js/**.js\'\n  ],\n  stripPrefix: \'app/\',\n  runtimeCaching: [{\n      urlPattern: /this\\\\.is\\\\.a\\\\.regex/,\n      handler: \'networkFirst\'\n  }]\n};\n</code></pre>\n<p>我们可以将文件传递到命令行界面，同时可以设置详细的配置项：</p>\n<pre><code>sw-precache --config=path/to/sw-precache-config.js --verbose\n</code></pre>\n<p>这实现了最大的灵活性，比如在<code>runtimeCaching.urlPattern</code>选项中提供正则表达式。在成功运行sw-precache时，它还将统计预加载静态文件的预估大小，以帮助你了解用户数据的使用情况：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*j6dtPpvJN9dWP_-O_lrnCA.png" alt="alt" /></p>\n<p>使用<a href="https://www.npmjs.com/package/sw-precache-webpack-plugin">Webpack 插件</a>用于预处理静态文件的经典配置大概如下所示：</p>\n<pre><code>const SWPrecacheWebpackPlugin = require(\'sw-precache-webpack-plugin\');\nmodule.exports = {\n  // ...\n  plugins: [\n    // ...\n    new SWPrecacheWebpackPlugin({\n      cacheId: \'my-cache\',\n      filename: \'service-worker.js\',\n      staticFileGlobs: [\n        \'./public/images/**/*.png,jpg,gif\',\n        \'./public/scripts/**/*.js\',\n        \'./public/styles/**/*.css\',\n        \'./public/partials/**/*.html\'\n      ],\n      stripPrefix: \'./public/\'\n      })\n  ]\n};\n</code></pre>\n<p><strong>将sw-precache整合到gulp构建系统中</strong></p>\n<p>要在gulp中使用sw-precache，我们首先要在gulp文件头部引入插件：</p>\n<pre><code>const swPrecache = require(\'sw-precache\');\n</code></pre>\n<p>然后创建一个gulp任务并在swPrecache中调用write函数，如下所示：</p>\n<pre><code>swPrecache.write(filePath, options, callback)\n</code></pre>\n<p>filePath 用来写入Service Worker所在位置。options定义生成Service Worker行为的对象（可以在<a href="https://github.com/GoogleChrome/sw-precache#options-parameter">Github文档</a>中查看全部的选项列表）。回调函数通常都会被执行。当一个异步操作完成时gulp通常监听到。如果发生错误，错误日志将会传递到回调函数中。如果没有错误，则传递null到回调函数。\n我们来看一个例子：</p>\n<pre><code>gulp.task(\'generate-service-worker\', function(callback) {\n  swPrecache.write(\'app/service-worker.js\'), {\n    //1\n    staticFileGlobs: [\n       \'app/index.html\',\n       \'app/js/bundle.js\',\n       \'app/css/bundle.css\',\n       \'app/img/**/*.svg,png,jpg,gif\'\n     ],\n    // 2\n    importScripts: [\n       \'app/node_modules/sw-toolbox/sw-toolbox.js\',\n       \'app/js/toolbox-script.js\'\n     ],\n    // 3\n    stripPrefix: \'app/\'\n  }, callback);\n});\n</code></pre>\n<p>我们执行gulp task来创建一个<code>generate-service-worker</code>任务，并传递一个回调给该函数使其实现异步。</p>\n<p>swPrecache.write 通过以下参数生成一个service worker：\n<li>staticFileGlobs中的资源是预缓存的，这意味着生成一个service worker将包含一个缓存资源的<code>install</code>事件处理器。\n<li>在<code>importScripts</code>中的脚本用来在<code>importScripts</code>方法中生成的Service Worker。在这个例子中，有sw-toolbox模块和一个包含路由的脚本。\n<li><code>app/</code>将从<code>staticFileGlob</code>中的所有文件路径中删除以便生成service worker 中的相对路径。</p>\n<p><strong>运行缓存</strong></p>\n<p><a href="https://github.com/GoogleChrome/sw-toolbox">sw-toolbox</a>是一个免费的库，可以拦截service worker中的网络请求并执行相应缓存策略。它可以用于路由，类似于fetch()事件的监听器，路由拦截网络请求匹配URL模式和HTTP请求方法，然后基于规则响应请求。</p>\n<p>sw-toolbox有大约5个内置的处理程序来覆盖<a href="https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/sw-toolbox_and_sw-precache.html#strategies">最常见的缓存策略</a>：</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*Fo6sCmH3J2fm-xT-8xUd6Q.png" alt="alt" /></p>\n<p>如果你很熟悉<code>Express</code>，sw-toolbox支持使用与其路由语法相似的URL语法模式。</p>\n<pre><code>toolbox.router.get(\'img/**/*.{png,jpg}\', global.toolbox.cacheFirst);\n</code></pre>\n<p>它会拦截img文件夹中任何PNG / JPG文件的GET请求，根据cacheFirst策略处理请求，首先检查缓存的响应。如果检查失败，请求将被发送到网络。如果网络请求成功，响应将被添加到缓存中。</p>\n<p>也可以在这里使用完整的域名，例如缓存Google字体：</p>\n<pre><code>toolbox.router.get(\'https://fonts.googleapis.com/\',\ntoolbox.cacheFirst);\n</code></pre>\n<p>我们还可以使用Express-style路由拦截GET请求到另一个域。我们只需要在选项中定义一个\'origin\'属性（一个字符串或RegExp）来匹配URL的full origin。</p>\n<pre><code>toolbox.router.get(\'/(.*)\', global.toolbox.cacheFirst, {\n  origin: /\\.googleapis\\.com$/\n});\n</code></pre>\n<p>也可以使用RegExp对象。这里，我们以“https://www.googleapis.com” 开头的POST请求的路由：</p>\n<pre><code>toolbox.router.post(/^https://www.googleapis.com\\//, global.toolbox.networkFirst);\n</code></pre>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*XdMqgQkQ5dmOYEx3_Cbwvw.png" alt="alt" />\n提示: 当检查Cache 缓存时，你可以区分sw-toolbox是缓存，因为它管理$$$ toolbox-cache $$命名空间。</p>\n<p><strong>更精准的控制</strong></p>\n<p>sw-toolbox也提供给我们可以更精准的控制缓存特性的接口。除了指定的设置外，我们还可以按如下方式自定义缓存：\n<li>我们可以定义一个名字（\'products\'）\n<li>我们可以定义文件入口项的最大数量为12（使用maxEntries参数）\n<li>我们可以设置一天的过期时间（24小时 = 86400秒）</p>\n<pre><code>toolbox.router.get(\'/(.*)\', global.toolbox.cacheFirst, {\n  cache: \n   name: \'products\',\n   maxEntries: 12,\n   maxAgeSeconds: 86400\n  },\n  origin: /.products.com$/\n});\n</code></pre>\n<p>你可以在我们的Progressive Web Apps Instructor Led培训资料中找到有关sw-precache＆sw-toolbox的<a href="https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/using-sw-precache-and-sw-toolbox.html">教程</a>。</p>\n<h4 id="offlinegoogleanalytics">Offline Google Analytics</h4>\n<p>像之前提到的，<a href="https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-offline-google-analytics">离线的 Google Analytics</a>可以在网络连接时再次发送用户分析请求。要添加这个到你的Service Worker仅需要两行代码：</p>\n<pre><code>// Import offline analytics into the SW global scope:\nimportScripts(\'path/to/offline-google-analytics-import.js\');\n// initialize it\ngoog.offlineGoogleAnalytics.initialize();\n</code></pre>\n<p>Boom!就是这个！\n还可以在重放请求中包含自定义参数的对象：</p>\n<pre><code>goog.offlineGoogleAnalytics.initialize({\n  parameterOverrides: {\n    cd1: \'Guacamole\',\n    cd2: \'So much cheese\'\n  }\n});\n</code></pre>\n<p>_\n注意: 传递参数覆盖对象的主要用例是检测何时被正常发送（对比Service Worker重放发送）_</p>\n<p><strong>Autotrack.js</strong></p>\n<p>设置Autotrack是比较直观的。除了在页面中包含analytics.js之外，还可以在Autotrack库中异步加载。接下来，更新你的默认监听代码来添加你需要的Autotrack插件：</p>\n<pre><code>&lt;script&gt;\nwindow.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\nga(\'create\', \'&lt;!-- your google_analytics_tracking_id --&gt;\', \'auto\');\n// Autotrack plugins available\nga(\'require\', \'urlChangeTracker\');\nga(\'require\', \'cleanUrlTracker\');    \nga(\'require\', \'eventTracker\');\nga(\'require\', \'maxScrollTracker\');\nga(\'require\', \'outboundLinkTracker\');  \nga(\'require\', \'pageVisibilityTracker\');    \n\nga(\'send\', \'pageview\');\n&lt;/script&gt;\n&lt;script async src=\'https://www.google-analytics.com/analytics.js\'&gt;&lt;/script&gt;\n&lt;script async src=\'/public/js/autotrack.js\'&gt;&lt;/script&gt;\n</code></pre>\n<p><em>注意: Autotrack.js的一些插件可以在没有指定配置（例如outboundLinkTracker）的情况下工作而其他的不会（例如clearUrlTracker）。一定要检查<a href="https://github.com/googleanalytics/autotrack#plugins">文档</a>，看看各种插件如何配置:)</em></p>\n<p><strong>Selenium Assistant</strong></p>\n<p>如上所述，<a href="https://googlechrome.github.io/selenium-assistant/">Selenium Assistant</a>帮助我们获取了我们机器上可用的浏览器列表，为它们安装一个Web驱动程序实例，然后运行一些测试用例。</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*cyN5qtBQ7ucEXPJTRvJYJQ.jpeg" alt="alt" />\n你可以为你想要测试的浏览器安装<a href="http://www.seleniumhq.org/projects/webdriver/">Web Driver</a>模块（npm 安装 chromedriver 等）然后可以遍历这些浏览器的列表，并根据需要进行控制。如果你需要测试没有安装在本地的浏览器，可以将Selenium Assistant和Sauce Labs结合使用。</p>\n<p><strong>Firebase Cloud Messaging</strong></p>\n<p>将<a href="https://firebase.google.com/docs/web/setup">Firebase 添加</a>到一个已有的项目后，还需要一些额外的步骤支持Web Push通知：</p>\n<p>1 .  添加FCM的 gcm<em>sender</em>id到你的web应用Manifest (manifest.json) 文件中:</p>\n<pre><code>"gcm_sender_id": "103953800507"\n</code></pre>\n<p>2  . 创建一个新的firebase-messaging-service-worker.js文件。 我们将Firebase Messaging库导入到此文件中来访问FCM：</p>\n<pre><code>importScripts(\'https://www.gstatic.com/firebasejs/3.6.10/firebase-app.js\')\nimportScripts(\'https://www.gstatic.com/firebasejs/3.6.10/firebase-messaging.js\')\n</code></pre>\n<p>然后在Service Worker中初始化Firebase应用程序。传递\nmessagingSenderId（保存在Firebase项目设置中的）到Firebase初始化函数中：</p>\n<pre><code>firebase.initializeApp({\n  \'messagingSenderId\': \'\\&lt;-- your sender ID goes here --\\&gt;\'\n});\n</code></pre>\n<p>接下来，生成Firebase Messaging的一个实例来处理后台消息：</p>\n<pre><code>const messaging = firebase.messaging();\n</code></pre>\n<p>并请求显示通知的权限。你也许想要等一个合适的时机来做这个功能而不是当页面启动的时候：</p>\n<pre><code>messaging.requestPermission()\n.then(function() {\n  console.log(\'Notification permissions granted.\');\n  // ...\n})\n.catch(function(err) {\n  console.log(\'Permission denied\', err);\n});\n</code></pre>\n<p>现在当用户从FCM接收到消息时，如果他们启用这个权限就会显示通知。</p>\n<h2 id="">接下来要做什么呢？</h2>\n<p>目前，我们正在开发Service Worker的<a href="https://github.com/googlechrome/sw-helpers">下一个</a>大版本库，扩展我们的探索，同时覆盖了<a href="https://developers.google.com/web/updates/2015/12/background-sync">后台同步</a>，基于服务工作者的HiDPI图像交换和对于PWA的智能分析。\n 我们期待分享更多实现这些功能的beta版本的库。</p>\n<p>我们还计划在<a href="https://medium.com/reloading"> Sustainable Loading</a>频道上发布一个关于Google.com生产环境的Service Worker的新帖。</p>\n<p>在此之前，我们希望证明我们的库是有用的，无论你是建立一个PWA还是只是为了提高网站的性能 :)</p>\n<p>感谢我们帅气的团队成员— Jeff Posnick, Matt Gaunt, Taylor Savage, Joe Medley, Prateek Bhatnagar, Lucas Mullens, Phil Walton, Alex Russell and former member Mat Scales 在我们小家庭中为开源库做出的贡献。</p>\n<p>参考资源：\n<li><a href="https://www.youtube.com/watch?v=jCKZDTtUA2A">Instant Loading with Service Workers</a>\n<li><a href="https://www.youtube.com/watch?v=BsCBCudx58g">Getting started with Firebase Cloud Messaging for Web</a>\n<li><a href="https://www.youtube.com/watch?v=Use459WBeWc">Great libraries and tools for great Progressive Web Apps</a>\n<li><a href="https://web-push-book.gauntface.com/">Web Push Notifications book</a>\n<li><a href="https://www.youtube.com/watch?v=cmGr0RszHc8">Instant Loading: Building offline-first PWAs</a>\n<li><a href="https://developers.google.com/web/updates/2016/07/offline-google-analytics">Offline Google Analytics</a>\n<li><a href="https://www.youtube.com/watch?v=_kJMjJ1tm6o">Offline-caching for your static site</a>\n<li><a href="https://blog.booking.com/progressive-web-apps-with-service-workers.html">Booking.com: PWAs with Service Workers (sw-toolbox)</a>\n<li><a href="https://developer.washingtonpost.com/pb/blog/post/2016/07/15/amp-up-with-progressive-web-apps/">WashingtonPost: AMP up with PWAs (sw-toolbox)</a>\n<li><a href="https://github.com/jeffposnick/create-react-pwa">Adding PWA support to create-react-app with sw-precache</a>\n<li><a href="https://coryrylan.com/blog/fast-offline-angular-apps-with-service-workers">Offline Angular Apps with Service Workers (sw-precache)</a></p>\n<blockquote>\n  <p>原文链接：<a href="https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34">https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34</a></p>\n</blockquote>'}});