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
        <!-- <div v-html="html"></div> -->
        <!-- <textarea id="idckeditor" value="value" cols="20" rows="2" class="ckeditor"></textarea> -->
      </div>
    </div>
  </div>
</template>
<script>
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
            trigger: "blur"
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
            trigger: "blur"
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
            trigger: "blur"
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
        type: "template",
        template:
          '<textarea id="ckeditor" value="value" class="ckeditor"></textarea>',
        validate: [
          {
            required: true,
            message: "请输入请假原因及相关附件",
            trigger: "blur"
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
import ckeditor from "@ckeditor/ckeditor5-build-classic";
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
          alert(JSON.stringify(formData));
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
    // axios.get(url, {})
    //     .then(function(res) {
    //         self.code = res.data.code;
    //         if (self.code == 0) {
    //             self.rule = res.data.data['field_list'];
    //             self.title = res.data
    //             console.log(res.data);
    //         }
    //         console.log(self.code);
    //     })
    //     .catch(function(error) {
    //         self.code = error.response.status;
    //         console.log(error);
    //     });
    setTimeout(function() {
      self.rule = mockData.data.field_list;
    },10);
  },
  mounted() {
    this.model = this.fApi.model();
    //var editor = CKEDITOR.instances.editor2;
    // CKEDITOR.replace("editor", { height: "300px", width: "80%", toolbar: "Full" });
  },
  updated() {
    // CKEDITOR.replace("editor", {height: "300px", width: "80%", toolbar: "Full"});
  }
};
</script>
<style scoped>
</style>
