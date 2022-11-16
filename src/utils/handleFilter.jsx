const handleFilter = async ({url, setData, setLoading, filter}) => {
    setLoading(true)
    try {
        const response = await fetch(url)
        const data = await response.json();
        setData(data.filter(item => item['Name'].toLowerCase().includes(filter.toLowerCase())))
        setLoading(false)
    } catch (error) {
        console.log(error + 'Oh come on! These should be easy peeps! What')
        setLoading(false)
    }
};

export default handleFilter