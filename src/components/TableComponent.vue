<template>
    <div id="table-component">
        <div>
            <label>Amount Range</label>
            <input type='text' placeholder="Min"/>
            <input type='text' placeholder="Max"/>
        </div><br/>
        <div>
            <table>
                <thead>
                    <tr>
                        <th v-for="item in header">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in data">
                        <table-row :data="item"></table-row>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import TableRow from './TableRow'
export default {
    props : ['data','header'],
    name: 'table-component',
    components: {
        TableRow
    },
    created : function(){
        console.log('data is ', this.data,this.header)
    }
}
</script>

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
