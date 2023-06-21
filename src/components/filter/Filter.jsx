import React, {useState, useEffect, useRef} from 'react';

import styles from './Filter.module.scss'
import {Select} from '@mantine/core';
import {Input} from "@mantine/core";

import YearSelect from "../select/yearSelect";


const Filter = ({
                    authors,
                    locations,
                    setChangeInput,
                    setSelectedAuthor,
                    setSelectedLocation,
                    setTargetFrom,
                    setTargetBefore,
                    targetFrom,
                    targetBefore
                }) => {

    const [isOpen, setIsOpen] = useState(false)
    const filterRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    const authorData = authors.map((author) => ({label: author.name, value: author.id}));


    const locationData = locations.map((place) => ({label: place.location, value: place.id}))


    const handleAuthorSelect = (optionValue) => {
        setSelectedAuthor(optionValue);
    };

    const handleLocationSelect = (optionValue) => {
        setSelectedLocation(optionValue);
    };

    const openFilter = (e) => {
        e.preventDefault();
        toggleFilter();
    };


    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={styles.selects} ref={filterRef}>
            <Input className={styles.input} placeholder="Name" onChange={setChangeInput}/>
            <div>
                <Select className={styles.input} clearable placeholder="Authors" data={authorData}
                        onChange={handleAuthorSelect}/>
            </div>
            <div>
                <Select className={styles.input} clearable placeholder="Location" data={locationData}
                        onChange={handleLocationSelect}/>
            </div>

            <div className={styles.input}>
                <Input readOnly className={styles.input} onClick={openFilter} placeholder="Created"
                       onChange={setChangeInput}/>
                {isOpen ? <div className={styles.filter_year}>
                    <YearSelect targetBefore={targetBefore} targetFrom={targetFrom} setTargetBefore={setTargetBefore}
                                setTargetFrom={setTargetFrom}/>
                </div> : ''}

            </div>


        </div>
    );
};

export default Filter;
