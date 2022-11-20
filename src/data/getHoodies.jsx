export const getBasics = async (setMainBasics) => {
        const response = await fetch("http://localhost:1337/api/basics");
        const mainBasics = await response.json();
        setMainBasics(mainBasics.data)
    }


