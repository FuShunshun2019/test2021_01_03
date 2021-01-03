<style  lang="scss" scoped>
	.level_container{
		width:400px;
		display: flex;
		justify-content:space-between;
		justify-content:space-around;
		.item{
			position: relative;
			width :40px;
			height:40px;
			border: 1px solid #000;
			background-color:#eee;
			
			span{
				position: absolute;
				top:-22px;
				left:50%;
				margin-left: -1px;
				/*这个是动态的宽度*/
				/*width:100px; */
				height:20px;
				/*background-color:#777;*/
				border-left:2px solid #999;
				&.isShowTopBorder{
					border-top:2px solid #999;
				}

			}

		}
		.squr{
			/*background-color:skyblue;*/
		}
		.circle{
			border-radius: 50%;
			/*background-color:pink;*/
		}
		.personal_name{
			position: absolute;
			bottom:-20px;
			width:60px;
			font-size:12px;

		}
		.isSelf{
			background-color:#555;
		}
	}
	
</style>
<template>
	<div class="level_container">

		<div v-for="(people , idx) in member" 
			:key="people.num"
			:class='{ 
				"item":true , 
				"squr":people.sex=="男" ,
				"circle":people.sex=="女" ,
				"isSelf":people.name=="张三"
			}'> 
			<span v-show="level>1"  
				:class='{ "isShowTopBorder":idx!=member.length-1 }' 
				:style='{"width":w}'> 
			</span>
			<b class="personal_name"> {{ people.name }} </b>
			
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default{
		props:["member" ,"level"],
		data(){
			return {
				w:""
			}
		},
		components:{
			
		},
		methods:{

		},
		computed:{

		},
		watch:{},
		mounted(){
			//得到总宽度--
			let w = $(".zupuBox").width();
			//总共多少个人
			let c = this.member.length;
			console.log(w);
			//每个人之间的距离为s
			let s = (w-c*40)/c;
			//设置间距
			this.w = s + 40 + "px";
		}
	}
</script>