<template>
<div class = "main">
  <div class = "content-title">
<h1> What is StakeQuest? </h1>
  </div>
<div class = "content">
<div class = "columns">
  
  <div class = "column">
    <h2> Stage 0 </h2>
  </div>
  <div class = "column">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellat, saepe est veniam laboriosam sapiente facilis aperiam eius veritatis optio molestiae itaque quis ipsam similique eligendi odio perspiciatis consequuntur adipisci.</p>
  </div>
  <div class = "column">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quas eaque temporibus ratione numquam, deleniti ipsam doloribus nulla ullam architecto soluta enim at. Facere, id recusandae quas corrupti perspiciatis qui.</p>
  </div>

</div>

<div class = "columns">
  <div class = "column">
    <h2>Stage 1</h2>
  </div>
  <div class = "column">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima hic, minus sapiente tempore obcaecati, itaque quas ab ipsum repellat, reiciendis iusto asperiores. Blanditiis ipsa recusandae assumenda necessitatibus debitis. Vero, fugit.</p>
  </div>
  <div class = "column">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores deserunt reprehenderit temporibus voluptatibus officia labore accusantium harum. Beatae et tempora reiciendis quod dolores rem sapiente cumque ipsam? Laudantium, omnis.
    </p>
  </div>
</div>

<div class = "columns">
<div class = "column">
  <h2>Stage 2</h2>
</div>
<div class = "column">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est maxime eos, doloremque dolorum, quod dicta voluptatum debitis mollitia laborum accusamus sunt doloribus voluptatibus alias eligendi vel id molestiae. Accusamus, officiis?
</p>
</div>
<div class = "column">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, unde! Aperiam in dolorem optio harum quisquam, voluptatibus, placeat iusto delectus deleniti sequi et, incidunt ducimus cum voluptatum sint asperiores provident.</p>
  </div>
</div>

<div class = "columns">
  <div class = "column">
    <h2> Stage 3</h2>
  </div>
  <div class = "column">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis consequatur ut. Explicabo error voluptatum, hic reiciendis libero, dolorem enim, praesentium impedit nemo distinctio nostrum commodi esse molestiae. Velit, eum!</p>
  </div>
  <div class = "column">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum facere voluptates suscipit, at ad a? Quas, praesentium repellendus? Modi accusamus error libero rem veniam fugiat sapiente officia eius nihil.</p>
  </div>
</div>

</div>

<div class = "buttons columns">
<div class = "column">

<button class = "button is-rounded is-info is-medium">Rules of the Game <span>&nbsp;&nbsp;</span> <font-awesome-icon icon = "arrow-right"></font-awesome-icon></button>
<button class = "button is-rounded is-medium">FAQs <span>&nbsp;&nbsp;</span> <font-awesome-icon icon = "arrow-right"></font-awesome-icon> </button>

</div>
</div>

</div>


</template>
<script>
  
  export default {
    name: 'main-content',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto|Prata|Lato&display=swap');

.main {
  background-color: black;
}

.buttons {
  padding-bottom: 50px;
}

.content-title {
  padding: 16px;
}

.content p{
  color: rgb(150, 148, 148);
}

h1 {
  text-align: left;
  padding-left: 2%;
  font-size: 2.5rem;
  color: #fff;
  font-family: 'Prata', sans-serif;
}
.content {
  padding: 3%;
  font-size: 1.2rem;
  /* text-align: left; */
}
.content h2 {
  font-size: 2.4rem;
  font-family: 'Lato', sans-serif;
  text-shadow: 8px 8px #000000;
  text-transform: uppercase;
}
</style>
