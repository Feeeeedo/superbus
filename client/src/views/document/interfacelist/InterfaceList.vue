<template>
	<div class="interface-list">
    interface-list
	</div>
</template>
<script>
export default {
  name: 'interface-list',
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
