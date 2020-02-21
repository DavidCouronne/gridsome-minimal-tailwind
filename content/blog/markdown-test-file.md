---
title: test
date: 2020-02-15
description: test file
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1573405573/art-dark-dawn.jpg
tags: ["Python", "Tutorial"]
published: true
---

# This is a test

:::note Note
This is what a note looks like
:::

:::tip Tip
- It works great with Gridsome
- TailwindCss & PurgeCss friendly
:::

:::important You can set _your own_ title
it replaces the default title

```md
\:::important You can set _your own_ title
it replaces the default title
\:::
```

:::


<details type="success" class="admonition admonition-details">
<summary>Click me to vue the code</summary>
<div class="admonition-content">

```md
\:::details
This is a details block, which does not work in IE / Edge
\:::
```

</div>
</details>




:::warning Warning
You can't nest them
:::

:::tip Tip
but you can nest other markdown

```javascript
// you can even use block elements
const myvar = "Hello world !";
```

:::

:::caution Accessibility
Hight contrast default theme: WCAG AAA
:::

:::important Credit
+ Based on remarkable-admonitions

+ SVG Icons by GitHub Octicons


:::

:::tip Vuepress
vuepress-like theme include
:::

:::caution Docusaurus
Docusaurus theme include
:::


:::custom
You can make your own custom types. The icon, keyword, and emoji can be set in the plugin options and they can be styled separately.

```js
customTypes: {
              custom: {
                emoji: "💻",
                svg:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
              }
            }
```

:::


:::note
Vuetify theme... not include !

But you can customize a `block`:

```js
 vwarning: {
    keyword: 'vwarning',
    customBlock: true,
    tagName: 'v-alert',
    properties: {
      type: 'warning'
    }
  },

```