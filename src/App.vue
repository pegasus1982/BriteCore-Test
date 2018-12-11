<template>
  <div id="app">
    <table-component :data = "TableData" :header="header"/>
  </div>
</template>

<script>
import {TableData} from './data';
import TableComponent from './components/TableComponent'
export default {
  name: 'App',
  components: {
    TableComponent
  },
  data(){
    return{
      TableData : [],
      header : ['ID','Name','Description','Date','Amount']
    }
  },
  created : function(){
    console.log(TableData);
    this.TableData = TableData;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
