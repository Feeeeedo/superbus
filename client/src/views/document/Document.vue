<template>
	<div class="document">
    <router-view class="router-document-manage"></router-view>
	</div>
</template>
<script>
export default {
  name: 'document',
  components: {},
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc'],
      searchValue: ''
    }
  },
  methods: {
    handleResultClick (arg) {
      console.log(arg)
    }
  }
}
</script>
