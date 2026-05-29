import axios from "axios";

export const apiGetCall1 = async (url) => {
    try {
        var response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
    const result = await response.json();
    return result;
}

export const apiGetCall2 = async (url) => {
    try {
        var result = await axios.get(url);

    } catch (error) {
        console.log(error);
    }
    console.log(result);
}

export const apiGetCall3 = (url) => {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error));
}






