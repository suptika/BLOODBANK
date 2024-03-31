import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import {
  getAntdInputValidation,
  getMailInputValidation,
  getMobInputValidation,
} from "../../utils/helpers";

const OrgHospitalForm = ({ type }) => {
  const isValidPassword = (password) => {
    // Password must be at least 8 characters long, contain at least one uppercase letter, and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "organizationName"}
        rules={getAntdInputValidation()}
      >
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={getMailInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item name="mobile" label="Mobile" rules={getMobInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item
        name="website"
        label="Website"
        rules={getAntdInputValidation()}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          ...getAntdInputValidation(),
          {
            validator: (_, value) => {
              if (isValidPassword(value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Password must be at least 8 characters long, contain at least one uppercase letter, and one digit."
              );
            },
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        className="col-span-2"
        rules={getAntdInputValidation()}
      >
        <TextArea />
      </Form.Item>
    </>
  );
};

export default OrgHospitalForm;
