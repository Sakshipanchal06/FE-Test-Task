import React from "react";
import { Table, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { fetchAllpeoples } from "../feature/peopleSlice";
import { useSelector, useDispatch } from "react-redux";
import "./PeopleList.css";
const PeopleList = () => {
  const pageSize = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllpeoples());
  }, [dispatch]);
  const peopleList = useSelector((state) => state.people.data.results);

  const [name, setName] = useState("");
  const [eye, setEye] = useState("");
  const [hair, setHair] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [gender, setGender] = useState("");
  const [skin, setSkin] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      key: "name",
      title: (
        <div>
          <Typography.Text>Name</Typography.Text>
          <Input.Search
            onChange={(e) => {
              setName(e.target.value);
              setCurrentPage(1);
            }}
            value={name}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "name",
    },
    {
      key: "height",
      title: (
        <div>
          <Typography.Text>Height</Typography.Text>
          <Input.Search
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "height",
    },
    {
      key: "Mass",
      title: (
        <div>
          <Typography.Text>Mass</Typography.Text>
          <Input.Search
            value={mass}
            onChange={(e) => {
              setMass(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "mass",
    },
    {
      key: "gender",
      title: (
        <div>
          <Typography.Text>Gender</Typography.Text>
          <Input.Search
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "gender",
    },
    {
      key: "skin_color",
      title: (
        <div>
          <Typography.Text>Skin Color</Typography.Text>
          <Input.Search
            value={skin}
            onChange={(e) => {
              setSkin(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "skin_color",
    },
    {
      key: "hair_color",
      title: (
        <div>
          <Typography.Text>Hair Color</Typography.Text>
          <Input.Search
            value={hair}
            onChange={(e) => {
              setHair(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "hair_color",
    },
    {
      key: "eye_color",
      title: (
        <div>
          <Typography.Text>Eye Color</Typography.Text>
          <Input.Search
            value={eye}
            onChange={(e) => {
              setEye(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search here"
          />
        </div>
      ),
      dataIndex: "eye_color",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={peopleList}
        rowKey="id"
        pagination={{
          pageSize,
          current: currentPage,
          total: peopleList?.count,
          onChange(page) {
            setCurrentPage(page);
          },
        }}
      />
    </div>
  );
};

export default PeopleList;
