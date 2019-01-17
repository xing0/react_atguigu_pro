import React, {Component} from 'react'
import {getCategory,addCategory,upCategory} from '../../api'
import {Card,
    Button,
    Icon,
    Table,

} from 'antd'

export default class Category extends Component {
    state = {
        cate:[]
    }

    //willmount 第一次 获取列表
    componentWillMount (){
        this.getCate()
        this.columns = [{
            title: '品类名称',
            dataIndex: 'name',
            render: text => <a href="javascript:;">{text}</a>,  //text 对应dataIndex的 数据的值
          },
            {
                title: '操作',
                width:300,
                render:(category)=>{
                    return(
                        <span>
                        <a href="javasript:">修改分类</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="javasript:">查看子分类</a>
                    </span>
                    )
                }
            }
            ];
    }

    //读取方法
   getCate =  async ()=>{
    const result = await getCategory()
       const cate = result.data
       console.log(cate);
       this.setState({
           cate
       })
    }

    render() {
        const {columns} = this
        const data = this.state.cate
        return (
            <div>
                <Card
                >
                  <span style={{fontSize:20}}>一级分类列表</span>
                    <Button type="primary" style={{float:"right"}}>
                        <Icon type="plus"/>添加分类
                    </Button>
                </Card>
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey="_id"
                    bordered
                    loading={data.length===0}
                    pagination={{defaultPageSize:2,showSizeChanger:true,showQuickJumper:true}}
                />

            </div>
        )
    }
}