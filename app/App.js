import React, { Component } from 'react'
import { connect } from 'react-redux'
import './less/ys.less';
import { Button, Table, Checkbox,Tag } from 'antd'

@connect(
    ({esc})=>({
        current:esc.current,
        total:esc.total,
        results:esc.results,
        color:esc.color,
    }),
    dispatch =>({
        dispatch
    }),
)
export default class App extends Component {
    componentWillMount(){
        this.props.dispatch({'type':'INIT'})
    }
    render() {
        return (
            <div className='wrap'>
                <Checkbox.Group
                value={this.props.color}
                onChange={(v)=>{
                    this.props.dispatch({'type':"CCOLOR_SAGA",'color':v})
                }}
                >
                    {/* {
                        ['']
                    } */}
                    <Checkbox value='红'>红</Checkbox>
                    <Checkbox value='蓝'>蓝</Checkbox>
                    <Checkbox value='灰'>灰</Checkbox>
                    <Checkbox value='黑'>黑</Checkbox>
                    <Checkbox value='白'>白</Checkbox>
                    <Checkbox value='黄'>黄</Checkbox>
                </Checkbox.Group>
                <br/>
                {
                    [
                        {'e':'color','c':'颜色'},
                    ].map(item => <Tag key={item.e} closable
                    onClose={()=>{
                    this.props.dispatch({'type':'CCOLOR_SAGA','color':[]})
                    }
                }
                    >{this.props[item.e].join('或')}</Tag>)
                }
                <Table 
                rowKey='id'
                columns={[
                    {
                        'title': '图片',
                        'key': 'image',
                        'dataIndex': 'image',
                        'render':(txt,{id,image})=>{
                            return <div>
                                <img src={`http://192.168.2.250:3000/images/carimages_small/${id}/view/${txt}`} alt=""/>
                            </div>
                        }
                    },
                    { 'title': '编号', 'key': 'id', 'dataIndex': 'id' },
                    { 'title': '品牌', 'key': 'brand', 'dataIndex': 'brand' },
                    { 'title': '车系', 'key': 'series', 'dataIndex': 'series' },
                    { 'title': '颜色', 'key': 'color', 'dataIndex': 'color' },
                    { 'title': '发动机', 'key': 'engine', 'dataIndex': 'engine' },
                    { 'title': '尾气', 'key': 'exhaust', 'dataIndex': 'exhaust' },
                    { 'title': '燃料', 'key': 'fuel', 'dataIndex': 'fuel' }
                ]}
                dataSource={this.props.results}
                pagination={{
                    'total':this.props.total,
                    'current':this.props.current,
                    'pageSize':this.props.pageSize,
                    'onChange':(current) => {
                        this.props.dispatch({'type':'CPAGE_SAGA',current})
                    }
                }}
                />
                
            </div> 
        )
    }
}
