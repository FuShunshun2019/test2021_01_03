const zupu = {
  namespaced:true,
  state:{
    a:12,
    familyZhangSan:{
        title: '张三家系图',
        datas: [
            {
                level : 1,
                member:[
                  {
                    num: '001',
                    name: '张三父亲',
                    sex: '男',
                    partner: '002',
                    children: ['003', '005']
                  },
                  {
                    num: '002',
                    name: '张三母亲',
                    sex: '女',
                    partner: '001',
                    children: ['003', '005']
                  }
                ]
            },
            {
                level: 2,
                member:[
                  {
                    num: '003',
                    name: '张三',
                    sex: '男',
                    partner: '004'
                  },
                  {
                    num: '004',
                    name: '张三配偶',
                    sex: '女',
                    partner: '003'
                  },
                  {
                    num: '005',
                    name: '张三兄弟',
                    sex: '男'
                  }
                ]
            },
            {
                level: 3,
                member:[
                  {
                    num: '006',
                    name: '张三儿子888',
                    sex: '男'
                  },
                  {
                    num: '007',
                    name: '张三女儿333',
                    sex: '女nv'
                  }
                ]
            }

        ]
    }
  },
  mutations:{
   
  },
  actions:{
    
  },
  getters:{

  }
}

export default zupu;

