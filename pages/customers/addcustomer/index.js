import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCost, getPrice, url } from "../index";
export default function EditId() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  const date = `${day}/${month}/${year}`;

  const router = useRouter();

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function addCustomer(id) {
    axios
      .post(`${url}/api/posts`, {
        name: name,
        value: Number(value),
        date: date,
      })
      .then(() => {
        router.push("/customers");
      });
  }
  return (
    <div>
      <form className="edit-modal" onSubmit={handleSubmit}>
        <h2>أدخل قيمة الرصيد المرادة</h2>
        <div>
          <label className="label-input">الاسم</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="label-input">الرصيد</label>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setPrice(getPrice(Number(e.target.value)).toFixed(0));
            }}
          />
        </div>
        {price > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "50px",
            }}
          >
            <p>سعر الرصيد على الزبون : {price}</p>
            <p>تكلفة الرصيد عليك : {getCost(value).toFixed(0)}</p>
          </div>
        ) : undefined}
        <div className="buttons">
          <button
            onClick={() => {
              addCustomer();
            }}
            className="ok"
          >
            تم
          </button>
          <Link href="/customers">
            <button className="back">تراجع</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
