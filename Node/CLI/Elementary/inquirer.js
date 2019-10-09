#!/usr/bin/env node

const inquirer = require('inquirer');
const question = [
    {
        type: 'input', // 交互方式 - 输入
        name: 'name',  // 问题字段 - name
        message: "请输入专题名称：" // 问题显示内容
    },
    {
        type: 'list', // 交互方式 - 列表选择(必选+单选)
        name: 'type', // 问题字段 - type
        message: '请选择你需要生成的模板类型', // 问题显示内容
        choices: [ // 可选项
            {
                value:'1',
                name: 'fis3+vue',
            },
            {
                value:'2',
                name: 'webpack+vue',
            },
            {
                value:'3',
                name: 'webpack+vm',
            },
        ],
    },
    {
        type: 'rawlist',
        name: 'typeCheck',
        message: '请确认你需要生成的模板类型',
        choices: [ // 可选项
            {
                value:'1',
                name: 'fis3+vue',
            },
            {
                value:'2',
                name: 'webpack+vue',
            },
            {
                value:'3',
                name: 'webpack+vm',
            },
        ]
    },
    {
        type: 'expand',
        name: 'test',
        message: '就想试试expand类型是怎样的',
        choices: [ // 可选项
            {
                value:'1',
                name: 'fis3+vue',
                key: 'a'
            },
            {
                value:'2',
                name: 'webpack+vue',
                key: 'b'
            },
            {
                value:'3',
                name: 'webpack+vm',
                key: 'c'
            }
        ]
    },
    {
        type: 'checkbox', // 交互方式 - checkbox(勾选需要的内容))
        message: '请选择你需要增加的模块\n',
        name: 'module',
        choices: [
          new inquirer.Separator(' = In APP = '),
          {
            value:'1',
            name: 'app内分享',
          },
          new inquirer.Separator(' = Out APP = '),
          {
            value:'2',
            name: '微信分享',
          }
        ]
    },
]
inquirer
  .prompt(question)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });