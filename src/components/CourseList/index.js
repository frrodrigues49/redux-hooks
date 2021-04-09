import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../util/functions";
import { mapDispatchActions } from "../../actions/course";

const initialFormState = {
  id: null,
  name: "",
  title: ""
};

function CourseList() {
  const courses = useSelector(state => state.course.data);
  const dispatch = useDispatch();
  const actions = mapDispatchActions(dispatch);

  const [data, setData] = useState(initialFormState);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    if (isEdit) {
      actions.edit(data.id, data);
      setIsEdit(false);
    } else {
      actions.add(data);
    }

    setData(initialFormState);
  };

  const handleEdit = item => {
    if (isEdit) {
      setIsEdit(false);
      setData(initialFormState);
    } else {
      setIsEdit(true);
      setData(item);
    }
  };

  const handleDelete = id => {
    actions.remove(id);
  };

  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col-6">
          <input
            className="form-control"
            name="name"
            placeholder="Digitte um Nome"
            value={data.name}
            onChange={e => handleChange(e, { data, setData })}
          />
        </div>
        <div className="col-5">
          <input
            className="form-control"
            name="title"
            placeholder="Digitte um Titulo"
            value={data.title}
            onChange={e => handleChange(e, { data, setData })}
          />
        </div>
        <div className="col-1">
          <button className="btn btn-success" type="button" onClick={handleAdd}>
            {isEdit ? "Save" : "Add"}
          </button>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-12">
          <table className="table">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Titulo</th>
              <th
                colSpan="2"
                style={{
                  width: "10%",
                  textAlign: "center",
                  backgroundColor: "#ddd"
                }}
              >
                Açoes
              </th>
            </tr>
            {courses.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id.toFixed(4)}</td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td
                    style={{
                      backgroundColor: "#ddd"
                    }}
                  >
                    <button
                      className={isEdit ? "btn btn-primary" : "btn btn-default"}
                      onClick={() => handleEdit(item)}
                    >
                      {isEdit ? "Cancel" : "Edit"}
                    </button>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#ddd"
                    }}
                  >
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
