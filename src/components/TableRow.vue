<template>
    <tr id="table-row" :class="(data.Amount>0?'positive':'negative')">
        <td>{{data.ID}}</td>
        <td>{{data.Name}}</td>
        <td v-if="!editState" v-on:click="onEdit">{{data.Description}}</td>
        <td v-else style="padding:0"><input type="text" v-model="data.Description" v-on:keyup.enter="onEditComplete"/></td>
        <td>{{data.Date}}</td>
        <td>{{data.Amount}}</td>
    </tr>
</template>

<script>

export default {
    props : ['rowData'],
    name: 'table-row',
    components: {
    },
    data(){
        return{
            data : this.rowData,
            editState : false,
        }
    },
    created : function(){
        // this.data = rowData
    },
    methods: {
        onEdit : function(){
            this.editState = true;
        },
        onEditComplete : function(){
            this.editState = false;
            this.$emit('updated',this.data);
        }
    }
}
</script>

<style scoped>
    input{
        width : 99%;
        font-size: 16px;
        height : 100%;
    }
    .positive{
        background-color: rgba(130,251,153,.3);
    }
    .negative{
        background-color: rgba(251,130,153,.3);
    }
</style>
