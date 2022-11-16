import handleFilter from "../utils/handleFilter";
import getData from "../utils/getData";
import {useState} from "react";
import {Box, Button, Container, TextField} from "@mui/material";

const Filter = ({setPageNumber, url, setData, setLoading}) => {
    const [filter, setFilter] = useState('')

    const handleChangeFilter = (event) => {
        setFilter(event.target.value)
    };

    const handleSubmit = async () => {
        setPageNumber(1)
        await handleFilter({url, setData, setLoading, filter})
    };

    const handleReset = () => {
        setPageNumber(1)
        getData({url, setData, setLoading})
    };

    return (
        <Container maxWidth={'xl'}>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <TextField
                    label="Search bar"
                    onChange={handleChangeFilter}
                />
                <Button onClick={handleSubmit} variant={'outlined'}>Submit</Button>
                <Button onClick={handleReset}>Reset search</Button>
            </Box>
        </Container>
    )
}

export default Filter