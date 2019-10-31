<template>
    <div v-if="Object.keys(itemParams).length !== 0">

        <table>
            <tr v-for="item in itemParams.rule.tables[0]">
                <td v-for="message in item">{{message}}</td>
            </tr>

        </table>

        <table>
             <tr v-for ="item in itemParams.info.set">
                 <td v-for="message in item">{{message}}</td>
             </tr>

        </table>


   
    </div>
</template>



<script>






    export default {
        props: {
            itemParams: {
                type: Object
            }
        }

    }

</script>

<style scoped>
    td {
        padding: 10px;
        text-align: center;
        
    }
    td{
        border-bottom:1px solid #f2f5f8;
    }
</style>