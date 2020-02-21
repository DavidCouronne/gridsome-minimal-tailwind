---
title: Tailwind CSS
date: 2020-02-20
description: TailwindCSS Test file
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1573405573/art-dark-dawn.jpg
tags: ["TailwindCSS", "Test"]
published: true
---

# Test file TailwindCSS

## Exemple 1

```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <!-- ... -->
  <div>9</div>
</div>
```

<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <!-- ... -->
  <div>9</div>
</div>


## Exemple 2

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <!-- ... -->
  <div>9</div>
</div>
```

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <!-- ... -->
  <div>9</div>
</div>

## Exemple 3

<div class="grid grid-cols-3 gap-4">
  <div class="col-span-3 bg-blue-500">1</div>
  <div class="col-span-2 bg-red-500">2</div>
  <div class="col-span-1 bg-yellow-500">3</div>
  <div class="col-span-1 bg-green-500">4</div>
  <div class="col-span-2 bg-purple-500">5</div>
</div>

## Exemple 4

<div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-span-4 bg-blue-500">1</div>
  <div class="col-start-1 col-end-3 bg-red-500">2</div>
  <div class="col-end-7 col-span-2 bg-yellow-500">3</div>
  <div class="col-start-1 col-end-7 bg-green-500">4</div>
</div>

## Exemple 5

<div class="grid grid-cols-6 gap-4">
  <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2 bg-blue-500">1</div>
  <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4 bg-red-500">2</div>
  <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2 bg-yellow-500">3</div>
  <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-4 bg-green-500">4</div>
</div>

## Exemple 6

<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 bg-green-500">1</div>
  <div class="row-span-1 col-span-2 bg-yellow-500">2</div>
  <div class="row-span-2 col-span-2 bg-red-500">3</div>
</div>