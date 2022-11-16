const getData = async ({url, setData, setLoading}) => {
    setLoading(true)
    try {
        const response = await fetch(url)
        const data = await response.json();
        setData(data)
        setLoading(false)
    } catch (error) {
        console.log(error + 'Oh come on! These should be easy peeps! What')
        setLoading(false)
    }
}

export default getData