import axios from "axios";

type Options = { query: string, variables?: any };

export const client = async (options: Options) => {
    let response = await axios(
        {
            url: "/api/graphql",
            method: 'post',
            data: {
                query: options.query,
                variables: options.variables
            }
        }
    );
    return response.data;
}