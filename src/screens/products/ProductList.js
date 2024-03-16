import React, { useEffect, useState } from 'react';
import { callGetApi } from '../../api/callApi';
import CustomTable from '../../components/CustomTable';
import { App,Flex, Spin,Button, Drawer, Radio, Form, Input, Popconfirm,Badge, Dropdown,Space, Table, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CustomDrawer from '../../components/CustomDrawer';
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

      //drawer
      const [open, setOpen] = useState(false);
      const [placement, setPlacement] = useState('right');
      const showDrawer = () => {
        setOpen(true);
      };
      const onChange = (e) => {
        setPlacement(e.target.value);
      };
    
      const onClose = () => {
        setOpen(false);
      };
      //drawer end


      //action dropdown data
  const items = [
    {
      key: '1',
      label: 'Action 1',
    },
    {
      key: '2',
      label: 'Action 2',
    },
  ];

  //table header
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
     
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a>
             <DownOutlined />
            
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callGetApi("products");
        setData(response.data);

      } catch (error) {

        console.error('Error fetching data:', error);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, true);

  return (
    <div>
      {loading ? (
         <Flex align="center" gap="middle">
         <Spin size="large" />
       </Flex>
      ) : (
        <div> 
           <CustomDrawer title={"Add Product"} showDrawer={showDrawer} placement={placement} onClose={onClose} open={open}/>
      <CustomTable columns={columns} data={data}/>
      </div>        
      )}
    </div>
  );
};

export default ProductList;
