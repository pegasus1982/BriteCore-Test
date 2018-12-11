<template>
    <tr id="table-row">
        <td>{{data.ID}}</td>
        <td>{{data.Name}}</td>
        <td>{{data.Description}}</td>
        <td>{{data.Date}}</td>
        <td>{{data.Amount}}</td>
    </tr>
</template>

<script>

export default {
    props : ['data'],
    name: 'table-row',
    components: {
    },
    created : function(){
        console.log('data is ', this.data)
    }
}
</script>

<style scoped>
</style>
