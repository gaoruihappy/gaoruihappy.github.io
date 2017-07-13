---
createTime : 2017/07/02
author : 高瑞
type: 前端框架
title : VueJs定义组件模板
image:http://img3.imgtn.bdimg.com/it/u=2587595854,1193038019&fm=26&gp=0.jpg

subtitle: 使用恰当的方式来写vue模板
---
# 7种使用VueJs定义一个组件模板的方式
有很多种方式可以在在vue中定义组件模板，据我所知至少有7种。

* String
* Template literal
* X-Templates
* Inline
* Render functions
* JSX
* Single page components  

也许还有更多！

在这篇文章中我们讲详细介绍每一种的优缺点，以便您了解在任何一张场景下哪种方式是最适合使用的。

## 字符串

默认情况下，在js文件里使用一个字符串定义模板。大家都认为使用字符串定义模板是非常难以理解的。除了广泛的浏览器支持之外这种方式没有太多的优点。

component.js

```
Vue.component('my-checkbox', {
template: `<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ title }}</div></div>`,
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});
```
## Template literals
ES6模板("bcakticks")使得可以通过多行来定义一个模板，这是不能在普通的javascript字符串中使用的。这种方式更易于阅读，且有很多种浏览器支持，尽管在转换为ES5更安全。

虽然这种方式并不完美，我发现大多数IDEs在语法高亮、格式化tabs、换行等这些方面会带来不便。

component.js


```
Vue.component('my-checkbox', {
  template: `<div class="checkbox-wrapper" @click="check">
			   <div :class="{ checkbox: true, checked: checked }"></div>
			   <div class="title">{{ title }}</div>
			</div>`,
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});
```

## X-Templates
这种方式是在index.html文件中的script标签定义模板。这个script标签使用`text-template`标记，通过组件定义里的id来引用。

我喜欢这种在适当的HTML标签中写HTMl，但是缺点是模板与组件定义的其它部分相互分离。

component.js

```
Vue.component('my-checkbox', {
  template: '#checkbox-template',
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});
```
index.html

```
<script type="text/x-template" id="checkbox-template">
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title"></div>
  </div>
</script>
```
## Inline Templates

通过将`inline-template`属性添加到组件，向VUE表明其内部内容作为模板，而不是将其做为分布式内容（slots）

这种方式与x-templates有着同样的缺点，但有一个优点是内容在HTML模板的正确位置，所以模板可以在页面载入时显示，而不是一直到Javascript运行。

component.js

```
Vue.component('my-checkbox', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

```
index.html

```
<my-checkbox inline-template>
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title"></div>
  </div>
</my-checkbox>
```
## Render functions
渲染函数需要使用javascript对象定义模板。javascript对象显然是最详尽和抽象多的模板选项。

然而，其优点是模板更接近编译器，容许访问完整的Javascript功能，而不是指令提供的子集。

component.js

```
Vue.component('my-checkbox', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render(createElement) {
    return createElement(
      'div', {
        attrs: {
          'class': 'checkbox-wrapper'
        },
        on: {
          click: this.check
        }
      }, [
        createElement(
          'div', {
            'class': {
              checkbox: true,
              checked: this.checked
            }
          }
        ),
        createElement(
          'div', {
            attrs: {
              'class': 'title'
            }
          }, [this.title]
        )
      ]
    );
  }
});
```

## JSX

最有争议的是使用JSX编写vue模板。有的开发者认为JSX是丑陋的，不直观的，违背了vue的理念。

JSX首先需要被转换，因为浏览器不能读取。但是，加入需要使用渲染函数，JSX是一种不太抽象的定义模板的方式。

component.js


```
Vue.component('my-checkbox', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render() {
    return <div class="checkbox-wrapper" onClick={ this.check }>
		         <div class={{ checkbox: true, checked: this.checked }}></div>
		         <div class="title">{ this.title }</div>
		       </div>
  }
});
```

## Single File Components

只要在构建时使用了合适的构建工具，单文件组件是模板组件的最佳选择。这种方式有两个优点：允许编写标记，同时将所有组件定义在一个文件里。

这种方式需要转换，且一些IDEs不支持这种文件格式的语法高亮，但是还是优于其它方式。

component.js

```
<template>
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: false,
        title: 'Check me'
      }
    },
    methods: {
      check() {
        this.checked = !this.checked;
      }
    }
  }
</script>
```
你也许认为会有很多其它模板定义方式，因为你可以使用像Pug这种模板预处理器。

哪种方式是最好的呢？

当然没有哪一种方式是最完美的，需要根据使用场景来判断。我认为大多数开发者会意识到所有的可能性，并将其做为Vue.js工具栏的一个工具。

