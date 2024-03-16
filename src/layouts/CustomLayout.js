import {React,useState} from 'react';
import { Layout, Flex } from 'antd';
import CustomHeader from '../components/CustomHeader';
import CustomCalendar from '../components/CustomCalendar';
import CustomTable from '../components/CustomTable';
import { MenuSpace, Table, Tag } from 'antd';

import DummyDatas from '../utills/DummyDatas'
import ProductList from '../screens/products/ProductList';
import CustomRoutes from '../CustomRoutes';
import { AppstoreOutlined, SettingOutlined,MenuOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: "70%",
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 0,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};
const sidebarItems = [
  { label: 'Products', path: '/' },
  { label: 'Calendar', path: '/calendar' },
  // { label: 'Product Add', path: '/product-add' },
  // Add more items as needed
];

function CustomLayout(){
  let [showSidebar, setShowSidebar] = useState(true)
let toggleSidebar=()=>{
  setShowSidebar(showSidebar?false:true);
}

  return(
    <Layout style={layoutStyle}>

      <Header style={headerStyle}>
     
  <MenuOutlined onClick={toggleSidebar}/>
        {/* <CustomHeader/> */}
        
      </Header>

      <Layout>
        {showSidebar?<Sider width='20%' style={siderStyle}>
     <>
     <div>
     <ul>
        {sidebarItems.map((item) => (
          <li key={item.label}>
            <Link to={item.path} className="sidebar-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
     </div>
     </>
        </Sider>:null}
        <Content style={contentStyle}>
          <CustomRoutes/>
          {/* <ProductList/> */}
          {/* <CustomTable columns={columns} data={[]}/> */}
          {/* <CustomCalendar/> */}
        </Content>
      </Layout>
      
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
)};
export default CustomLayout;