<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      v-model="addressData"
    />

  </div>
</template>
<script>
import AreaList from './Area';
export default {

  name: 'add-adress',
  data() {
    return {
      areaList: AreaList,
      searchResult: [],
      addressData: {}
    }
  },
  mounted: {

  },
  methods: {
    onSave(value) {
      this.addressData = value
    },
    onDelete(value) {
      value == {}
      this.$toast('删除');

    }
  }
}
</script>
<style scoped>
</style>
