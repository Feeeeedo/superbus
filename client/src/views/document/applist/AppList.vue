<template>
	<div class="app-list">
    applicat
	</div>
</template>
<script>
export default {
  name: 'app-list',
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
