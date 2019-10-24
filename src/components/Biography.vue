<template>
  <div class='bio'>
    <div class='pic' :style='image'></div>
    <div class='info'>
      <div class='quote'>
        <slot></slot>
      </div>
      <a :href='href'>{{ href }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'href'],
  name: 'Biography',
  computed: {
    image() {
      return `background-image: url('${this.src}')`
    }
  }
}
</script>

<style lang='scss' scoped>
.bio {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
}

.pic {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.info {
  padding-left: 20px;
  width: calc(100% - 150px);
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
}

.quote {
  text-align: justify;
}
</style>