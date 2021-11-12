const axios = require('axios')
const itemsService = {};

itemsService.searchItems_GET = async (q) => {

    try {
        // Request to the end point
        let results = await axios.get(`${ process.env.API_BASE_URL }/sites/MLA/search?q=${q}`)

        return await results.data;

    } catch (e) {
        console.log(e);
        // Return false on Error
        return false;
    }

}

itemsService.detailItem_GET = async (itemId) => {

    try {
        // Request to the end point
        let results = await axios.get(`${ process.env.API_BASE_URL }/items/${itemId}`)

        return await results.data;

    } catch (e) {
        console.log(e);
        // Return false on Error
        return false;
    }
}

itemsService.detailItemDescription_GET = async (itemId) => {

    try {
        // Request to the end point
        let results = await axios.get(`${ process.env.API_BASE_URL }/items/${itemId}/description`)

        return await results.data;

    } catch (e) {
        console.log(e);
        // Return false on Error
        return false;
    }
}

module.exports = itemsService;