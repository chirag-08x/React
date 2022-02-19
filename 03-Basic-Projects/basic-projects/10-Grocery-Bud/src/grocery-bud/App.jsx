import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./index.css";

const getLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem("list"));
  if (list) {
    return list;
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changes");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearItems = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      {alert.show && (
        <Alert {...alert} removeAlert={showAlert} list={list}></Alert>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <h1>grocery bud</h1>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <article className="list-item">
        {list.length > 0 && (
          <List items={list} removeItem={removeItem} editItem={editItem}></List>
        )}
      </article>
      {list.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear items
        </button>
      )}
    </section>
  );
}

export default App;
