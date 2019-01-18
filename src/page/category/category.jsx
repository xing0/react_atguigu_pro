import React, {Component} from 'react'
import {getCategory,addCategory,upCategory} from '../../api'
import PropTypes from 'prop-types'
import {Card,
    Button,
    Icon,
    Table,
    Modal,
    Form,
    Input,
    Select,
    message
} from 'antd'

export default class Category extends Component {
    state = {
        cate:[],
        isShowAdd:false
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

    //模态框(添加品类)

        addCategory = async (e) => {
            this.setState({
                isShowAdd: false,
            });
          const newCategory =  this.form.getFieldsValue()  //获取输入的值
            this.form.resetFields() //重置输入的表单
            //开始添加数据
          const result = await addCategory(newCategory)
            this.getCate()  //获取成功,重新刷新数据
            console.log('添加成功的返回:',result);
          if(result.status===0) {
              message.success('添加成功了')
          }else{
              message.error('添加异常,请检查啊!')

          }
        }

    render() {
        const {columns} = this
        const {cate,isShowAdd} = this.state
        return (
            <div>
                <Card>
                  <span style={{fontSize:20}}>一级分类列表</span>
                    <Button type="primary" onClick={() =>this.setState({isShowAdd: true})} style={{float:"right"}}>
                        <Icon type="plus"/>添加分类
                    </Button>
                </Card>
                <Table
                    columns={columns}
                    dataSource={cate}
                    rowKey="_id"
                    bordered
                    loading={cate.length===0}
                    pagination={{defaultPageSize:2,showSizeChanger:true,showQuickJumper:true}}
                />

                <Modal
                    title="添加分类"
                    visible={isShowAdd}
                    onOk={this.addCategory}
                    onCancel={() =>this.setState({isShowAdd: false})}
                >
                    <AddFrom cate={cate} setForm={(form)=>this.form=form} />
                </Modal>
            </div>
        )
    }
}
class AddFrom extends Component{
    static propTypes = {
        cate:PropTypes.array.isRequired,
        setForm:PropTypes.func.isRequired
    }
    componentWillMount (){
        this.props.setForm(this.props.form)
    }

    // const {get}= this.props
    render () {
        const Option = Select.Option;
        const Item = Form.Item
        const {getFieldDecorator} = this.props.form
        const cate = this.props.cate
        return(
            <Form>
                <Item label="所属分类">
                    {getFieldDecorator('parentId',
                        {
                            initialValue:'0'
                        }
                    )(
                        <Select setfieldsvalue="0" >
                            {/*//defaultValue="0"*/}
                            <Option value="0">一级分类</Option>
                            {cate.map(v=><Option key={v._id} value={v._id}>{v.name}</Option>)}
                        </Select>
                    )}

                </Item>
                <Item label="品类名称">
                    {getFieldDecorator('categoryName',{

                    })(
                        <Input  placeholder="请输入品类名称" />
                    )

                    }
                </Item>
            </Form>
        )
    }
}
AddFrom = Form.create()(AddFrom)