import _ from "lodash";
import axios from "axios";
console.log(_.add(1, 2));

axios
  .get("anyurl")
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
