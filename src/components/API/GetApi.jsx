import React, { useEffect, useState } from 'react';
import Gallery from "../Gallery/Gallery";
import Filter from "../filter/Filter";
import axios from 'axios';


const GetApi = () => {
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('')
    const [targetFrom, setTargetFrom] = useState('');
    const [targetBefore, setTargetBefore] = useState('');




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://test-front.framework.team/paintings');
                const data = response.data;
                setData(data);
                // console.log(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://test-front.framework.team/locations');
                const locations = response.data;
                setLocations(locations);
                // console.log(locations);
            } catch (err) {
                console.log(err);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get('https://test-front.framework.team/authors');
                const authors = response.data;
                setAuthors(authors);
                // console.log(authors);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAuthors();
    }, []);


    const setChangeInput = (event) => {
        setSearchValue(event.target.value);
    };



    const filteredData = data.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(searchValue.toLowerCase());
        const authorMatch = selectedAuthor ? item.authorId === selectedAuthor : true;
        const locationMatch = selectedLocation ? item.locationId === selectedLocation : true;
        const yearMatch =
            (!targetFrom || item.created >= parseInt(targetFrom)) &&
            (!targetBefore || item.created <= parseInt(targetBefore));
        return nameMatch && authorMatch && locationMatch && yearMatch;
    });

    return (
        <div>
            <Filter
                authors={authors}
                locations={locations}
                setChangeInput={setChangeInput}
                setSelectedAuthor={setSelectedAuthor}
                setSelectedLocation={setSelectedLocation}
                selectedAuthor={selectedAuthor}
                selectedLocation={selectedLocation}
                setTargetFrom={setTargetFrom}
                setTargetBefore={setTargetBefore}
                targetFrom={targetFrom}
                targetBefore={targetBefore}
            />
            <Gallery data={filteredData} locations={locations} authors={authors} />
        </div>
    );
};

export default GetApi;