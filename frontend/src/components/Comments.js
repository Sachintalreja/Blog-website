import { Box, Button, Textarea } from '@chakra-ui/react'
import React from 'react'

const Comments = () => {
    return (
        <>
            <Box>
                <Textarea placeholder='Here is a sample placeholder'
                    size='sm' border='1px solid black'></Textarea>
                <Button type="submit" style={{ border: '2px solid gray', borderRadius: '0.5rem', marginTop: '2rem', padding: '1rem', fontWeight: 'bold', backgroundColor: 'lightgray' }} >Add Comments </Button>
            </Box >
        </>

    )
}
export default Comments