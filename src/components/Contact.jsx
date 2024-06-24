import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, DatePicker, Select, Button } from "antd";

const { Option } = Select;

function Contact() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryData);
      })
      .catch((error) => {
        console.error("error fetching countries:", error);
      });
  }, []);
  const onFinish = (values) => {
    console.log("form values:", values);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-slate-500 md:mx-80 mx-100 rounded-xl p-10">
      <p className="mb-6">Contact Us</p>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input placeholder="Enter your first name here:" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input placeholder="Enter your last name here:" />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            { required: true, message: "Please enter your Date of Birth" },
          ]}
        >
          <DatePicker placeholder="" />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please enter your Country" }]}
        >
          <Select placeholder="Country">
            {countries.map((country) => (
              <Option key={country.code} value={country.name}>
                {country.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact;
