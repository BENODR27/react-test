import React from 'react'
import { Button, Drawer,Space} from 'antd';
import { useFormik } from 'formik';
import * as yup from "yup";
import CustomInput from './CustomInput';

function CustomDrawer({title,showDrawer,placement,onClose,open}) {
 
//formik
let customInitialValues= {
  title: "",
  price: '',
  description: '',
  image: 'https://i.pravatar.cc',
  category: ''
};

let customValidationSchema={
    title: yup.string().required("title is Required"),
    price: yup.string().required("price is Required"),
    description: yup.string().required("description is Required"),
    image: yup.string().required("image is Required"),
    category: yup.string().required("category is Required"),

};

const addProductForm = useFormik({
    initialValues: customInitialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: yup.object().shape(customValidationSchema),
    onSubmit: async (e) => {
      console.log(e);
      try {
        
        // let response =await callPostApiJson("products");
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  
//end

const onSubmit = (e) => {
  addProductForm.handleSubmit();
};
  return (
       <>
        <Button
        onClick={showDrawer}
        type="primary"
        >
        {title}     
        </Button>
          
          <Drawer
            title={title}
            placement={placement}
            width={500}
            onClose={onClose}
            open={open}
            
            extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onSubmit}>
              Save
            </Button>
          </Space>
        }
         >
       <CustomInput 
            type='text'
            placeholder='Title'
            value={addProductForm.values.title}
            change={(e) => {
                addProductForm.setFieldValue("title", e);
        }}
        />  
               <CustomInput 
            type='price'
            placeholder='price'
            value={addProductForm.values.price}
            change={(e) => {
                addProductForm.setFieldValue("price", e);
        }}
        />  
       
               <CustomInput 
            type='description'
            placeholder='description'
            value={addProductForm.values.description}
            change={(e) => {
                addProductForm.setFieldValue("description", e);
        }}
        />  
        <CustomInput 
            type='category'
            placeholder='category'
            value={addProductForm.values.category}
            change={(e) => {
                addProductForm.setFieldValue("category", e);
        }}
        />  
     
      </Drawer>
    </>
  )
}

export default CustomDrawer