import axios from "axios";
import React, { useEffect, useState } from "react";
import { getData, postData } from "../../services/httpClient/HttpClient";

const AxiosSamp = () => {
  const [reqMessage, setReqMessage] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3001/posts`)
  //       .then((response) => {
  //         setReqMessage(`${response.statusText}-${response.status}`);
  //       })
  //       .catch((error) => {
  //         if (error) {
  //           setReqMessage(`${error.response.data}-${error.response.status}`);
  //         }
  //       });
  //   }, []);

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3001/posts`, {
  //         params: {
  //           id: 99,
  //         },
  //       })
  //       .then((response) => {
  //         setReqMessage(`${response.statusText}-${response.status}`);
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         setReqMessage(`${error.response.data}-${error.response.status}`);
  //       })

  //       .finally(() => {
  //         console.log("req is Done!!!");
  //       });
  //   }, []);

  //   useEffect(() => {
  //     axios
  //       .post(`http://localhost:3001/users`, {
  //         id: 4,
  //         firstName: "amir",
  //         lastName: "amiree",
  //       })
  //       .then((response) => {
  //         setReqMessage(`${response.statusText}-${response.status}`);
  //         console.log(response);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  useEffect(() => {
    getData("posts").then((response) => console.log(response));
  }, []);

  useEffect(() => {
    postData("users", { id: 7, firstName: "demo", lastName: "demoee" }).then(
      (response) => console.log(response)
    );
  }, []);
  return (
    <div>
      <h1>{reqMessage}</h1>
    </div>
  );
};

export default AxiosSamp;
