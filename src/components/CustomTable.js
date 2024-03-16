import React from 'react';
import { Table } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];



// let data=[];
// for (let index = 1; index < 1001; index++) {
//      data[index-1] =   {
//         key: index,
//         name: 'John Brown '+index,
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//       };
    
// }


const CustomTable = ({
  columns=[],
  data=[]
  }) =>
  <div>
    

      <Table columns={columns} dataSource={data} />
  </div>
;
export default CustomTable;