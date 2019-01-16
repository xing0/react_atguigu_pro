import React, {Component} from 'react'
import './navLeft.less'
import logo from '../../image/logo.png'
import { Menu, Icon } from 'antd';
import {NavLink,withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Nav_left extends Component {
    // state = {
    //     menu: this.menu
    // }
    componentWillMount =()=>{
        this.menu = this.getMenu(menuList)
        console.log(this.menu);
    }

    getMenu = (menuList)=>{
       return menuList.reduce((pre,item)=>{
            const {title,icon,key}=item
           if(item.children){
               const temp =(
                <SubMenu key={key} title={<span><Icon type={icon} /><span>{title}</span></span>}>
                   {/*<MenuItemGroup key={key} >*/}
                       {this.getMenu(item.children)}
                     {/*</MenuItemGroup>*/}
                </SubMenu>
            )
                pre.push(temp)
            }else{
               const temp =(
                <Menu.Item key={key}>
                    <NavLink to={key}>
                        <Icon type={icon} />{title}
                    </NavLink>
                </Menu.Item>)
                pre.push(temp)
            }

        return pre
        },[])
    }

    render() {
        const path = this.props.location.pathname
        console.log(path);
        return (
            <div className="left-nav">
                <NavLink to="/home" className="logo">
                    <img src={logo} alt=""/>
                    <h1>尚硅谷后台</h1>
                </NavLink>

                <Menu
                        defaultSelectedKeys={[path]}
                        // defaultOpenKeys={['/products']}
                        mode="inline"
                        theme="dark"
                    >
                        {this.menu}
                    </Menu>
            </div>
        )
    }
}
export default withRouter(Nav_left)