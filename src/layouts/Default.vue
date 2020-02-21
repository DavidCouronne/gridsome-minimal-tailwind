<template>
  <!-- Read how Layouts, Pages, Templates and collections work here: https://gridsome.org/docs/core-concepts/ -->
  <div>
    <main>
        <nav class="bg-blue-500 h-16"></nav>
        <section class="bg-pink-500 fixed top-16 h-screen">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure non quas, provident debitis magnam aliquam similique veniam reiciendis aperiam rerum suscipit libero, quam tempore praesentium placeat impedit nulla. Unde.

        </section>
        <article>
          <div class="content bg-yellow-500 mt-16">
           <slot />
          </div>
        </article>
      </main>
    
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>

  
  nav {
    
   
    z-index: 9;
    width: 100%;
    position: fixed;
  }
  
  article {
    width: 100%;
    display: grid;
    grid-template-columns: 20vw auto;
  }
  
  article p {
    padding-bottom: 1500px;
  }
  
  section {
    
    width: 20vw;
    
    
    
    overflow-y: scroll;
  }
  
  .content {
    
    position: relative;
    grid-column-start: 2;
    
  }
</style>
