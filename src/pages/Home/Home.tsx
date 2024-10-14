import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Card from '../../components/Card/Card';
import { fetchProducts } from '../../services/api';
import { Product } from '../../types/Product';
import Photo from './../../assets/images/photo.png';
import { TailSpin } from 'react-loader-spinner'
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData]: any = useState();
    const [colorSchema]: any[] = useState(["#55C2E6", "#FF5E7D", "#4BCF82", "#FF8B64", "#7335D2", "#F1C75B"]);

    useEffect(() => {
        fetchProducts()
            .then((res: Product[]) => {
                // try to change the order of the setData and setLoading here
                // and see if the UI breaks
                setTimeout(() => {
                    setData(res);
                    setLoading(false);
                }, 1000);
            })
            .catch((err) => {
                setLoading(false);
                setData();
            });
    }, []);

    const mapToCards = () => {
        return data?.map((product: any, index: number) => <Card
            product={product}
            key={1}
            colorBackground={colorSchema[index % colorSchema.length]}
        />)
    };

    return (
        <div className={styles['main-container']}>
            <div className={styles['report-container']}>
                <div className={styles['report-extension']}>
                    <img className={styles['main-img']} src={Photo} alt='product-owner' />
                    <div className={styles['info']}>
                        <span className={styles['sub-header']}>Report For</span>
                        <span className={styles['main-title']}> Best Sales</span>
                    </div>
                </div>
                <div className={styles['time-container']}>
                    <span>Daily</span>
                    <span className={styles['active']}>Weekly</span>
                    <span>Monthly</span>
                </div>
            </div>
            <div className={styles[`products-container`]}>
                {!loading && mapToCards()}
            </div>
            {loading && <div className={styles['loader-container']}>
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#5747EA"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>}
        </div>
    );
};

export default Home;
