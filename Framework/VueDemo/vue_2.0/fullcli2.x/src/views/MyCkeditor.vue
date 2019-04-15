<template>
  <div class="box" id="myCkeditor">
    <div class="box-header with-border">
      <h3 class="box-title">新工单</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="remove" v-on:click="goback">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      <div class="content">
        <form-create ref="fc" v-model="fApi" :rule="rule" :option="option"></form-create>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
const mockData = {
  code: 0,
  data: {
    id: 1,
    name: "新建中",
    workflow_id: 1,
    sub_workflow_id: 0,
    distribute_type_id: 1,
    is_hidden: false,
    order_id: 0,
    type_id: 1,
    participant_type_id: 1,
    participant: "wangfei",
    field_list: [
      {
        field: "title",
        title: "标题",
        value: null,
        type: "input",
        validate: [
          {
            required: true,
            message: "请输入标题",
            trigger: "blur"
          }
        ]
      },
      {
        field: "leave_start",
        title: "开始时间",
        value: null,
        type: "DatePicker",
        props: {
          type: "datetime",
          transfer: true
        },
        validate: [
          {
            required: true,
            message: "请输入开始时间",
            trigger: "blur",
            pattern: /.+/
          }
        ]
      },
      {
        field: "leave_end",
        title: "结束时间",
        value: null,
        type: "DatePicker",
        props: {
          type: "datetime",
          transfer: true
        },
        validate: [
          {
            required: true,
            message: "请输入结束时间",
            trigger: "blur",
            pattern: /.+/
          }
        ]
      },
      {
        field: "leave_days",
        title: "请假天数(0.5的倍数)",
        value: null,
        type: "InputNumber",
        props: {
          max: 5,
          min: 0.5,
          step: 0.5
        },
        validate: [
          {
            required: true,
            message: "请输入请假天数(0.5的倍数)",
            trigger: "blur",
            pattern: /\d+/
          }
        ]
      },
      {
        field: "leave_proxy",
        title: "代理人",
        value: null,
        type: "select",
        options: [
          {
            value: "admin",
            label: "admin"
          }
        ],
        validate: [
          {
            required: true,
            message: "请输入代理人",
            trigger: "blur"
          }
        ]
      },
      {
        field: "leave_type",
        title: "请假类型",
        value: null,
        type: "select",
        options: [
          {
            value: "1",
            label: "年假"
          },
          {
            value: "2",
            label: "调休"
          },
          {
            value: "3",
            label: "病假"
          },
          {
            value: "4",
            label: "婚假"
          }
        ],
        validate: [
          {
            required: true,
            message: "请输入请假类型",
            trigger: "blur"
          }
        ]
      },
      {
        field: "leave_reason",
        title: "请假原因及相关附件",
        value: null,
        type: "input",
        props:{
          // 只要给input组件加一个 props.type = textarea 即可构建出 textarea 表单
          type:'textarea'
        },
        // 传入templage，实际上没有受控的表单组件...
        // template: '<textarea id="ckeditorId" class="ckeditor"></textarea>',
          // 如果想用editor.js脚本初始化批量初始化目标元素，则目标元素的class要设为ckeditor
          // 如果要使用CKEDITOR.replace()初始化目标元素, 则replace的参数必须传目标元素的id
        validate: [
          {
            required: true,
            message: "请输入请假原因及相关附件",
            trigger: "blur",
            pattern: /.+/
          }
        ]
      }
    ],
    label: {},
    creator: "admin",
    gmt_created: "2018-04-23",
    transition: [
      {
        transition_id: 1,
        transition_name: "提交"
      },
      {
        transition_id: 2,
        transition_name: "保存"
      }
    ]
  },
  msg: ""
};
export default {
  name: "myCkeditor",
  data() {
    return {
      code: "",
      fApi: {},
      model: {},
      rule: [],
      option: {
        onSubmit: function(formData) {
          // 注释的都是走过的弯路
          // let select_id = document.querySelector('textarea').id
          // CKEDITOR.instances[select_id].updateElement();
          // CKEDITOR.dom.element.get(select_id).fire('change');
          // formData.leave_reason = CKEDITOR.instances[select_id].getData(); // 虽然有点坑, 但是只能先这样咯, 然而并没有效果
          
          // 现在的矛盾是：在这里更新数据，当前的formData参数无法及时响应。。。
          // CKEDITOR.dom.element上绑定的事件无法自动触发
          // form-create 表单值的变动不会影响 FormItem组件上 fieldValue 变化。。。这是个坑

          console.log(formData);
        }
      }
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  created: function() {
    var self = this;
    
    setTimeout(function() {
      // 数据变更
      self.rule = mockData.data.field_list;

      Vue.nextTick(function(){
        // 数据变更后，确保在dom完成渲染之后做一些东西，就需要把相应逻辑放到Vue.nextTick里处理
        
        // 注释的都是走过的弯路
        // let element = new CKEDITOR.dom.element(document.querySelector('textarea'))
        // 在新建的元素上绑定事件 - 然而这些事件只能人为触发...不会自动触发( wrong way )
        // 如果能自己触发就好了
        // 如果 textarea 的 value 绑定了 Vue里面对应数据，就好了
        // 使用jq改变 vm 元素的值, 对应的数据并不会改变
        // element.on('change',function(){
        //   let newValue = this.getValue();
        //   self.fApi.setValue('leave_reason',newValue);
        // })

        let select_id = document.querySelector('textarea').id;

        CKEDITOR.replace(select_id);
        // 要在实例中绑定 change 事件，才能自动响应！！！ 希望！！！！！！！( right way )
        CKEDITOR.instances[select_id].on('change',function(){
          let ckeditorData = CKEDITOR.instances[select_id].getData()
          if (ckeditorData !== self.fApi.getValue('leave_reason')) {
            self.fApi.setValue('leave_reason',ckeditorData)
          }
        })

        // console.log(self.fApi.fields());
        // console.log(self.$refs.fc.$f.fields());
        // console.log(self.$refs.fc.$el);
      })
    },2);
  },
  mounted() {
    this.model = this.fApi.model();
  },
  updated() {
    
  }
  // 如果想用editor.js脚本初始化批量初始化目标元素，则目标元素的class要设为ckeditor
    
  // 如果要使用CKEDITOR.replace()初始化目标元素, 则replace的参数必须传目标元素的id
  // CKEDITOR.replace('ckeditorId')
};
</script>
<style scoped>
</style>
