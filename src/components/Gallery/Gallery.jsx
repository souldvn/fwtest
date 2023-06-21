import React,{useState} from 'react';
import styles from './Gallery.module.css'
import {Pagination} from '@mantine/core';


const Gallery = ({data, locations, authors}) => {

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div >
            <div>
                <div className={styles.gallery}>
                    {currentPageData.map((item) => (
                        <div key={item.id} className={styles.gallery_item}>
                            <img
                                className={styles.gallery_img}
                                src={`https://test-front.framework.team${item.imageUrl}`}
                                alt={item.id}
                            />
                            <div className={styles.info}>
                                <div className={styles.name}>
                                    <b className={styles.title}>{item.name}</b>
                                </div>
                                <div className={styles.text}>
                                    <b>Author: </b>
                                    {authors.find((author) => author.id === item.authorId)?.name || ''}
                                </div>
                                <div className={styles.text}>
                                    <b>Created:</b> {item.created}
                                </div>
                                <div className={styles.text}>
                                    <b>Location: </b>
                                    {locations.find((location) => location.id === item.locationId)?.location ||
                                        ''}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination
                    className={styles.pagination}
                    color="dark"
                    total={totalPages}

                    withEdges
                    value={currentPage}
                    onChange={handlePageChange}
                    getItemProps={(page) => ({
                        component: 'a',
                        href: `#page-${page}`,
                    })}
                    getControlProps={(control) => {
                        const controlProps = {
                            component: 'a',
                        };

                        if (control === 'first') {
                            controlProps.href = '#page-1';
                            controlProps.disabled = currentPage === 1;
                        }

                        if (control === 'last') {
                            controlProps.href = `#page-${totalPages}`;
                            controlProps.disabled = currentPage === totalPages;
                        }

                        if (control === 'next') {
                            controlProps.href = `#page-${currentPage + 1}`;
                            controlProps.disabled = currentPage === totalPages;
                        }

                        if (control === 'previous') {
                            controlProps.href = `#page-${currentPage - 1}`;
                            controlProps.disabled = currentPage === 1;
                        }

                        return controlProps;
                    }}
                />
            </div>

        </div>
    );
};

export default Gallery;

