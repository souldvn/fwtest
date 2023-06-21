import React from 'react';
import {Input } from '@mantine/core';
import styles from './yearSelect.module.css'

const YearSelect = ({setTargetFrom, setTargetBefore, targetFrom, targetBefore}) => {

    const changeYearFrom = (event) =>{
        setTargetFrom(event.target.value);
        console.log(event.target.value)

    }

    const changeYearBefore = (event) =>{
        setTargetBefore(event.target.value)
        console.log(event.target.value)

    }




    return (
        <div className={styles.year_filter}>
            <Input
                placeholder="From"
                type="number"
                onChange={changeYearFrom}
                value={targetFrom}

            />
            <div className={styles.after}></div>
            <Input
                placeholder="Before"
                type="number"
                onChange={changeYearBefore}
                value={targetBefore}

            />

        </div>
    );
};

export default YearSelect;
