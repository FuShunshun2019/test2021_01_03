<style lang="scss" scoped>

    .family_container{
        position: relative;
        
        width:800px;
        height: 500px;
        border: 1px solid #f00;
        margin:50px auto;
        .level_wrapper{
            margin-bottom: 50px;
        }
        h3{
          text-align: center;
          margin-bottom: 30px;
          /*border-bottom: 1px solid #ccc;*/
        }
        .zupuBox{
            position: absolute;
            left:50%;
            margin-left:-200px;
            border: 1px solid #eef;
            .level_wrapper{

              .line_wrapper{
                  margin-bottom: 18px;
              }
            }
        }
        
    }

    .haha{
      background-color:red;
    }

</style>
<template>
  <div class="family_container">
      <p class="haha">哈哈哈哈哈哈</p>
      <h3> {{ title }} </h3>
      <div class="zupuBox">
        <!-- 每一代的人员，以代为单位 -->
        <div v-for="item in datas" :key="item.level" class="level_wrapper">
          <level v-bind:member="item.member" :level="item.level"> </level>
        </div>
      </div>
      
      
      

  </div>
</template>

<script>
  import Level from "./assets/components/Level.vue";
export default {
    props:[],
    data(){
     return {
         a:true
     }
        
    },
    components:{
      Level
    },
    methods:{
    
    },
    computed:{
      title:function(){
        return this.$store.state.zupu.familyZhangSan.title;
      },
      datas:function(){
        return this.$store.state.zupu.familyZhangSan.datas;
      }
    },
    watch:{
  
    },
    mounted(){
      // console.log("App组件,mounted");
     
    },
    watch:{

    }

  

}
</script>


