<template>
  <div class="container">
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 480px; margin: 100px 0"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/main.scss";

</style>

