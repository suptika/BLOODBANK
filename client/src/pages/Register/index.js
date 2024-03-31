import React, { useEffect } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import OrgHospitalForm from "./OrgHospitalForm";
import { RegisterUser } from "../../Api/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import {
  getAntdInputValidation,
  getMailInputValidation,
  getMobInputValidation,
} from "../../utils/helpers";

const Register = () => {
  const [type, setType] = React.useState("donar");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await RegisterUser({
        ...values,
        userType: type,
      });
      dispatch(SetLoading(false));
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const isValidPassword = (password) => {
    // Password must be at least 8 characters long, contain at least one uppercase letter, and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary ">
      <Form
        layout="vertical "
        className="bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2"
        onFinish={onFinish}
      >
        <h1 className="col-span-2 uppercase text-2xl">
          <span className="text-primary">
            <h1 className="col-span-2 uppercase text-2xl">
              <span className="text-primary">
                {type === "donar" ? "DONOR" : type.toUpperCase()} - REGISTRATION
              </span>
              <hr />
            </h1>
          </span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => {
            setType(e.target.value);
          }}
          value={type}
          className="col-span-2"
        >
          <Radio value="donar">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        {type === "donar" && (
          <>
            <Form.Item
              label="Name"
              name="name"
              rules={getAntdInputValidation()}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={getMailInputValidation()}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={getMobInputValidation()}
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
          </>
        )}

        {type !== "donar" && <OrgHospitalForm type={type} />}

        <Button type="primary" className="col-span-2" htmlType="submit">
          Register
        </Button>

        <Link
          to="/login"
          className="col-span-2 text-center text-gray-700 underline"
        >
          Already have an account? Login
        </Link>
      </Form>
    </div>
  );
};

export default Register;
