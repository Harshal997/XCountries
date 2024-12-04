export const getCountries = async () => {
    try {
        const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
        const data = await response.json();
        console.log("countries",data);
        return data;
    }   
    catch(error) {
        console.error("Error fetching data: ", error);
    }
}