<template>
  <div class='bio'>
    <div class='pic' :style='image'></div>
    <div class='info'>
      <div class='quote'>
        <slot></slot>
      </div>
      <a :href='href' :class='{"white": this.white === "yes"}'>{{ href }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'href', 'white', 'bgcolor'],
  name: 'Biography',
  computed: {
    image() {
      return (
        `background-image: url('${this.src}'); ` +
        (this.bgcolor ? 'background-color: ' + this.bgcolor : '')
      )
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
  overflow-y: auto;
}

.pic {
  width: 150px;
  height: 150px;
  background-size: contain;
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
  word-break: break-all;
}

.quote {
  text-align: justify;
}

.white {
  color: white !important;
}
</style>