const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});

const Openai = new OpenAIApi(configuration);

export default Openai;