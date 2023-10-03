import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)({
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    '& > p': {
        fontSize: 14,
        padding: '12px 0',
        color: '#1d1d1f'
    }
})

const Info = () => {
    return (
        <Component>
            <Typography>
                Get up to ₹8000.00 instant savings on selected products with 
                eligible HDFC Bank cards.* <span style={{ color: '#2997ff' }}>Shop now &gt;</span>
            </Typography>
        </Component>
    )
}

export default Info;