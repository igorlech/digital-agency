import {Box, CircularProgress, Pagination} from "@mui/material";

const PaginationBox = ({loading, pageSize, pageNumber, setPageNumber, length}) => {
    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <>
            {loading ? <CircularProgress/> :
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 5}}>
                    <Pagination
                        count={Math.ceil(length / pageSize)}
                        page={pageNumber}
                        onChange={handleChange}
                    />
                </Box>
            }
        </>
    )
}

export default PaginationBox