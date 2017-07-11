webpackJsonp([7],{270:function(n,e){n.exports='<hr />\n<p>createTime : 2017/06/28\nauthor : 于彤硕\ntitle : css变量</p>\n<h2 id="subtitlecss">subtitle: 合理使用css变量使得开发更高效</h2>\n<h1 id="css">CSS变量，来了？</h1>\n<h2 id="">简介：</h2>\n<p>Web开发人员一直希望，可以在css开发中能够使用强大的变量。现在，CSS变量终于来了。在这篇文章中，我们会追忆CSS变量的历史，重要性以及应用，在这里你能够了解到如何利用CSS变量，来使CSS的开发和维护变得更快更容易</p>\n<p>CSS变量的历史是坎坷的。该功能最初是由W3C在2012年提出，但是只有Chrome和Firefox对该特性进行了实现。 当该规范在2014年得到了显著的语法改进后，Firefox仍然更新并修改了它的实现，而Chrome则决定在特性被确定后，再对它的实现进行修改。微软对此漠不关心，他们使用了另一种方式。</p>\n<p>在2015年9月，<a href="http://www.caniuse.com">caniuse.com</a>的报告中指出浏览器支持CSS变量低于9%，以下是它当时的报告</p>\n<p><img src="https://cdn-images-1.medium.com/max/640/1*wFzzp4BrgEpcwJfXa416lA.png" alt="GitHub set up" /></p>\n<p>然而，在2016年，Chrome，Safari，Opera，安卓浏览器等全部跳上CSS变量这趟列车，突然之间CSS变量支持率骤升到69%（全美境内网站支持率为77%），从最近的报道中可以看出，Edge浏览器也开始支持CSS变量</p>\n<p><img src="https://cdn-images-1.medium.com/max/640/1*JA-pkkzdhGp8ms3h33rnJA.png" alt="GitHub set up" /></p>\n<p>所以，现在CSS变量是一个你可以应用在实际中的官方特性</p>\n<h2 id="-1">变量的进阶</h2>\n<p>变量，不管在什么语言中，它只是一个存储值（方便以后引用）的容器。例如在表达式x=3中， x是变量名，而3则是变量值。当然变量值是可以被更改的（要不干嘛叫变量呢？），但是真正被使用的值是通过引用这个变量而获得的。因此，如果x=3，那么表达式x+2便等于5，但是如果x的值在某个点变化到4，那么同样的表达式，x+2，它便等于6。变量x总是返回变量当前值，它不受使用场景和使用频率的影响</p>\n<p>CSS是一种声明式的、模式匹配的语言，而不是一种过程式的步进式的语言，那么我们为什么要在CSS中使用变量呢?这和我们在数学，编程中使用变量的原因是相同的，因为它的简单、一致性和易于维护，能够做到一个状态的缩写，可以不重复定义。通过在CSS中使用变量，可以将值局部化，并简化开发、迭代测试和后期维护。变量是这样的:一次定义，全局可用，一次修改，全局变化</p>\n<h3 id="-2">它们是变量还是属性？</h3>\n<p>CSS变量有一个恰当的称谓叫做“自定义属性”。你甚至可以把它们称为“无效属性”，因为CSS变量不能与已有CSS属性重名，并且也不会成为新的CSS属性（浏览器不会将它识别为CSS属性，现在不会，以后也不会）。</p>\n<p>举个例子，属性名<code>background-color</code>能被浏览器识别为具有特定意义的属性,但是<code>——hey-this-is-my-cool-bg-color</code>确不能被识别，对浏览器来说是无意义的。所以,它是一个无效的属性名，除非是作为一个变量出现在CSS中</p>\n<p>自定义属性与常规属性的都会储存一个值,但与常规属性不同的是我们在后面可以通过引用变量名来复用这个值。就像变量一样，然后您将看到,它可以通过关键字<code>var()</code>来引用。不得不说的是，从专业的角度来说，它是自定义变量，但是我们依旧称它为CSS变量，甚至W3C也是这样滴</p>\n<h3 id="-3">解决的问题：</h3>\n<p>在开发过程中通一个简单的CSS也会很快变的混乱,而难以维护。许多属性/值偶然或必然的会被重复很多次。例如,对于每一个你想将左margin设置为<code>20px</code>的元素,你都会给它们写上CSS样式：<code>margin-left:20px;</code>。但是你认为如果左margin为<code>15px</code>效果会更好,这时你只能调整每个元素的CSS样式，这就产生了一种维护问题。</p>\n<p>举个例子 ：下面这部分CSS代码使用了<code>darkcyan</code>这个标准颜色名</p>\n<pre><code>body {\n  margin: 50px;\n  padding: 20px;\n  border: 5px solid darkcyan;\n  font-family: tahoma, verdana;\n  text-align: center;\n}\n.legend {\n  color: darkcyan;\n  font-weight: bold;\n}\na {\n  outline: none;\n  color: Darkcyan;\n  text-decoration: none;\n}\nfieldset {\n  border: 1px solid darkcyan;\n  height: 300px;\n}\n</code></pre>\n<p>如果我想将这种重复的<code>darkcyan</code>变为<code>orange</code>，你就不得不仔细查看CSS代码并且需要手动改变三处。实际上，实际项目中的代码并不像我示例中那样紧凑，而是更多，更分散，所以维护便成为了一种噩梦。</p>\n<p>我知道你现在在想什么：全局搜索，替换不就可以解决了吗？当然,没问题,如果您的编码风格完全相同，但是你要知道CSS属性名是区分大小写的,但属性值不是，也就是说<code>darkcyan</code>和<code>Darkcyan</code>都可以在你CSS中正常工作,所以一次搜索和替换操作并不能完全覆盖到。事实上,如果考虑到这一点,回头再看看代码，想一想，颜色有多少种表示方式，用常用的白色举例，<code>#ffffff</code>,<code>#FFFFFF</code>,<code>#fff</code>,<code>#FFF</code>,<code>rgb(255、255、255)</code>, <code>white</code>，是的，他们都可以代表白色，并且对于浏览器来说都是有效的，但是它们需要用不同的搜索条件来查找，面对这种情况，怎么办？</p>\n<p>CSS变量就是它的答案！</p>\n<h3 id="-4">语法：</h3>\n<p>1、声明：\n回想下吧，CSS变量也是一个属性/值对,它的定义方法和定义常规的属性名是一样的，除了我们是用一个自己定义的字符串来做它的属性名。最重要的一点就是让浏览器知道这是个无效的属性名是<strong>故意命名的</strong>，而不是像<code>background-colour</code>这种错误输入（犯这种错误，就要打手心哦！）</p>\n<p>在你的变量名前加两个横杠来表面这是个变量，举个例子<code>--my-background-color</code>,<code>--standard-shadow</code>, <code>--bqindents</code>。这样的话，以两个横杠开头的属性名将被自动识别为变量，而不是无效的属性名，它们的属性值就是变量的值。</p>\n<p>2、获取：\n这已经成功了一半,现在我们只需要通过<code>var()</code>(他看起来是一个函数调用，但确实是个关键字，就别吹毛求疵啦)关键字来引用变量名。 使用<code>var()</code>关键字来告诉浏览器获取先前定义的变量,把它放到实际的属性值后面,例如:<code>var(——bqindents）</code></p>\n<p>所以，这就完了吗？</p>\n<p>没错，就是这样！第一步，在<code>:root</code>伪类中定义你的属性／值对：</p>\n<pre><code>:root {\n  --bgcolour: #ffffd0;\n  --bqindents: 40px;\n  --warningtextsize: 125%;\n}\n</code></pre>\n<p>第二步，在我们需要使用它们的地方来引用变量名来获取对应的值</p>\n<pre><code>table {\n  background-color: var(--bgcolour);\n}\nblockquote {\n  margin-left: var(--bqindents);\n  margin-right: var(--bqindents);\n}\np.warning {\n  color: red;\n  background-color: var(--bgcolour);\n  font-size: var(--warningtextsize);\n}\n</code></pre>\n<p>回顾下：</p>\n<p>一声明，</p>\n<p>二使用，</p>\n<p>三享受</p>\n<p>完美</p>\n<h3 id="paqs">PAQs：</h3>\n<p>以下是对常问问题的解答，可能也包含了你想问的问题哦</p>\n<p>Q:我们总是要使用<code>:root</code>伪类做为一个选择器来定义变量吗?\nA:不，不一定,但通常情况下是这样的。这样做有两个目的，首先,它可以把所有的变量收集在一个地方,方便变量的维护；其次,<code>:root</code>可以匹配到整个页面中的任何元素,所以定义在其中的变量可以全局使用</p>\n<p>Q:我是否可以在不同的规则中给相同变量设置不同的值，让其成为局部变量而不是全局变量呢？\nA:是的，虽然通常来说这并不是必要的,但在某些情况下,它却是是有意义的（参考xxx部分）</p>\n<p>Q:自定义属性是否可以被层叠呢？\nA:是的,它和其他属性一样，是可被层叠的。如果你通过变量来设置<code>&lt;div&gt;</code>的背景颜色,那么div的子元素的背景颜色的也将保持一致。</p>\n<p>Q:变量名区分大小写吗?\nA:是的，它是区分大小写的。<code>--h1color</code>,<code>--H1color</code>,<code>—h1Color</code>代表着不同的变量，如果引用错误迎接你的将是数小时悲伤的调试。所以我推荐大家使用驼峰式命名规则，这样可以一定程度上避免这种问题的产生</p>\n<p>Q:定义变量名时我可以使用破折号或者下划线吗?\nA:可以使用,但是中间千万不能有空格。<code>-h1-color</code>,<code>h1_color</code>,<code>h-1_color</code>都是有效的变量,但是<code>—h1 color</code>这种写法是无效的。事实上，CSS本身更偏向于使用破折号，在许多标准的属性名中都可以发现破折号的存在,在破折号和下划线的选择上，我推荐使用破折号，这样可以保持代码的一致性和变量名的可读性</p>\n<p>Q:我可以在多个不同的属性中引用同一个变量吗？\nA:可以,只要它们都是是有效的。例如,你可以定义一个值为20PX的变量，你可以在所有的变量中使用它们，譬如<code>margins</code>, <code>padding</code>, <code>font size</code>。在上面的例子中可以发现<code>--bqindents</code>被使用两次</p>\n<p>Q:我可以定义一个单独的数字做为变量值吗,然后在不同属性中使用?\nA:不，这是不被允许的，您不能用单独的数字或单位来构建一个值;一个变量必须具有一个单独的、有效的、明确的值，例如（下面的例子不会生效）：</p>\n<pre><code>:root {\n  --my-value: 20;\n}\n. . .\nblockquote {\n  margin-left: var(--my-value)px;\n}\n</code></pre>\n<p>Q:那么,我可以使用属性名作为变量值吗?\nA:当然不可以,变量只能在值中被使用，不能作为属性名来使用。例如（下面的例子不会生效）：</p>\n<pre><code>:root {\n  --my-property: font-size;\n}\n. . .\np {\n  var(--my-property): 24px;\n}\n</code></pre>\n<p>Q:我们可以把一个变量设置为另一个变量的值吗？\nA:可以，虽然我不能想到一个很好的例子,但它确实是行得通的</p>\n<pre><code>:root {\n  --mybasecolor: red;\n}\n. . .\np.wow {\n  --myparacolor: var(--mybasecolor);\n}\n</code></pre>\n<p>Q:为什么不直接使用SASS,LESS,或者其他一些CSS预处理来定义变量呢?\nA:打蚊何需用大炮，杀鸡何需用牛刀呢</p>\n<h2 id="-5">如何处理色彩值？</h2>\n<p>网上有很多关于CSS变量的文章，大家都爱使用颜色来做例子。以下两个原因，首先，颜色的替换是直观改变、并且易于发现的;其次，它是该特性的一个非常实用和通用的例子。虽然设置颜色决不是使用变量的唯一方法，但大多数CSS使用者，首次尝试使用变量时会使用颜色来作为例子。</p>\n<p>接下来让我们看些实际的例子，既有与颜色有关，也有与颜色无关的</p>\n<p>1、内容高亮：</p>\n<p>想象一下，你在一个web页面中将斑马表格、标签、引用的背景、和输入框获取焦点时的高亮效果保持相同，你可以给每一个元素设置你想要的高亮颜色，刷新下页面，它可能看起来像这样</p>\n<p><img src="https://cdn-images-1.medium.com/max/640/1*yRF-SSr6tI5NrLaXzjv4MQ.png" alt="GitHub set up" /></p>\n<p>但是，看着这个颜色,并不是像你期望的那种淡黄色,所以你决定使用另一种颜色，这个时候，你不得不查找对应代码并且替换它们，这样做很容易漏掉一个样式或者出错。所以我们需要打破这种重复操作，你只需要设置一个变量，来定义原始颜色并在实际的元素中使用它，例如：</p>\n<pre><code>:root {\n  --hilitecolor: #ffffe0;\n}\n. . .\ntbody tr:nth-child(odd) {\n  background-color: var(--hilitecolor);\n}\nspan.hilite {\n  background-color: var(--hilitecolor);\n}\nblockquote {\n  font-family: times;\n  font-weight: bold;\n  font-size: 90%;\n  margin-left: 75px;\n  margin-right: 75px;\n  background-color: var(--hilitecolor);\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 15px;\n}\ninput:focus {\n  background-color: var(--hilitecolor);\n}\n</code></pre>\n<p>现在,你全局定义了一个你想要使用的高亮颜色,你只需要改变一个变量声明,而不是规则本身。如果不满意该颜色，那在定义的地方改变它即可,然后重新加载,所有的高亮将随之改变。是不是超级简单？</p>\n<p>2、斑马表:\n斑马表和(其他典型的单用项)提出了一个有趣的问题:如果您只打算在一个或两个规则中使用变量，那么为什么还要定义变量呢?实际上使用变量并没有带来更多的好处，那么为什么不直接在具体的规则中编写属性值呢?\n这是一个很好的问题，最重要的是:变量易于维护。定义斑马表的交替背景颜色的属性可能淹没在你的CSS代码中,因此很难找到和维护,但如果你在样式表顶部的:root声明你的颜色变量,在几秒钟内你可以容易的找到它,并且修改它。下面是一个使用奇偶行突出显示的例子：\n<img src="https://cdn-images-1.medium.com/max/640/1*wz-muRD95o0eFVpu3-MZIw.png" alt="GitHub set up" /></p>\n<pre><code>:root {\n  --zebraevencolor: lightgreen;\n  --zebraoddcolor: lightblue;\n}\n. . .\ntbody tr:nth-child(even) {\n  background-color: var(--zebraevencolor);\n}\ntbody tr:nth-child(odd) {\n  background-color: var(--zebraoddcolor);\n}\n</code></pre>\n<p>现在,无论两个:nth-child()规则是什么,你都不需要关系它们，只要在顶部定义两个css变量的地方改变它就好了。</p>\n<p>3、Swapping Link Colors on Hover\n这里有一个简单的用例，它是为变量量身定做的。当用户在文本链接上悬浮时，一些开发人员喜欢改变链接的前景和背景颜色。这个简单的技巧使操作形象化，但是因为它使用了现有的颜色，它不会影响页面的配色方案。或者，您可以使用一种颜色组合，与页面颜色形成对比，以增强效果。这里有个蓝色和白色的例子：\n<img src="https://cdn-images-1.medium.com/max/640/1*VRD2i8Ovrgz-6tQCPcROyw.png" alt="GitHub set up" /></p>\n<p>尽管这听起来很简单，但它是一个完整并正确的代码。在这个方案中，如果想再添加:link 和:visited这两种状态的效果，但是:hover和:active已经使用了这种方案，那么要如何做呢？\n      也就是说，在那简单的规则中有8种对应的颜色属性和值，如果你不小心出错，你将会很难定位错误并修复它们。但是，如果你用变量来设置颜色，那么在不考虑规则的情况下更改颜色就是变得很容易。它只需要两个变量。一旦四种规则调用-linkfg和-linkbg变量，它们就永远是正确的。就像上面的例子一样，这个可以极大地简化颜色的调整，直到你得到一个满意的组合。</p>\n<pre><code>:root {\n  --linkfg: #000080;\n  --linkbg: #ffffff;\n}\n . . .\na:link {\n  color:var(--linkfg);\n  background-color:var(--linkbg);\n}\na:visited {\n  color:var(--linkfg);\n  background-color:var(--linkbg);\n}\na:hover {\n  color:var(--linkbg);\n  background-color:var(--linkfg);\n}\na:active {\n  color:var(--linkbg);\n  background-color:var(--linkfg);\n}\n</code></pre>\n<p>在这里，你可能已经了解到链接伪类排序的正确排序了:link, visited, hover, and active。若没有，你可以通过记忆“LoVe over HAte”来记住这一顺序。</p>\n<p>4、Multi-part Values：\n回想一下，我们之前提到过如何定义变量的有效值，是的，不管值是像黄色这样的单例，还是像10px 20px 15px 20px这样的值，只要不是以逗号分隔而是连接在一起，都是可以生效的。接下来我们看一个例子：\n<img src="https://cdn-images-1.medium.com/max/640/1*wUPGT9SXWegPQi-pGt4ezw.png" alt="GitHub set up" /></p>\n<p>阴影是一个很好的特性，但是它们通常需要一些尝试和调整才能得到正确的效果。毕竟，阴影有四个组成部分:水平偏移、垂直偏移、模糊半径和颜色。假设有一个页面，你想要不同的文本和图形元素具有相同的阴影效果,我想你并不需要使用18个小时来调整多个CSS规则，以确保它们达到相同的效果。这时，CSS变量就是你的救星！</p>\n<pre><code>:root {\n  --stdshadow: 3px 3px 5px #A0A0A0;\n}\n. . .\nh1 {\n  text-shadow: var(--stdshadow);\n}\np.shadow {\n  text-shadow: var(--stdshadow);\n}\nimg.boxed {\n  box-shadow: var(--stdshadow);\n}\n</code></pre>\n<p>你只需设置一个变量，其中包含shadow的各个值，在所有使用该阴影的地方调用该变量。想要调整它，测试它，然后改变它吗?不用担心，你只需简单的改变变量声明然后刷新就好了。</p>\n<p>5、Themes (让营销人员开心就好)：\n所有的这些都是对变量的合理延伸，不仅对颜色还是缩进设置来讲。更重要的是,使用变量可以构建很多可以工作的样式集合,如colors, margins, spacing, line height, list style, shadows, justification等等;换句话说,这个样式集合则是一种主题。</p>\n<p>基于变量的主题不仅可以帮助你自己，还可以保持部门间的平静，就像当营销代表说“不，不是那个蓝色的，是这个蓝色！”不管谁想要改变什么，你都可以快速且轻松地测试它，而不需要备份多个CSS文件(相比于不使用变量来说)来防止不必要的事情发生。你只需复制一个变量块，它代表你的测试主题，原本的变量是你的备用主题，将备用主题注释掉，然后对测试主题进行调整即可。\n例如，虽然没有看到这些主题块所应用的页面，但你可以很容易地想象当一个或另一个变量集被应用时，它会有什么不同。如果测试主题出现问题，你可以将它注释，然后恢复备用主题，直到测试主题被修复之后，你根本不需要对单独的规则进修查找和修改。这，就是基于变量主题的力量。</p>\n<pre><code>**Variable set 1 — test theme (currently in use) **\n\n:root {\n--transition-type: padding-left 250ms ease-out;\n--transition-padding: 20px;\n--transition-font-size: 100%;\n--navbar-bgcolor: lightgray;\n--navbar-h2-color: brown;\n--navbar-h2-border: thin brown solid;\n--navbar-font-size: 12px;\n--font-stack: Cambria, Georgia, "Times New Roman", serif;\n--font-size: 16px;\n--font-color: darkblue;\n--max-width: 1000px;\n--header-fontvariant: normal;\n--header-color: white;\n--header-bg: teal;\n--header-shadow: 2px 3px 4px red;\n--header-curve: 20px;\n--header-border: thin darkblue solid;\n--teaser-color: yellow;\n--byline-color: white;\n--h3-color: teal;\n--h3-fontvariant: small-caps;\n--dropcap-size: 200%;\n--dropcap-font: Times;\n--pullquote-border: thick black solid;\n--pullquote-start: url(quotestart.png);\n--pullquote-end: url(quoteend.png);\n--zebraoddcolor: white;\n--zebraevencolor: lightyellow;\n--linkfg: darkblue;\n--linkbg: white;\n}\n\n** Variable set 2 -- fallback theme (currently commented out)\n:root {\n--transition-type: font-size 250ms ease-out;\n--transition-padding: 0px;\n--transition-font-size: 200%;\n--navbar-bgcolor: lightblue;\n--navbar-h2-color: darkgreen;\n--navbar-h2-border: thin darkgreen dashed;\n--navbar-font-size: 14px;\n--font-stack: Verdana, Arial, sans;\n--font-size: 18px;\n--font-color: darkgreen;\n--max-width: 1500px;\n--header-fontvariant: small-caps;\n--header-color: black;\n--header-bg: lightyellow;\n--header-shadow: 2px 3px 4px orange;\n--header-curve: 100px;\n--header-border: thick red solid;\n--teaser-color: red;\n--byline-color: orange;\n--h3-color: darkred;\n--h3-fontvariant: normal;\n--dropcap-size: 400%;\n--dropcap-font: Courier;\n--pullquote-border: thick #ff6a00 dotted;\n--pullquote-start: url(orangequotestart.png);\n--pullquote-end: url(orangequoteend.png);\n--zebraoddcolor: yellow;\n--zebraevencolor: lightgray;\n--linkfg: red;\n--linkbg: white;\n}\n**\n</code></pre>\n<p><em>如果你想要了解在实践中如何使用这样的主题，请访问[http://davegash.com/cssvars/](css variables folder) 。这里有两个页面apocalypsetoday1.htm 和 apocalypsetoday2.htm， 它们分别引用了apocalypsetoday1.css和apocalypsetoday2.css。除了它们的主题是基于变量而更改的，HTML页面和CSS样式表都是完全相同的。可以将HTML页面并排打开，方便查看通过简单地交换CSS变量而取得的显著差异。</em></p>\n<p>6、还有一件事情：\n说到回退，还有一件事你应该了解:回退的值。<code>var()</code>函数有第二个可选参数，如果变量解析失败，它将代替该参数来赋值。</p>\n<p>类似于让浏览器从糟糕的字体调用中恢复字体堆栈，回退值让你的规则从一个错误变量恢复到正常。这简单，当解析出错时，它们可以完全替换你的引用。在属性值中变量引用之后，如果变量不能正确地被解析，就添加一个逗号和一个值作为回退。</p>\n<pre><code>:root {\n  --custom-width: 80%;\n  --myTextColour: darkblue;\n}\n. . .\ndiv.special {\n  width: var(--custom-width, 80%);\n  color: var(--mytextcolour, red);\n}\n</code></pre>\n<p>在<code>class="special</code>的div中，自定义变量<code>--custom-width</code>引用成功，即使没有，回退值也匹配了预期的变量值，因此它总是正确的。但是，<code>--mytextcolour</code>变量引用失败（我很确定你知道失败原因）这个时候回退值会取代未解析的变量值。</p>\n<p>事实上，第二个例子以创意并有用的方式验证了回退值:使用很明显不同的回退值作为一种调试方法！在本例中，您期望div文本是深蓝色的。但它实际展示的是红色，这很明显，该变量并没有赋值成功。定位错误（驼峰写法），解决它，然后再进行测试。深蓝色的文本将呈现在你的面前。</p>\n<h2 id="-6">高级应用：</h2>\n<p>1、作用域\n让我们回顾一下作用域的概念。CSS变量最常见的作用域是全局的，这意味着它们可以被用在任何CSS规则或HTML元素中。但是有些情况下，您可能想要限制使用范围以简化页面维护和更新。\n考虑一个包含多个内容块的HTML页面，每个内容块包含一系列简短的文章，其中的文章属于不同的逻辑组或部分。基本的HTML可能是这样的</p>\n<pre><code>&lt;section class="thisweek"&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n&lt;/section&gt;\n&lt;section class="lastweek"&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n&lt;/section&gt;\n&lt;section class="oldstuff"&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n  &lt;article&gt;\n  . . .\n  &lt;/article&gt;\n&lt;/section&gt;\n</code></pre>\n<p>这些部分将被CSS用来设置不同的属性，虽然每部分中的文章看起来是相似的，但是与其他部分仍存在不同。也就是说，每个部分都有自己的外观或小主题。</p>\n<p>你可以从结构中推断，随着内容的增加，文章可能会从一节移到另一节，并添加新的内容。这看起来是个简单的维护任务，只需将整个文章从一个部分剪切并粘贴到另一个部分即可。但是，他们的样式会如何变化呢?如果文章中的元素有它们自己的CSS规则，你怎么能保证它们的主题不互相冲突呢?\n为了简单起见,我们给<code>&lt;h1&gt;</code>设定颜色和字体大小,但是,我们可能会修改文章的其他属性,size, font, images, shadows, margins, backgrounds等等——为了区分各个部分。这里有一些CSS</p>\n<pre><code>section.thisweek {\n  --h1-color: red;\n  --h1-size: 110%;\n}\nsection.lastweek {\n  --h1-color: green;\n  --h1-size: 100%;\n}\nsection.oldstuff {\n  --h1-color: blue;\n  --h1-size: 90%;\n}\narticle h1 {\n  color: var(--h1-color);\n  font-size: var(--h1-size;)\n}\n</code></pre>\n<p>首先使用相同的变量来设置两个属性，注意是在它自己的section上面定义，而不是在<code>:root</code>上。这代表着在不同的局部作用域中为相同的变量建立了不同的值。在后面的使用中只需要使用后代(也称为上下文)选择器来匹配文章中的h1，使用它们当前作用域中的变量值为每部分的标题设置颜色和字体大小。</p>\n<p>这样，您就可以轻松地将文章从一节移到另一节，不需要再修改任何特定的规则，就可以保证它们将与目标部分中的其他部分相融合。当然，这些规则并不会影响到这三个部分之外的h1或其他任何元素。</p>\n<p>2、计算</p>\n<p>前面我们说过，不能只使用一个变量值或一个度量单位来构建一个属性值。但是，您可以使用(有点深奥但完全有用)的CSS<code>calc()</code>函数来计算一个你想要的实际值。\n假设在页面一个中心有个banner，它会占用一部分，但并不填充整个页面。一般情况，可以将其宽度作为页面宽度的百分比来编写。例如<code>width:85%;</code>但这并不是最优编写方式，每次页面宽度改变时，它的左右距离和banner的宽度都会随页面宽度改变而改变。如果你想做到不管页面宽度而左右宽带均保持40px的大小呢，这种情况就可以使用CSS math:<code>width:calc(100%-80px)</code>，再把剩余的80px分成两份。</p>\n<p>那么我们如何结合<code>calc()</code>和<code>var()</code>来获得一个可用的结果呢?让我们举另外一个的例子。例如，我们希望blockquote页面的文本为1.5em，但警告页面文本为2.0em，我们已经意识到这些大小并不是一成不变的;用户测试、营销需求或其他外部影响都可能会迫使它们不停地改变。下面是一些CSS，</p>\n<pre><code>:root {\n  --bq-resize-by: 1.5;\n  --warning-resize-by: 2.0;\n}\n. . .\nblockquote {\n  font-size: calc(var(--bq-resize-by) * 1em);\n}\n.warning {\n  font-size: calc(var(--warning-resize-by) * 1em);\n}\n</code></pre>\n<p>通过将变量值与1em的常量字体大小相乘，我们得到了两种文本类型所需的大小。而且，和往常一样， 当乘法因素需要改变时，它们很容易在CSS顶部的<code>:root</code>中找到。如果普通的blockquote元素字体需要0.9em，带warnings的blockquote元素字体需要1.75em，那么只要改变变量就可以了。</p>\n<p>3、JavaScript\n好了，再说一个特性，这也是另一种能力。虽然我不认为它最好的，但是我确定它是存在的。而且，如果我在这里没有提到，读者可能会用匿名的方式来攻击我。</p>\n<p>简单地说，您在JavaScript中可以用get和set方式来访问CSS变量。如果想获得一个变量的值，比如<code>—my-bg-colour</code>，首先取到文档中样式对象，其次获取该属性值，最后将其放入一个JavaScript变量中。trim()函数并不是必需的,但是可以去掉空白值。</p>\n<pre><code>var allstyles = getComputedStyle(document.documentElement);\nvar varval = string(allstyles.getPropertyValue("--my-bg-colour"));\nvar varval = varval.trim();\n</code></pre>\n<p>相反,你在文档的样式对象中直接设置一个变量的值。最后,你可以在css中通过一个变量设置另一个变量的值,在JavaScript中你也可以为其它变量指定第二个参数。要记得,<code>var()</code>和引用是必需的!</p>\n<pre><code>document.documentElement.style.setProperty("--my-bg-colour", "#008080");\ndocument.documentElement.style.setProperty("--my-bg-colour", "var(--my-fg-colour)");\n</code></pre>\n<h2 id="-7">要点回顾：</h2>\n<p>如果你一直在关注，你可能已经得出了以下结论，让我们一起回顾一下要点:\n1、CSS变量是很重要的。多年来，开发者一直在寻求这个功能，原生浏览器支持已经有一段时间了。它不需要任何第三方工具，不需要任何的构建步骤，也不需要使用命令行，CSS变量就可以在浏览器中很好地工作了</p>\n<p>2、CSS变量它不仅仅是一个深奥的技巧，或者只有硬核开发者才会欣赏的古怪特性。每个使用CSS的人都应该使用CSS变量;他们在开发和维护模式中都能够大大地提升工作效率。</p>\n<p>3、CSS变量是一种易于学习的有趣特性，并且非常有用。对于变量这个概念来说，无论你是新手，还是老手，你都能够马上掌握它的特性，随着你使用的越多，你就会发现它们的优势就越大。</p>\n<h2 id="-8">资料来源：</h2>\n<p>搜索“css变量”会返回成千上万的文章，但是并不是所有的文章都有最新的，最正确的信息。下面是一些我推荐的一些文章:\n·<a href="http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/">A short and useful basic CSS variables tutorial</a>\n·<a href="https://css-tricks.com/difference-between-types-of-css-variables/">A comparison of native and preprocessor CSS variables</a>\n·<a href="https://web-crunch.com/know-css-variables/">A very good “What You Should Know” tutorial</a>\n·<a href="http://www.htmlgoodies.com/html5/css/a-guide-to-using-css-variables.html#fbid=O5ClIaBBTR0">A CSS variables guide that covers calc() and JavaScript access</a>\n·<a href="https://drafts.csswg.org/css-variables/">The W3C Editor’s Draft specification</a></p>\n<h2 id="-9">感谢：</h2>\n<p>感谢您阅读这篇文章,我希望您能够学到一些东西!若您有问题，可以联系作者Dave Gash,dave@davegash.com。</p>\n<h2 id="-10">原文地址</h2>\n<p><a href="https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e">https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e</a></p>'}});