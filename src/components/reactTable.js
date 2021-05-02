import React from "react";
import ReactTable from "react-table";
import firebase from "firebase";

/* Props in this component
- node
- c1
- c1Width
- c2
- c2Width
- c3
- c3Width
- c4
- c4Width
- pageSize
*/

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          c1: "",
          c2: "",
          c3: "",
          c4: "",
        },
      ],
    };
  }
  getData() {
    const data = [];
    const node = this.props.node;
    return firebase
      .database()
      .ref(node)
      .on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const allData = childSnapshot.val();
          const completeData = {
            c1: (
              <a
                href={allData.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {allData.projectTitle}
              </a>
            ),
            c2: allData.projectDesc,
            c3: allData.projectLang,
            c4: allData.projectDate,
          };
          data.push(completeData);
        });
        this.setState({ data });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const columns = [
      {
        Header: this.props.c1,
        accessor: "c1",
        width: this.props.c1Width,
        maxWidth: this.props.c1Width,
      },
      {
        Header: this.props.c2,
        accessor: "c2",
        width: this.props.c2Width,
        maxWidth: this.props.c2Width,
      },
      {
        Header: this.props.c3,
        accessor: "c3",
        width: this.props.c3Width,
        maxWidth: this.props.c3Width,
      },
      {
        Header: this.props.c4,
        accessor: "c4",
        width: this.props.c4Width,
        maxWidth: this.props.c4Width,
      },
    ];
    return (
      <div className="react-data-table">
        <ReactTable
          columns={columns}
          data={this.state.data}
          defaultPageSize={this.props.pageSize}
        ></ReactTable>
      </div>
    );
  }
}

export default DataTable;
