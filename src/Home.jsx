import React from "react";
import "./App.css";
import deleteIcon from "./delete.png";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: [
        { id: 1, title: "Mengerjakan Tugas", completed: false },
        { id: 2, title: "Mengerjakan Kuis", completed: false },
      ],
    };
    this.input = "";
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleInput = (e) => {
    this.input = e.target.value;
  };

  handleSubmit = () => {
    let newactivity = {
      id: this.state.activity.length + 1,
      title: this.input,
      completed: false,
    };

    this.setState({ activity: [...this.state.activity, newactivity] });
    console.log(this.state);
  };

  handleCheckBox = (e, index) => {
    let newactivity = [...this.state.activity];
    newactivity[index].completed = e.target.checked;

    this.setState({ activity: [...newactivity] });
  };

  handleDelete = (index) => {
    if (index) {
      const activitiesList = [...this.state.activity];
      const newActivitiesList = activitiesList.filter(
        (activity) => activity.id !== index
      );

      this.setState(() => ({
        activity: [...newActivitiesList],
      }));
    }
  };

  render() {
    let data = this.state.activity ?? [];
    return data.length > 0 ? (
      <div
        style={{
          border: "2px solid #4a4a4a",
          borderRadius: "10px",
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h3>TO DO LIST APP</h3>
        <div>
          <input
            type="text"
            onChange={this.handleInput}
            style={{ height: "30px", width: "500px", borderRadius: "10px" }}
          />
          <button onClick={this.handleSubmit} style={{ height: "30px" }}>
            Submit
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "max-content",
            justifyContentc: "center",
            margin: "auto",
          }}
        >
          {this.state.activity.map((element, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: "10px",
                  rowGap: "20px",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked={element.value}
                  onClick={(e) => this.handleCheckBox(e, index)}
                  name=""
                  id=""
                />
                {element.completed ? (
                  <p>
                    <s style={{ color: "red" }}>{element.title}</s>
                  </p>
                ) : (
                  <p>{element.title}</p>
                )}
                <button
                  onClick={() => this.handleDelete(element.id)}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img srcSet={deleteIcon} alt="" style={{ width: "30px" }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <h3>You dont have activity yet</h3>
    );
  }
}

export default Home;
