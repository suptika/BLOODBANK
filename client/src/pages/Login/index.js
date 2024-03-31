import React, { useEffect } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../Api/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import { getAntdInputValidation } from "../../utils/helpers";

const Login = () => {
  const [type, setType] = React.useState("donar");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await LoginUser({
        ...values,
        userType: type,
      });
      dispatch(SetLoading(false));
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
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
  return (
    <div className="flex h-screen items-center justify-center bg-primary ">
      <Form
        layout="vertical "
        className="bg-white rounded shadow grid grid-cols-1 p-5 gap-5 w-1/3"
        onFinish={onFinish}
      >
        <h1 className=" uppercase text-2xl">
          <span className="text-primary">
            {type === "donar" ? "DONOR" : type.toUpperCase()} - LOGIN
          </span>
          <hr/>
        </h1>

        <Radio.Group
          onChange={(e) => {
            setType(e.target.value);
          }}
          value={type}
        >
          <Radio value="donar">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={getAntdInputValidation()}
        >
          <Input type="password" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Login
        </Button>

        <Link to="/register" className=" text-center text-gray-700 underline">
          Dont have an account ? Register
        </Link>
      </Form>
    </div>
  );
};

export default Login;
