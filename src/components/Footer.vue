<template>
  <div>
    <div class="outer-footer">
      <div class="center">Pokénza</div>
      <div class="center">By Pokémon Trading Company</div>
    </div>
    <div class="accent-footer">
      <div
        class="center bold-caps"
      >Proffessional trading platform for pokétrading</div>
      <div class="center">For Trainers By Trainers</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>


<style lang="css" scoped>
  .outer-footer {
    display: flex;
    flex-direction: column;
    background-color: #2a2a2b;
    margin-left: 16em;
    margin-top: 10em;
    height: 10em;
    padding: 2em;
    width: 100%;
  }

  .accent-footer {
    background-color: #9367be;
    margin-left: 16em;
    padding: 1em;
    width: 100%;
  }

  .center {
    margin-left: -15vw;
    text-align: center;
  }

  .bold-caps {
    color: #111111;
    text-transform: uppercase;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    .outer-footer {
      margin-left: 0;
    }

    .accent-footer {
      margin-left: 0;
    }

    .center {
      margin-left: 0;
    }
  }
</style>
