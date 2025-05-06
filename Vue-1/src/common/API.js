import axios from "axios";
export default {
  data() {
    data: null;
  },
  methods: {
    async callApi(url) {
      const response = await axios.get(url);
      console.log(response);
    },
  },
};
