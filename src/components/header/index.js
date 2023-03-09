import React, { useState } from 'react'
import Image from 'mui-image'
import {
    Box,
    Input,
    Select,
    MenuItem,
    Button,
} from '@mui/material'
import { styled } from '@mui/system';
import { SearchIcon } from '../icons'


const HeaderBox = styled(Box)(({ theme }) => ({
    height: '80px',
    display: 'flex',
    alignItems: 'center',
}));

const SearchBox = styled(Box)(({ theme }) => ({
    height: '40px',
    width: '685px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #89919A',
}));

const SearchSelect = styled(Select)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: '6px 12px',

    '& .MuiSelect-select': {
        padding: 0,
        fontSize: '14px',
        fontWeight: '400',
        color: '#32363A',
    },

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        outline: 'none',
    },
}));

const SearchMenuItem = styled(MenuItem)(({ theme }) => ({
    color: '#74777A',
}));

const Buttonx = styled(Button)(({ theme }) => ({
    height: '40px',
    width: '110px',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary,
    marginLeft: '12px',
    boxShadow: 'none',
}));

export const Header = () => {
    const [search, setSearch] = useState('');

    return (
        <HeaderBox>
            <Box sx={{
            }}>
                <Image
                    src='/logo-ntt.svg'
                    alt="Logo"
                    width='170px'
                    height='25px'
                />
            </Box>

            <Box sx={{ ml: '87px' }}>
                <SearchBox>
                    <Input
                        placeholder="Search..."
                        disableUnderline
                        fullWidth
                        sx={{
                            color: '#74777A',
                            padding: '8px 16px',
                        }}
                    />
                    <Box
                        sx={{
                            height: '100%',
                            width: '132px',
                            backgroundColor: '#F4F5F6',
                            borderTopRightRadius: '4px',
                            borderBottomRightRadius: '4px',
                        }}
                    >
                        <SearchSelect disableUnderline
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            displayEmpty
                            placeholder="Categories"
                        >
                            <SearchMenuItem value=''>
                                Categories
                            </SearchMenuItem>
                            <SearchMenuItem value="all">All</SearchMenuItem>
                            <SearchMenuItem value="people">People</SearchMenuItem>
                            <SearchMenuItem value="documents">Documents</SearchMenuItem>
                        </SearchSelect>
                    </Box>
                </SearchBox>
            </Box>
            <Buttonx variant="contained">
                <SearchIcon />
            </Buttonx>
        </HeaderBox>
    )
}